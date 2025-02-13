"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const server_1 = require("next/server");
const cloudinary_1 = require("cloudinary");
// import formidable from 'formidable';
const client_1 = __importDefault(require("@repo/db/client"));
cloudinary_1.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY || "",
    api_secret: process.env.CLOUDINARY_API_SECRET || "",
});
async function POST(req) {
    //   const form = formidable({ multiples: false });
    const formData = await req.formData();
    const file = formData.get('image');
    const userId = formData.get('userId');
    if (!file) {
        return server_1.NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }
    try {
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        const result = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary_1.v2.uploader.upload_stream({ folder: 'user-profile-images' }, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            });
            const stream = require('stream');
            const readableStream = new stream.PassThrough();
            readableStream.end(buffer);
            readableStream.pipe(uploadStream);
        });
        await client_1.default.user.update({
            where: { id: Number(userId) },
            data: { profileImage: result?.secure_url },
        });
        return server_1.NextResponse.json({ imageUrl: result?.secure_url });
    }
    catch (error) {
        console.error('Error:', error);
        return server_1.NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}

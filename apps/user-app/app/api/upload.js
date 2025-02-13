"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handler;
const cloudinary_1 = require("cloudinary");
const client_1 = __importDefault(require("@repo/db/client")); // Adjust this to your actual Prisma client path
const formidable_1 = __importDefault(require("formidable"));
cloudinary_1.v2.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
exports.config = {
    api: {
        bodyParser: false,
    },
};
async function handler(req, res) {
    if (req.method === 'POST') {
        const form = new formidable_1.default.IncomingForm();
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Form parsing error' });
            }
            try {
                const file = files.image;
                const result = await cloudinary_1.v2.uploader.upload(file.filepath, {
                    folder: 'user-profile-images',
                });
                const userId = fields.userId;
                const imageUrl = result.secure_url;
                // Save to the database
                await client_1.default.user.update({
                    where: { id: Number(userId) },
                    data: { profileImage: imageUrl },
                });
                res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
            }
            catch (error) {
                console.error('Upload error:', error);
                res.status(500).json({ message: 'Image upload failed' });
            }
        });
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

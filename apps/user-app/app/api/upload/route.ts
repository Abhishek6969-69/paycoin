import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
// import formidable from 'formidable';
import prisma from '@repo/db/client';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "",
  api_key: process.env.CLOUDINARY_API_KEY || "",
  api_secret: process.env.CLOUDINARY_API_SECRET || "",
});

export async function POST(req: Request) {
//   const form = formidable({ multiples: false });
  const formData = await req.formData();
  const file = formData.get('image') as File;
  const userId = formData.get('userId') as string;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await new Promise<{ secure_url: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: 'user-profile-images' },
        (error:any, result:any) => {
          if (error) reject(error);
          else resolve(result);
        }
      )
      
      const stream = require('stream');
      const readableStream = new stream.PassThrough();
      readableStream.end(buffer);
      readableStream.pipe(uploadStream);
    });

    await prisma.user.update({
      where: { id: Number(userId) },
      data: { profileImage: result?.secure_url },
    });

    return NextResponse.json({ imageUrl: result?.secure_url });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
} 
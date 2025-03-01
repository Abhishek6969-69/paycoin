import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import prisma from '@repo/db/client';
// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '',
  api_key: process.env.CLOUDINARY_API_KEY || '',
  api_secret: process.env.CLOUDINARY_API_SECRET || '',
});

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get('image') as File;
    const userId = formData.get('userId') as string;
    
    if (!image) {
      return NextResponse.json(
        { error: 'No image provided' },
        { status: 400 }
      );
    }

    // Create a temporary file path
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const tempFilePath = join('/tmp', image.name);
    await writeFile(tempFilePath, buffer);
    
    // Upload to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(tempFilePath, {
      folder: 'user-profile-images',
      public_id: `user_${userId}_${Date.now()}`,
      overwrite: true,
      resource_type: 'image'
    });
    
    // In a real app, you would save the image URL to your database here
    // For example: await db.user.update({ where: { id: userId }, data: { profileImage: uploadResult.secure_url } });
    await prisma.user.update({
      where: { id: Number(userId) },
      data: { profileImage: uploadResult.secure_url }
    });
    return NextResponse.json({
      message: 'Image uploaded successfully',
      imageUrl: uploadResult.secure_url
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Image upload failed' },
      { status: 500 }
    );
  }
}
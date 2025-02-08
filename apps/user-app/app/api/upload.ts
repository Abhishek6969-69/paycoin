import { v2 as cloudinary } from 'cloudinary';
import prisma from '@repo/db/client';  // Adjust this to your actual Prisma client path
import formidable from 'formidable';
import type { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ||"",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    
    form.parse(req, async (err, fields:any, files:any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Form parsing error' });
      }

      try {
        const file = files.image as formidable.File;
        const result = await cloudinary.uploader.upload(file.filepath, {
          folder: 'user-profile-images',
        });

        const userId = fields.userId as string;
        const imageUrl = result.secure_url;

        // Save to the database
        await prisma.user.update({
          where: { id: Number(userId) },
          data: { profileImage: imageUrl },
        });

        res.status(200).json({ message: 'Image uploaded successfully', imageUrl });
      } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ message: 'Image upload failed' });
      }
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Button } from "@repo/ui/button";

interface ProfileSectionProps {
  userData: any;
  onClose: () => void;
  onProfileUpdate: (imageUrl: string) => void;
}

export default function ProfileSection({ userData, onClose, onProfileUpdate }: ProfileSectionProps) {
  const { data: session } = useSession();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image to upload!");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("userId", String(session?.user?.id || ""));

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        onProfileUpdate(result.imageUrl);
        alert("Image uploaded successfully!");
        onClose();
      } else {
        console.error("Upload failed:", result.error);
        alert("Upload failed: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="space-y-6 bg-[#121212] p-6 rounded-lg shadow-md border border-gray-700">
      <div className="flex flex-col items-center">
        {userData?.profileImage ? (
          <Image
            className="w-[100px] h-[100px] rounded-full object-cover border-2 border-gray-500"
            src={userData.profileImage}
            width={100}
            height={100}
            alt="User Photo"
          />
        ) : (
          <div className="w-[100px] h-[100px] rounded-full bg-gray-800 flex items-center justify-center border border-gray-600">
            <span className="text-4xl text-gray-500">👤</span>
          </div>
        )}

        <label className="mt-4 cursor-pointer">
          <div className="bg-gray-700 text-gray-200 hover:bg-gray-600 px-4 py-2 rounded-md text-sm font-medium transition-all">
            Choose Photo
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </label>

        {file && (
          <p className="mt-2 text-sm text-gray-400">
            Selected: {file.name}
          </p>
        )}
      </div>

      <div className="flex  ml-10 space-x-2">
        <Button
          type="button"
          onClick={onClose}
          className="bg-gray-700 hover:bg-gray-600 text-gray-200 border border-gray-500"
        >
          Cancel
        </Button>
        <Button
          onClick={handleUpload}
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white border border-blue-500"
        >
          {isUploading ? "Uploading..." : "Upload Photo"}
        </Button>
      </div>
    </div>
  );
}

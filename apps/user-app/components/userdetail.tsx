"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function UserDetailCard({ session1 }: { session1: any }) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(session1?.user?.image || null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image!");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", session1?.user?.id);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const { imageUrl } = await response.json();
        alert("Image uploaded successfully!");
        setPreview(imageUrl); // Update UI with new image
      } else {
        alert("Image upload failed.");
      }
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  return (
    <div className="max-w-sm w-[400px] bg-white border rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-36 w-36">
          <Image
            src={preview || "/default-avatar.png"}
            alt="User Photo"
            width={144}
            height={144}
            className="rounded-full object-cover"
          />
        </div>
        <label className="mt-2 text-blue-600 cursor-pointer">
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          Choose Photo
        </label>
        <button
          onClick={handleUpload}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Upload Photo
        </button>
      </div>
    </div>
  );
}

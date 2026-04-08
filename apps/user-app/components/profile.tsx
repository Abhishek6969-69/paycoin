"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import { Camera, Mail, Phone, ShieldCheck, UploadCloud, UserCircle2 } from "lucide-react";
import { Button } from "@repo/ui/button";

interface ProfileSectionProps {
  userData: any;
  userId: string;
  onClose: () => void;
  onProfileUpdate: (imageUrl: string) => void;
}

function ReadOnlyField({
  label,
  value,
  icon
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        <span className="text-slate-500">{icon}</span>
        {label}
      </label>
      <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-sm">
        {value}
      </div>
    </div>
  );
}

export default function ProfileSection({ userData, userId, onClose, onProfileUpdate }: ProfileSectionProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const fullName = userData?.name || "CoinPay User";
  const email = userData?.email || "No email provided";
  const phone = userData?.number || "Not provided";
  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part: string) => part[0]?.toUpperCase())
    .join("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }
    if (!userId) {
      alert("Unable to identify user. Please sign in again.");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("userId", userId);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.ok) {
        onProfileUpdate(result.imageUrl);
        alert("Image uploaded successfully.");
        onClose();
      } else {
        console.error("Upload failed:", result.error);
        alert("Upload failed: " + (result.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("An error occurred during upload.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="px-6 py-6 sm:px-8">
      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
        {userData?.profileImage ? (
          <Image
            src={userData.profileImage}
            width={44}
            height={44}
            alt="User Photo"
            className="h-11 w-11 rounded-xl object-cover"
          />
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-sm font-semibold text-white">
            {initials || "CP"}
          </div>
        )}

        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-950">{fullName}</p>
          <p className="truncate text-xs text-slate-500">{email}</p>
        </div>
      </div>

      <div>
        <div className="border-b border-slate-200 pb-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="relative">
                {userData?.profileImage ? (
                  <Image
                    className="h-20 w-20 rounded-2xl object-cover ring-4 ring-slate-100"
                    src={userData.profileImage}
                    width={80}
                    height={80}
                    alt="User Photo"
                  />
                ) : (
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-lg font-semibold text-white ring-4 ring-slate-100">
                    {initials || "CP"}
                  </div>
                )}

                <label className="absolute -bottom-2 -right-2 cursor-pointer rounded-full border border-slate-200 bg-white p-2 shadow-md transition hover:border-slate-300">
                  <Camera className="h-4 w-4 text-slate-600" />
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
              </div>

              <div>
                <p className="text-base font-semibold text-slate-950">Profile picture</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Upload a clear avatar to make your CoinPay profile look polished and professional.
                </p>
                {file && (
                  <div className="mt-3 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700">
                    Selected: {file.name}
                  </div>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-500">
              Supports PNG, JPG and JPEG up to 10MB.
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button onClick={handleUpload} disabled={isUploading} loading={isUploading} className="rounded-xl px-5">
              {!isUploading && <UploadCloud className="mr-2 h-4 w-4" />}
              {isUploading ? "Uploading..." : "Upload Image"}
            </Button>
            <Button variant="secondary" onClick={onClose} className="rounded-xl px-5">
              Cancel
            </Button>
          </div>
        </div>

        <div className="grid gap-4 pt-6 md:grid-cols-2">
          <ReadOnlyField label="Full name" value={fullName} icon={<UserCircle2 className="h-4 w-4" />} />
          <ReadOnlyField label="Phone number" value={phone} icon={<Phone className="h-4 w-4" />} />
          <ReadOnlyField label="Email address" value={email} icon={<Mail className="h-4 w-4" />} />
          <ReadOnlyField label="Status" value="Verified and active" icon={<ShieldCheck className="h-4 w-4" />} />
        </div>
      </div>
    </div>
  );
}

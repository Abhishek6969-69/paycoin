"use client";

import { ReactNode, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Mail, Phone, ShieldCheck, UserCircle2 } from "lucide-react";
import { Button } from "@repo/ui/button";

const ProfileSection = dynamic(() => import("components/profile"), { ssr: false });

type ProfileUserData = {
  name: string | null;
  email: string | null;
  number: string | null;
  profileImage: string | null;
};

function DetailField({
  label,
  value,
  icon
}: {
  label: string;
  value: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
      <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        <span className="text-slate-500">{icon}</span>
        {label}
      </div>
      <div className="break-all text-sm font-semibold text-slate-900 sm:text-base">{value}</div>
    </div>
  );
}

export default function ProfilePageClient({
  initialUserData,
  sessionUserName,
  sessionUserEmail,
  sessionUserId
}: {
  initialUserData: ProfileUserData | null;
  sessionUserName?: string | null;
  sessionUserEmail?: string | null;
  sessionUserId: string;
}) {
  const [userData, setUserData] = useState<ProfileUserData | null>(initialUserData);
  const [showProfileSection, setShowProfileSection] = useState(false);

  const handleClose = () => setShowProfileSection(false);

  const handleProfileUpdate = (imageUrl: string) => {
    setUserData((prevState) => ({
      ...(prevState || {
        name: sessionUserName ?? null,
        email: sessionUserEmail ?? null,
        number: null,
        profileImage: null
      }),
      profileImage: imageUrl
    }));
  };

  const fullName = userData?.name || sessionUserName || "CoinPay User";
  const email = userData?.email || sessionUserEmail || "No email provided";
  const phone = userData?.number || "Not provided";
  const initials = fullName
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part: string) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.08),_transparent_32%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">Account Settings</p>
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Profile</h1>
              <p className="mt-1 text-sm text-slate-500 sm:text-base">
                Update your personal details and keep your CoinPay account polished.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Account active
            </div>
          </div>
        </div>

        {showProfileSection && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
            <div className="w-full max-w-3xl rounded-[32px] border border-white/70 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
              <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 sm:px-8">
                <div>
                  <h2 className="text-xl font-semibold text-slate-950">Edit profile</h2>
                  <p className="mt-1 text-sm text-slate-500">Change your avatar and refresh your account details.</p>
                </div>
                <button
                  onClick={handleClose}
                  className="rounded-full border border-slate-200 p-2 text-slate-400 transition hover:border-slate-300 hover:text-slate-700"
                  aria-label="Close"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ProfileSection
                onClose={handleClose}
                userData={userData}
                userId={sessionUserId}
                onProfileUpdate={handleProfileUpdate}
              />
            </div>
          </div>
        )}

        <section className="overflow-hidden rounded-[32px] border border-white/70 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <h2 className="text-2xl font-semibold text-slate-950">Account</h2>
          </div>

          <div className="px-6 py-6 sm:px-8">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
              <div className="flex flex-col gap-6 border-b border-slate-200 pb-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="flex items-start gap-4">
                  {userData?.profileImage ? (
                    <Image
                      src={userData.profileImage}
                      alt="User profile"
                      width={76}
                      height={76}
                      priority
                      sizes="76px"
                      className="h-[76px] w-[76px] rounded-2xl object-cover ring-4 ring-white"
                    />
                  ) : (
                    <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-semibold text-white ring-4 ring-white">
                      {initials || "CP"}
                    </div>
                  )}

                  <div>
                    <p className="text-sm font-semibold text-slate-950">Profile picture</p>
                    <p className="mt-1 max-w-md text-sm leading-6 text-slate-500">
                      Use a clean, recognizable profile photo so your account feels professional and trustworthy.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Button onClick={() => setShowProfileSection(true)} className="rounded-xl px-5">
                        Upload Image
                      </Button>
                      <Button variant="secondary" onClick={() => setShowProfileSection(true)} className="rounded-xl px-5">
                        Edit Profile
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
                  PNG, JPG and WEBP work best for avatars.
                </div>
              </div>

              <div className="grid gap-4 pt-6 md:grid-cols-2">
                <DetailField label="Full name" value={fullName} icon={<UserCircle2 className="h-4 w-4" />} />
                <DetailField label="Phone number" value={phone} icon={<Phone className="h-4 w-4" />} />
                <DetailField label="Email address" value={email} icon={<Mail className="h-4 w-4" />} />
                <DetailField label="Account status" value="Verified and active" icon={<ShieldCheck className="h-4 w-4" />} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

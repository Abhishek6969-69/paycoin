"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import Sidebaritem from "../../components/sidebaritem";
import { useState } from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative w-screen h-screen  md:bg-white text-black flex flex-col">
      <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
      
      <div className="flex  flex-1">
        {/* Sidebar */}
        <div
          className={`fixed z-20 top-0 left-0 h-full  p-4 transition-transform duration-300 md:static md:translate-x-0 
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex justify-end mb-4 md:hidden">
            <button onClick={() => setSidebarOpen(false)} className="text-white">
              ✕ Close
            </button>
          </div>
          
          <Sidebaritem href="/dashboard" icon={<HomeIcon />} title="Home" />
          <Sidebaritem href="/transactions" icon={<TransactionsIcon />} title="Transaction" />
          <Sidebaritem href="/transfer" icon={<TransferIcon />} title="Transfer" />
          <Sidebaritem href="/p2ptransfer" icon={<P2PTransfer />} title="P2P Transfer" />
          <Sidebaritem href="/profile" icon={<ProfileIcon />} title="Profile" />
        </div>

        {/* Content Area */}
        <div className="flex-1 p-4 bg-white overflow-y-auto">
          <button
            onClick={() => setSidebarOpen(true)}
            className="mb-4 bg-blue-500 text-white px-4 py-2 rounded md:hidden"
          >
            ☰ Open Sidebar
          </button>
          <div>
          {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12L11.2 3.05c.44-.44 1.16-.44 1.6 0L21.75 12M4.5 9.75v10.125c0 .62.5 1.125 1.125 1.125H9.75v-4.875c0-.62.5-1.125 1.125-1.125h2.25c.62 0 1.125.5 1.125 1.125V21h4.125c.62 0 1.125-.5 1.125-1.125V9.75" />
    </svg>
  );
}

function TransferIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5M16.5 3L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function TransactionsIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function P2PTransfer() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25m11.25 0v11.25" />
    </svg>
  );
}
function ProfileIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
  
  );
}

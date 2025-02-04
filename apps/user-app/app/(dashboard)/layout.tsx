// app/dashboard/layout.tsx
"use client"
import { signIn,signOut,useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";

import Sidebaritem from "../../components/sidebaritem";
export  default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const session=useSession()
    return (
      <div className=" bg-[white] text-black">
        <div>
        <Appbar onSignin={signIn} onSignout={signOut} user={session.data?.user} />
        </div>
        {/* Sidebar */}
       
        <div className=" flex gap-4 ">
        <aside className=" mt-28 p-4">
         <Sidebaritem href={'/dashboard' } icon={<HomeIcon />} title="Home" />
         <Sidebaritem href={'/transactions' } icon={<TransactionsIcon />} title="Transaction" />
         <Sidebaritem href={'/transfer' } icon={<TransferIcon />} title="Transfer" />
         <Sidebaritem href={'/p2ptransfer' } icon={<P2PTransfer />} title="P2P Transfer" />
        </aside>
        <div className=" w-[1px] h-screen bg-slate-400"></div>
        <main>
          {/* Render child pages */}
          {children}
        </main>
        </div>
      </div>
    );
  }
  function HomeIcon(){
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

        </div>
    )
  }

  function TransferIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
}

function TransactionsIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  
}
function P2PTransfer(){
    return(
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

        </div>
    )
}
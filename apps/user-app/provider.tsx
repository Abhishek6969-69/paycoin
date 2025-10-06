"use client"
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return <RecoilRoot>
        <SessionProvider>
            {children}
            <Toaster
                position="top-right"
                toastOptions={{
                    className: 'bg-white border border-gray-200 text-gray-900',
                    duration: 4000,
                }}
            />
        </SessionProvider>
    </RecoilRoot>
}
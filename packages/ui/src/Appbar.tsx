import { useSession } from "next-auth/react";
import { Button } from "./button";
import { Session } from "inspector/promises";
// import { useRouter } from "next/router";
import { useEffect } from "react";
interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    const session=useSession();
    // const router=useRouter();
    
        // if (session.status === "loading") return; 
    //     if (!session.data?.user) {
    //       router.push("/user/signin"); // Redirect to sign-in if not authenticated
    //     }
    //   }, [session]);
    
      // Handle loading state
      if (session.status === "loading") {
        return <div className="bg-white border-b border-gray-200 h-16"></div>;
      }
    
    return <div className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 shadow-md backdrop-blur-lg bg-white/95">
        <div className="flex items-center gap-4">
            <div className="flex items-center">
                <Logo />
            </div>
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
                CoinPay
            </div>
            <div className="hidden md:block ml-4">
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
                    Digital Banking Platform
                </span>
            </div>
        </div>
        <div className="flex items-center gap-6">
            {user?.name && (
                <div className="hidden md:flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">
                            {user.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-900">Welcome back</p>
                        <p className="text-xs text-gray-500">{user.name}</p>
                    </div>
                </div>
            )}
            <Button 
                variant={user ? "outline" : "primary"} 
                size="sm"
                onClick={user ? onSignout : onSignin}
                className="font-semibold shadow-sm hover:shadow-md transition-all duration-200"
            >
                {user ? "Sign Out" : "Sign In"}
            </Button>
        </div>
    </div>
}

function Logo(){
    return(
        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </div>
    )
}
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
        return <div className="bg-gradient-to-br from-[#0A0F1D] via-[#1C1F3A] to-[#2D2163]"></div>;
      }
    
      // If user is not authenticated, don't render the layout (redirect will handle it)
    //   if (!session.data?.user) {
    //     return null;
    //   }
    return <div className="flex justify-between  px-4 py-3 bg-gradient-to-br from-[#0A0F1D] via-[#1C1F3A] to-[#2D2163]">
        <div className="text-lg flex flex-col justify-center">
            <div className=" flex justify-center  gap-2">
            {/* <div>
            <Logo />
            </div> */}
            <div className=" flex justify-center items-center ml-12">
            CoinPay
            </div>
           
            </div>
        </div>
        <div className="flex flex-col justify-center  items-center pt-2 ">
            <Button type="submit" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300" onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
        </div>
    </div>
}

function Logo(){
    return(
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

        </div>
    )
}
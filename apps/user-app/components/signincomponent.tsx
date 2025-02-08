"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Label } from "@repo/ui/label";

export default function SignInPage() {
    const [data,setdata]=useState({
        phone:"",
        password:""
    })
    const router = useRouter();
    const searchParams = useSearchParams();
    const error = searchParams.get("error");
   
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        const result = await signIn("credentials", {
            phone:data.phone,
            password:data.password,
            redirect: false, 
        });
   
        if (result?.error) {
            setErrorMessage(result.error);
        } else {
            router.push("/dashboard"); 
        }
        
        setLoading(false);
    };

    return (
        <div className=" bg-[#02008A] flex items-center justify-center min-h-screen  text-black">
            <div className="md:w-full mb-36 md:mb-2 w-[270px] max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Sign In</h2>
                {error && <p className="text-red-500 text-sm mt-2">{decodeURIComponent(error)}</p>}
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                <form onSubmit={handleSignIn} className="space-y-4">
                   
                    <div className="ml-1 md:ml-5">
                    <Label label="Phone Number" className=" ml-1" />
                    <Input
                       className="w-[200px] md:w-[330px] "
                        placeholder="9696694046"
                       type="phone Number"
                        onChange={(value)=>{setdata({...data,phone:value})}}
                        
                    />
                    </div>
                  
                    <div className=" ml-1 md:ml-5">
                    <Label  label={"Password"} className="ml-1"/>
                    <Input
                    className="w-[200px] md:w-[330px]"
                         type="password"
                         placeholder="123456"
                        
                         onChange={(value)=>{setdata({...data,password:value})}}
                    />
                    </div>
                    <div className=" py-2  ml-1 md:ml-5  ">
                  <Button    type="submit" className="  w-[200px] md:w-[330px] p-4" onClick={(e)=>{
                  handleSignIn(e)  
                  }}>
                    signin
                 </Button>
                 </div>
                </form>

                <div className="mt-4 text-center">
                    <p>
                        Don't have an account?{" "}
                        <a href="/user/signup" className="text-blue-400 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Label } from "@repo/ui/label";

export default function SignUpPage() {
    const [data, setData] = useState({
        name: "",
        phone: "",
        password: ""
    });

    const router = useRouter();
    const searchParams = useSearchParams();
    const error = searchParams.get("error");

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");

        const result = await signIn("credentials", {
            name: data.name,
            phone: data.phone,
            password: data.password,
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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-[#1C1F3A] text-white">
            <div className="w-full max-w-md p-8 bg-gray-800 border border-gray-700 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
                {error && <p className="text-red-400 text-sm mt-2 text-center">{decodeURIComponent(error)}</p>}
                {errorMessage && <p className="text-red-400 text-sm mt-2 text-center">{errorMessage}</p>}

                <form onSubmit={handleSignUp} className="space-y-6 mt-6">
                    <div className="space-y-2">
                        <Label className="text-sm text-gray-300" label="Name" />
                        <Input
                            className="w-full bg-gray-800/50 border-gray-700 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg p-3"
                            placeholder="Your full name"
                            type="text"
                            onChange={(value) => setData({ ...data, name: value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm text-gray-300" label="Phone Number" />
                        <Input
                            className="w-full bg-gray-800/50 border-gray-700 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg p-3"
                            placeholder="Enter your phone number"
                            type="tel"
                            maxlength={10}
                            onChange={(value) => setData({ ...data, phone: value })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-sm text-gray-300" label="Password" />
                        <Input
                            className="w-full bg-gray-800/50 border-gray-700 focus:border-blue-400 focus:ring-blue-400/20 rounded-lg p-3"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(value) => setData({ ...data, password: value })}
                        />
                    </div>
                    <Button 
                        type="submit" 
                        className="w-full py-4 text-lg font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all duration-300" 
                        onClick={(e) => handleSignUp(e)}
                        
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </Button>
                    {/* <Button 
                        type="submit" 
                        className=" py-4 text-sm font-medium bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600 rounded-lg shadow-md hover:shadow-blue-500/20 transition-all duration-300" 
                        onClick={(e)=>{
                            setData({...data,phone:"9696694046",password:"123456"})
                        }}
                        
                    >
                        Test
                    </Button> */}
                </form>

                <div className="text-center text-sm text-gray-400 mt-4">
                    <p>
                        Already have an account? 
                        <a href="/user/signin" className="text-blue-400 hover:underline ml-1">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

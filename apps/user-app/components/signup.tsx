"use client";

import { Children, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Label } from "@repo/ui/label";

export default function SignInPage() {
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

    const handleSignIn = async (e: React.FormEvent) => {
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
        <div className=" flex items-center justify-center min-h-screen bg-[#02008A] text-gray-500">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
                {error && <p className="text-red-500 text-sm mt-2">{decodeURIComponent(error)}</p>}
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="ml-5">
                        <Label label="Name" className="ml-1" />
                        <Input
                            className="w-[350px]"
                            placeholder="Your full name"
                            type="text"
                            onChange={(value) => setData({ ...data, name: value })}
                        />
                    </div>
                    <div className="ml-5">
                        <Label label="Phone Number" className="ml-1" />
                        <Input
                            className="w-[350px]"
                            placeholder="9696694046"
                            type="tel"
                            onChange={(value) => setData({ ...data, phone: value })}
                        />
                    </div>
                    <div className="ml-5">
                        <Label label="Password" className="ml-1" />
                        <Input
                            className="w-[350px]"
                            type="password"
                            placeholder="••••••"
                            onChange={(value) => setData({ ...data, password: value })}
                        />
                    </div>
                    <Button type="submit" onClick={(e)=>{
                    
                        handleSignIn(e)}}  className="w-full text-white  bg-[#02008A]">
                        {loading ? "Signing in..." : "Sign In"}
                    </Button>
                </form>

                <div className="mt-4 text-center">
                    <p>
                        Already have an account?{" "}
                        <a href="/user/signin" className="text-blue-400 hover:underline">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

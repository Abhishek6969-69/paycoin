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
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center">Create your account</h2>
                <p className="text-sm text-gray-600 text-center mt-2">Join <span className="font-semibold text-blue-600">CoinPay</span> and start transacting instantly.</p>
                {error && <p className="text-red-500 text-sm mt-4 text-center">{decodeURIComponent(error)}</p>}
                {errorMessage && <p className="text-red-500 text-sm mt-4 text-center">{errorMessage}</p>}

                <form onSubmit={handleSignUp} className="space-y-5 mt-6">
                    <div>
                        <Label className="text-sm text-gray-700" label="Name" />
                        <Input
                            className="w-full border border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg p-3"
                            placeholder="Your full name"
                            type="text"
                            onChange={(value) => setData({ ...data, name: value })}
                        />
                    </div>
                    <div>
                        <Label className="text-sm text-gray-700" label="Phone Number" />
                        <Input
                            className="w-full border border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg p-3"
                            placeholder="Enter your phone number"
                            type="tel"
                            maxlength={10}
                            onChange={(value) => setData({ ...data, phone: value })}
                        />
                    </div>
                    <div>
                        <Label className="text-sm text-gray-700" label="Password" />
                        <Input
                            className="w-full border border-gray-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-lg p-3"
                            type="password"
                            placeholder="Enter your password"
                            onChange={(value) => setData({ ...data, password: value })}
                        />
                    </div>
                    <Button 
                        type="submit" 
                        className="w-full py-3 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow"
                        onClick={(e) => handleSignUp(e)}
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </Button>
                </form>

                <div className="text-center text-sm text-gray-600 mt-6">
                    <p>
                        Already have an account? 
                        <a href="/user/signin" className="text-blue-600 hover:underline ml-1">
                            Sign In
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}

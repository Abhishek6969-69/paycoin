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
        <div className="min-h-screen bg-white text-gray-900">
            <div className="container mx-auto px-4 py-16 flex items-center justify-center">
                <div className="w-full max-w-md">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6"/></svg>
                            </div>
                            <h1 className="text-2xl font-bold">CoinPay</h1>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Create an account to get started</p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 text-center">Sign Up</h2>
                        {error && <p className="text-red-500 text-sm mt-3 text-center">{decodeURIComponent(error)}</p>}
                        {errorMessage && <p className="text-red-500 text-sm mt-3 text-center">{errorMessage}</p>}

                        <form onSubmit={handleSignUp} className="space-y-5 mt-6">
                            <div className="space-y-2">
                                <Label className="text-sm text-gray-700" label="Name" />
                                <Input
                                    className="w-full bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 rounded-lg p-3 text-gray-900"
                                    placeholder="Your full name"
                                    type="text"
                                    value={data.name}
                                    onChange={(value) => setData({ ...data, name: value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm text-gray-700" label="Phone Number" />
                                <Input
                                    className="w-full bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 rounded-lg p-3 text-gray-900"
                                    placeholder="Enter your phone number"
                                    type="tel"
                                    maxlength={10}
                                    value={data.phone}
                                    onChange={(value) => setData({ ...data, phone: value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm text-gray-700" label="Password" />
                                <Input
                                    className="w-full bg-gray-50 border border-gray-200 focus:border-blue-600 focus:ring-blue-600/20 rounded-lg p-3 text-gray-900"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={data.password}
                                    onChange={(value) => setData({ ...data, password: value })}
                                />
                            </div>
                            <Button 
                                type="submit" 
                                className="w-full py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-500 hover:to-blue-600 transition-all duration-200" 
                                onClick={(e) => handleSignUp(e)}
                            >
                                {loading ? "Signing up..." : "Sign Up"}
                            </Button>
                            {/* Autofill removed from signup as requested */}
                        </form>

                        <div className="text-center text-sm text-gray-600 mt-5">
                            <p>
                                Already have an account? 
                                <a href="/user/signin" className="text-blue-600 hover:underline ml-1">
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Profilesection from "components/profile";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function Profilepage() {
    const [userdata, setUserdata] = useState<any>(null);
    const [showProfileSection, setShowProfileSection] = useState(false);
    const { data: session } = useSession();

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch("/api/user-details");
                if (!response.ok) throw new Error("Failed to fetch user data");
                const user = await response.json();
                setUserdata(user);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        
        if (session?.user?.id) {
            fetchUserData();
        }
    }, [session]);

    const handleClose = () => setShowProfileSection(false);

    return (
        <div className="max-w-4xl mx-auto p-6">
            {showProfileSection && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Edit Profile</h2>
                            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">✕</button>
                        </div>
                        <Profilesection onClose={handleClose} userData={userdata} />
                    </div>
                </div>
            )}
            
            <Card title="User Profile" className="w-full md:w-[600px] mx-auto mt-8 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-8">
                    <div className="flex justify-center items-center">
                        {userdata?.profileImage ? (
                            <div className="relative group">
                                <Image 
                                    className="rounded-full w-[200px] h-[200px] border-4 border-primary/20 hover:border-primary/60 transition-all duration-300 shadow-lg"
                                    src={userdata.profileImage} 
                                    alt="user" 
                                    width={200} 
                                    height={200}
                                    priority
                                />
                                <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="mt-4 ml-6">
                                    <Button type="button" className="" onClick={() => setShowProfileSection(true)}>Edit Profile</Button>
                                </div>
                            </div>
                        ) : (
                            <div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-4xl text-gray-400">👤</span>
                            </div>
                        )}
                    </div>
                    
                    <div className="space-y-6 px-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm text-gray-500 uppercase tracking-wider">Name</label>
                            <h1 className="text-2xl font-semibold text-gray-800">
                                {userdata?.name || "User"}
                            </h1>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm text-gray-500 uppercase tracking-wider">Email</label>
                            <h1 className="text-2xl font-semibold text-gray-800">
                                {session?.user?.email || "N/A"}
                            </h1>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}

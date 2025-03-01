"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import ProfileSection from "components/profile";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";
import userdetailservercomponent from "components/userdetailservercomponent";

export default function ProfilePage() {
    // const [ans,setans]=useState<any>(null)
    const [userData, setUserData] = useState<any>(null);
    const [showProfileSection, setShowProfileSection] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { data: session } = useSession();

    useEffect(() => {
        async function fetchUserData() {
            try {
                setIsLoading(true);
                // const response = await fetch("/api/user");
                const response=await userdetailservercomponent();
                setUserData(response)
                // if (!response.ok) {
                //     throw new Error("Failed to fetch user data");
                // }
                
                // const user = await response.json();
                // setUserData(user);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setIsLoading(false);
            }
        }
        
        fetchUserData();
    }, []);

    const handleClose = () => setShowProfileSection(false);
    const handleProfileUpdate = (imageUrl: string) => {
        setUserData((prevState: Record<string, unknown>) => ({
            ...prevState,
            profileImage: imageUrl
        }));
    };

    if (isLoading) {
        return (
            <div className="max-w-4xl mx-auto p-6 flex justify-center items-center min-h-[60vh]">
                <div className="animate-pulse flex flex-col items-center">
                    <div className="rounded-full bg-gray-200 h-32 w-32 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-64"></div>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            {showProfileSection && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-card rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Edit Profile</h2>
                            <button 
                                onClick={handleClose} 
                                className="text-gray-500 hover:text-gray-700"
                                aria-label="Close"
                            >
                                ✕
                            </button>
                        </div>
                        <ProfileSection 
                            onClose={handleClose} 
                            userData={userData} 
                            onProfileUpdate={handleProfileUpdate}
                        />
                    </div>
                </div>
            )}
            
            <Card title="User Profile" className="w-full md:w-[600px] mx-auto mt-8 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-8">
                    <div className="flex flex-col items-center">
                        {userData?.profileImage ? (
                            <div className="relative group">
                                <Image 
                                    className="rounded-full w-[200px] h-[200px] border-4 border-primary/20 hover:border-primary/60 transition-all duration-300 shadow-lg"
                                    src={userData.profileImage} 
                                    alt="User profile" 
                                    width={200} 
                                    height={200}
                                    priority
                                />
                                <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ) : (
                            <div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-4xl text-gray-400">👤</span>
                            </div>
                        )}
                        
                        <div className="mt-6">
                            <Button 
                                onClick={() => setShowProfileSection(true)}
                                className="px-6"
                                type="submit"
                            >
                                Edit Profile
                            </Button>
                        </div>
                    </div>
                    
                    <div className="space-y-6 px-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm text-muted-foreground uppercase tracking-wider">Name</label>
                            <h1 className="text-2xl font-semibold">
                                {userData?.name || "User"}
                            </h1>
                        </div>
                        {/* {JSON.stringify(ans)} */}
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm text-muted-foreground uppercase tracking-wider">Email</label>
                            <h1 className="text-2xl font-semibold">
                                {userData?.email || session?.user?.email || "N/A"}
                            </h1>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
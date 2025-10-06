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
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto space-y-8">
                {/* Enhanced Header Section */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                    <div className="text-center">
                        <div className="w-20 h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl mx-auto mb-6 flex items-center justify-center border border-purple-200">
                            <span className="text-3xl">👤</span>
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-3">User Profile</h1>
                        <p className="text-lg text-gray-600">Manage your account information and preferences</p>
                    </div>
                </div>

                {/* Edit Profile Modal */}
                {showProfileSection && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Edit Profile</h2>
                                <button 
                                    onClick={handleClose} 
                                    className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all"
                                    aria-label="Close"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
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
                
                {/* Main Profile Card */}
                <Card title="" className="w-full max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
                    <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8">
                        <h2 className="text-2xl font-bold text-white">Profile Information</h2>
                        <p className="text-purple-100 mt-2">Your personal account details</p>
                    </div>
                    
                    <div className="p-8 space-y-8">
                        {/* Profile Image Section */}
                        <div className="flex flex-col items-center">
                            {userData?.profileImage ? (
                                <div className="relative group">
                                    <Image 
                                        className="rounded-full w-48 h-48 border-4 border-purple-200 shadow-2xl hover:shadow-3xl transition-all duration-300 object-cover"
                                        src={userData.profileImage} 
                                        alt="User profile" 
                                        width={192} 
                                        height={192}
                                        priority
                                    />
                                    <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="text-white font-semibold">Click to edit</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center border-4 border-gray-300 shadow-lg">
                                    <span className="text-6xl text-gray-400">👤</span>
                                </div>
                            )}
                            
                            <div className="mt-8">
                                <Button 
                                    onClick={() => setShowProfileSection(true)}
                                    className="px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                    type="submit"
                                >
                                    Edit Profile
                                </Button>
                            </div>
                        </div>
                        
                        {/* Profile Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-gray-200">
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Full Name</label>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {userData?.name || "User"}
                                </h3>
                            </div>
                            
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Email Address</label>
                                <h3 className="text-2xl font-bold text-gray-900 break-all">
                                    {userData?.email || session?.user?.email || "N/A"}
                                </h3>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Phone Number</label>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {userData?.number || "Not provided"}
                                </h3>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                                <label className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 block">Account Status</label>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <h3 className="text-2xl font-bold text-green-600">Active</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
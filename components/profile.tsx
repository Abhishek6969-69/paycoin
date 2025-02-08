import { useSession } from "next-auth/react";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import Image from "next/image";

export interface ProfileSectionProps {
    onClose: () => void;
    userData?: any;
}

export default function Profilesection({ onClose, userData }: ProfileSectionProps) {
    const { data: session } = useSession();
    const [name, setName] = useState(userData?.name || '');
    const [image, setImage] = useState(userData?.profileImage || '');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        
        try {
            const response = await fetch('/api/user/update', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    profileImage: image,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            // Refresh the page or update the UI
            window.location.reload();
            onClose();
        } catch (error) {
            console.error('Error updating profile:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex justify-center mb-6">
                {image ? (
                    <Image 
                        src={image}
                        alt="Profile Preview"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-primary/20"
                        priority
                    />
                ) : (
                    <div className="w-[120px] h-[120px] rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-3xl text-gray-400">👤</span>
                    </div>
                )}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Profile Image URL
                </label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
            </div>

            <div className="flex justify-end space-x-2">
                <Button
                    type="button"
                    onClick={onClose}
                    className="bg-gray-200 hover:bg-gray-300"
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    className="bg-primary text-white hover:bg-primary/90"
                >
                    Save Changes
                </Button>
            </div>
        </form>
    );
} 
"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Profilepage;
// import Profilesection from "@/components/profile";
const profile_1 = __importDefault(require("components/profile"));
const userdetailservercomponent_1 = __importDefault(require("components/userdetailservercomponent"));
const card_1 = require("@repo/ui/card");
const button_1 = require("@repo/ui/button");
const image_1 = __importDefault(require("next/image"));
const react_1 = require("react");
const react_2 = require("next-auth/react");
// import Profilesection from "components/profile";
function Profilepage() {
    const [userdata, setuserdata] = (0, react_1.useState)(null);
    const [showProfileSection, setShowProfileSection] = (0, react_1.useState)(false);
    const { data: session } = (0, react_2.useSession)();
    (0, react_1.useEffect)(() => {
        async function fetchUserData() {
            try {
                const user = await (0, userdetailservercomponent_1.default)();
                setuserdata(user);
            }
            catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
        fetchUserData();
    }, []);
    const handleClose = () => {
        setShowProfileSection(false);
    };
    return (<div className="max-w-4xl mx-auto p-6">
            {showProfileSection && (<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Edit Profile</h2>
                            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
                                ✕
                            </button>
                        </div>
                        <profile_1.default onClose={handleClose} userData={userdata}/>
                    </div>
                </div>)}
            <card_1.Card title="User Profile" className="w-full md:w-[600px] mx-auto mt-8 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="space-y-8">
                   
                    <div className="flex justify-center items-center">
                        {userdata?.profileImage ? (<div className="relative group">
                                <image_1.default className="rounded-full w-[200px] h-[200px] border-4 border-primary/20 hover:border-primary/60 transition-all duration-300 shadow-lg" src={userdata.profileImage} alt="user" width={200} height={200}/>
                                <div className="absolute    inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                <div className="mt-4 ml-6">
                                    <button_1.Button type="button" className="" onClick={() => setShowProfileSection(true)}>
                                      Upload Image
                                    </button_1.Button>
                                </div>
                            </div>) : (<div className="w-[200px] h-[200px] rounded-full bg-gray-200 flex items-center justify-center">
                                <span className="text-4xl text-gray-400">👤</span>
                            </div>)}
                    </div>
                    
                    <div className="space-y-6 px-4">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm text-gray-500 uppercase tracking-wider">Name</label>
                            <h1 className="text-2xl font-semibold text-gray-800">
                                {userdata?.name || "User"}
                            </h1>
                        </div>
                        
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm text-gray-500 uppercase tracking-wider">Phone</label>
                            <h1 className="text-2xl font-semibold text-gray-800">
                                {/* {JSON.stringify(session)} */}
                                {session?.user.email || "0000000000"}
                            </h1>
                        </div>
                    </div>
                </div>
            </card_1.Card>
        </div>);
}

"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Profilesection;
const react_1 = require("react");
const image_1 = __importDefault(require("next/image"));
const react_2 = require("next-auth/react");
// import { useSession } from "next-auth/react";
// import { Image } from "next/image";
const userdetailservercomponent_1 = __importDefault(require("./userdetailservercomponent"));
const react_3 = require("react");
function Profilesection({ userData, onClose }) {
    const { data: session } = (0, react_2.useSession)();
    const [file, setFile] = (0, react_1.useState)(null);
    const handleImageChange = (e) => {
        const selectedFile = e.target.files?.[0];
        setFile(selectedFile);
    };
    const [userdata, setuserdata] = (0, react_1.useState)(null);
    (0, react_3.useEffect)(() => {
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
    const handleUpload = async () => {
        if (!file)
            return alert("Please select an image to upload!");
        const formData = new FormData();
        formData.append("image", file);
        formData.append("userId", String(session?.user?.id || ""));
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/upload`, {
            method: "POST",
            body: formData,
        });
        const result = await response.json();
        if (response.ok) {
            console.log("Image uploaded:", result.imageUrl);
            alert("Image uploaded successfully!");
        }
        else {
            console.error("Upload failed:", result.error);
        }
    };
    return (<div className="max-w-sm w-[400px] bg-white border border-gray-200 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">User Details</h2>
      <div className="space-y-4">
        <div className="flex flex-col items-center">
         {userdata?.profileImage ? (<image_1.default className=" w-[100px] h-[100px] rounded-full object-cover" src={userdata?.profileImage || ""} width={144} height={144} alt="User Photo"/>) : (<div className="w-[100px] h-[100px] rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-400">👤</span>
        </div>)} 
          <label className="mt-2 text-blue-600 cursor-pointer hover:underline">
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange}/>
            Choose Photo
          </label>
        </div>
        <button onClick={handleUpload} className="mt-4 ml-24 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload Photo
        </button>
      </div>
    </div>);
}

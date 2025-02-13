"use client";
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = UserDetailCard;
const react_1 = __importStar(require("react"));
const image_1 = __importDefault(require("next/image"));
function UserDetailCard({ session1 }) {
    const [file, setFile] = (0, react_1.useState)(null);
    const [preview, setPreview] = (0, react_1.useState)(session1?.user?.image || null);
    const handleImageChange = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setPreview(URL.createObjectURL(selectedFile));
        }
    };
    const handleUpload = async () => {
        if (!file)
            return alert("Please select an image!");
        const formData = new FormData();
        formData.append("image", file);
        formData.append("userId", session1?.user?.id);
        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });
            if (response.ok) {
                const { imageUrl } = await response.json();
                alert("Image uploaded successfully!");
                setPreview(imageUrl); // Update UI with new image
            }
            else {
                alert("Image upload failed.");
            }
        }
        catch (error) {
            console.error("Upload error:", error);
        }
    };
    return (<div className="max-w-sm w-[400px] bg-white border rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">User Details</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="relative h-36 w-36">
          <image_1.default src={preview || "/default-avatar.png"} alt="User Photo" width={144} height={144} className="rounded-full object-cover"/>
        </div>
        <label className="mt-2 text-blue-600 cursor-pointer">
          <input type="file" accept="image/*" className="hidden" onChange={handleImageChange}/>
          Choose Photo
        </label>
        <button onClick={handleUpload} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Upload Photo
        </button>
      </div>
    </div>);
}

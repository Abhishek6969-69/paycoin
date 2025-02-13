"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SignInPage;
const react_1 = require("react");
const react_2 = require("next-auth/react");
const navigation_1 = require("next/navigation");
const input_1 = __importDefault(require("@repo/ui/input"));
const button_1 = require("@repo/ui/button");
const label_1 = require("@repo/ui/label");
function SignInPage() {
    const [data, setdata] = (0, react_1.useState)({
        phone: "",
        password: ""
    });
    const router = (0, navigation_1.useRouter)();
    const searchParams = (0, navigation_1.useSearchParams)();
    const error = searchParams.get("error");
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        const result = await (0, react_2.signIn)("credentials", {
            phone: data.phone,
            password: data.password,
            redirect: false,
        });
        if (result?.error) {
            setErrorMessage(result.error);
        }
        else {
            router.push("/dashboard");
        }
        setLoading(false);
    };
    return (<div className=" bg-[#02008A] flex items-center justify-center min-h-screen  text-black">
            <div className="md:w-full mb-36 md:mb-2 w-[270px] max-w-md p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-center">Sign In</h2>
                {error && <p className="text-red-500 text-sm mt-2">{decodeURIComponent(error)}</p>}
                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                <form onSubmit={handleSignIn} className="space-y-4">
                   
                    <div className="ml-1 md:ml-5">
                    <label_1.Label label="Phone Number" className=" ml-1"/>
                    <input_1.default className="w-[200px] md:w-[330px] " placeholder="9696694046" type="phone Number" onChange={(value) => { setdata({ ...data, phone: value }); }}/>
                    </div>
                  
                    <div className=" ml-1 md:ml-5">
                    <label_1.Label label={"Password"} className="ml-1"/>
                    <input_1.default className="w-[200px] md:w-[330px]" type="password" placeholder="123456" onChange={(value) => { setdata({ ...data, password: value }); }}/>
                    </div>
                    <div className=" py-2  ml-1 md:ml-5  ">
                  <button_1.Button type="submit" className="  w-[200px] md:w-[330px] p-4" onClick={(e) => {
            handleSignIn(e);
        }}>
                    signin
                 </button_1.Button>
                 </div>
                </form>

                <div className="mt-4 text-center">
                    <p>
                        Don't have an account?{" "}
                        <a href="/user/signup" className="text-blue-400 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </div>
            </div>
        </div>);
}

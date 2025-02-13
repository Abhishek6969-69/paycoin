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
// import { redirect } from "next/navigation";
const card_1 = require("@repo/ui/card");
const react_1 = require("next-auth/react");
const navigation_1 = require("next/navigation");
const react_2 = __importStar(require("react"));
const axios_1 = __importDefault(require("axios"));
const Webhookcall_1 = require("../../../../components/Webhookcall");
const FakeBankPayment = () => {
    const [transactions, setTransactions] = (0, react_2.useState)(null);
    const [token, setToken] = (0, react_2.useState)(null);
    const router = (0, navigation_1.useRouter)();
    const session = (0, react_1.useSession)();
    (0, react_2.useEffect)(() => {
        const fetchTransaction = async () => {
            try {
                const response = await axios_1.default.get("http://localhost:3004/transactions");
                setTransactions(response.data);
            }
            catch (error) {
                console.error("Error fetching transaction:", error);
            }
        };
        fetchTransaction();
        // Extract token from URL
        const urlParams = new URLSearchParams(window.location.search);
        setToken(urlParams.get("token"));
    }, []);
    if (!transactions || !token || !transactions[token]) {
        return <h1>Invalid transaction</h1>;
    }
    const { amount, user_identifier } = transactions[token];
    return (<div className="flex justify-center items-center w-[1000px] h-screen  mr-64">
    <card_1.Card title="Fake Bank Payment" className=" text-black">
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "50px" }}>
      <h1 className="  text-2xl text-black">Payment Confirmation</h1>
      <p className=" text-[#28A745] mt-4 text-xl">
        Processing payment of Rs {amount} to  user {session.data?.user?.name} wallet
        
      </p>
      <button className=" text-blue-500 bg-gray-100 border border-blue-500 hover:bg-gray-200 mt-8 px-4 py-2  rounded-lg" onClick={async () => {
            await (0, Webhookcall_1.Webhookcall)({ token, amount, user_identifier });
            setTimeout(() => {
                router.push("http://localhost:3001/transactions");
            }, 3000);
        }}>
        Confirm Payment
      </button>
    </div>
    </card_1.Card>
    </div>);
};
exports.default = FakeBankPayment;

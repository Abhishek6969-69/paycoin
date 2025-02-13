"use client";
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const p2ptransfer_1 = __importDefault(require("../../../components/p2ptransfer"));
const dynamic_1 = __importDefault(require("next/dynamic"));
require("chart.js/auto");
const card_1 = require("@repo/ui/card");
// import { getSession } from "next-auth/react";
const shimmer_1 = require("components/shimmer");
// import Userdetailcard from "components/profile";
const userdetailservercomponent_1 = __importDefault(require("components/userdetailservercomponent"));
const image_1 = __importDefault(require("next/image"));
const Line = (0, dynamic_1.default)(() => import("react-chartjs-2").then((mod) => mod.Line), {
    ssr: false,
});
const LineChart = () => {
    const [transfers, setTransfers] = (0, react_1.useState)([]);
    const [labels, setLabels] = (0, react_1.useState)([]);
    const [data1, setData] = (0, react_1.useState)([]);
    const [loading, setloading] = (0, react_1.useState)(true);
    const [session1] = (0, react_1.useState)();
    const [user, setuser] = (0, react_1.useState)();
    const [sum, setsum] = (0, react_1.useState)(0);
    // Fetch transfer data
    (0, react_1.useEffect)(() => {
        async function fetchTransfers() {
            try {
                const transferData1 = await (0, p2ptransfer_1.default)(); // Await the function
                const { transfer } = transferData1;
                const valsess = await (0, userdetailservercomponent_1.default)();
                setuser(valsess);
                const transferData = transfer;
                console.log(transfer, "p2p");
                setloading(false);
                // Ensure transferData is an array
                if (!Array.isArray(transferData)) {
                    console.error("Invalid data received ❌", transferData);
                    return;
                }
                setTransfers((prev) => JSON.stringify(prev) === JSON.stringify(transferData) ? prev : transferData);
            }
            catch (error) {
                console.error("Error fetching transfers ❌", error);
                setloading(false);
            }
            finally {
                setloading(false);
            }
        }
        fetchTransfers();
    }, []);
    // Process data when `transfers` change
    (0, react_1.useEffect)(() => {
        if (transfers.length === 0)
            return;
        setLabels((prev) => {
            const newLabels = transfers.map((t) => new Date(t.timestamp).toLocaleString());
            return JSON.stringify(prev) === JSON.stringify(newLabels) ? prev : newLabels;
        });
        setData((prev) => {
            const newData = transfers.map((t) => t.amount / 100);
            setsum(newData.reduce((a, b) => a + b, 0));
            return JSON.stringify(prev) === JSON.stringify(newData) ? prev : newData;
        });
    }, [transfers]); // ✅ Only runs when `transfers` change
    // Chart.js data configuration
    const data = {
        labels,
        datasets: [
            {
                label: "Transaction Data",
                data: data1,
                fill: false,
                borderColor: "#FCA311",
                backgroundColor: "rgba(252, 163, 17, 0.2)", // Light fill effect
                pointBackgroundColor: "#E63946", // Point highlight
                pointBorderColor: "#FFF",
                tension: 0.3,
            },
        ],
    };
    if (loading) {
        return <shimmer_1.Shimmer />;
    }
    return (<div>
    <div className="p-3 md:p-5 flex flex-col md:flex-row gap-4">
      <card_1.Card title="Payment Statistics" className="text-[#333333] bg-[FBFBFB] w-full md:w-[500px]">
        <h1 className="text-xl mb-6 ml-4 md:ml-12 mt-2">General Payment</h1>
        <h1 className="text-xl mb-6 ml-4 md:ml-12 mt-5">₹{sum}.000 Money sent from {session1?.user.name || "User"} Account</h1>
        <div className="text-white w-full md:w-[400px]">
          <Line data={data}/>
        </div>
      </card_1.Card>

      <card_1.Card title="User Detail" className="w-full md:w-[450px]">
        <div>
          <div className="flex justify-center items-center">
            {user?.profileImage && (<image_1.default className="rounded-full w-[80px] md:w-[100px] h-[80px] md:h-[100px] object-cover" src={user.profileImage} alt="user" height={150} width={150}/>)}
          </div>
          <div className="mt-6">
            <div className="text-lg md:text-2xl flex flex-col md:flex-row justify-between">
              <h1><span className="font-bold">Name:</span> {user?.name || "User"}</h1>
            </div>
            <div className="mt-3 text-lg md:text-2xl flex flex-col md:flex-row justify-between">
              <h1><span className="font-bold">Phone:</span> {user?.number || "0000000000"}</h1>
            </div>
          </div>
        </div>
      </card_1.Card>
    </div>
    <div>
    
    </div>
    </div>);
};
exports.default = LineChart;

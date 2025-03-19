"use client";
import { useState, useEffect } from "react";
import p2ptransferserver from "../../../components/p2ptransfer";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
// import Router from "next/router";
import { useRouter } from "next/navigation";
import userdetailservercomponent from "components/userdetailservercomponent";
import Image from "next/image";

interface UserSession {
  user: {
    name: string | null;
    email: string;
    id: string;
    token: string;
    image: string;
  };
}

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = () => {
  const [transfers, setTransfers] = useState<
    { id: number; amount: number; timestamp: Date | string; fromUserId: number; toUserId: number }[]
  >([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [data1, setData] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [session1] = useState<UserSession>();
  const [user, setUser] = useState<any>();
  const [sum, setSum] = useState<number>(0);
const router=useRouter()
  useEffect(() => {
    async function fetchTransfers() {
      try {
        const transferData1 = await p2ptransferserver();
        const { transfer } = transferData1;
        const userData = await userdetailservercomponent();
        setUser(userData);

        if (!Array.isArray(transfer)) {
          console.error("Invalid data received ❌", transfer);
          return;
        }

        setTransfers((prev) => (JSON.stringify(prev) === JSON.stringify(transfer) ? prev : transfer));
      } catch (error) {
        console.error("Error fetching transfers ❌", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransfers();
  }, []);

  useEffect(() => {
    if (transfers.length === 0) return;

    setLabels((prev) => {
      const newLabels = transfers.map((t) => new Date(t.timestamp).toLocaleString());
      return JSON.stringify(prev) === JSON.stringify(newLabels) ? prev : newLabels;
    });

    setData((prev) => {
      const newData = transfers.map((t) => t.amount / 100);
      setSum(newData.reduce((a, b) => a + b, 0));
      return JSON.stringify(prev) === JSON.stringify(newData) ? prev : newData;
    });
  }, [transfers]);

  const data = {
    labels,
    datasets: [
      {
        label: "Transaction Data",
        data: data1,
        fill: false,
        borderColor: "#00D4FF",
        backgroundColor: "rgba(0, 212, 255, 0.2)",
        pointBackgroundColor: "#FF0080",
        pointBorderColor: "#FFF",
        tension: 0.3,
      },
    ],
  };

  

  return (
    <div className="p-6 flex flex-col gap-6 text-white bg-gradient-to-br from-[#0A0F1D] via-[#1C1F3A] to-[#2D2163] min-h-screen">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1000px] mx-auto">
  {/* Payment Statistics */}
  <Card title="Payment Statistics" className="bg-[#121829] border border-[#384260] shadow-lg p-6 h-full flex flex-col justify-between">
    <h1 className="text-2xl font-bold text-white">General Payment</h1>
    <p className="text-lg text-gray-300 mt-3">
      ₹{sum}.000 Money sent from {session1?.user.name || "User"} Account
    </p>
    <div className="w-full mt-5 flex-1">
      <Line data={data} />
    </div>
  </Card>

  {/* User Details */}
  <Card 
  title="User Details" 
  className="relative bg-[#121829] border border-[#384260] shadow-xl p-6 h-full flex flex-col items-center text-center rounded-2xl overflow-hidden transition-transform hover:scale-105 hover:shadow-2xl"
>
  {/* Subtle Gradient Glow Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl opacity-20 pointer-events-none"></div>


  {/* Profile Image Wrapper */}
  {user?.profileImage && (
    <div className="relative ml-4 mt-4 w-[120px] h-[120px] rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-[4px]">
      <Image
        className="rounded-full w-full h-full object-cover border-4 border-[#1C1F3A] shadow-lg"
        src={user.profileImage}
        alt="User"
        height={120}
        width={120}
      />
    </div>
  )}

  {/* User Name */}
  <h1 className="text-xl font-bold text-white mt-5 tracking-wide">{user?.name || "Abhishek Yadav"}</h1>

  {/* Phone Number */}
  <p className="text-gray-400 mt-2 px-4 py-2 bg-[#1C1F3A] rounded-lg shadow-md">
    📞 {user?.number || "0000000000"}
  </p>

  {/* View Profile Button */}
  <Button type="submit" className="mt-4 px-6 py-3 hover:cursor-pointer text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md transition-transform hover:scale-110"  onClick={() => router.push('/profile')}>
    View Profile
  </Button>
</Card>


</div>

{/* Join Community Card */}
<div className="flex justify-center w-full max-w-[1000px] mx-auto mt-6">
  <Card title="Join Community" className="bg-gradient-to-r from-[#1C1F3A] to-[#2D2163] border border-[#384260] shadow-lg p-6 text-center h-full">
    <h2 className="text-2xl font-bold text-white">🚀 Join Our Community!</h2>
    <p className="text-gray-300 mt-2">
      Stay updated with the latest news, exclusive content, and discussions with other users.
    </p>
    <button className="mt-4 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform">
      Join Now
    </button>
  </Card>
</div>

    </div>
  );
};

export default LineChart;

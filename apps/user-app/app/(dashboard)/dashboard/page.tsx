"use client";
import { useState, useEffect } from "react";
import p2ptransferserver from "../../../components/p2ptransfer";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Card } from "@repo/ui/card";
import { getSession } from "next-auth/react";
import { Shimmer } from "components/shimmer";
import Userdetailcard from "components/userdetailcard";
interface UserSession {
  user: {
    name: string | null;
    email: string;
    id: string;
    token: string;
    image:string
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
  const[loading,setloading]=useState<boolean>(true);
  const [session1,setsession1]=useState<UserSession>()
const[sum,setsum]=useState<number>(0)
  // Fetch transfer data
  useEffect(() => {
    async function fetchTransfers() {
        try {
          
            const transferData1 = await p2ptransferserver(); // Await the function
          const{session,transfer}=transferData1
          setsession1(session)
          const transferData=transfer;
             console.log(transfer,"p2p")
             setloading(false)
            // Ensure transferData is an array
            if (!Array.isArray(transferData)) {
                console.error("Invalid data received ❌", transferData);
                return;
            }

            setTransfers((prev) => 
                JSON.stringify(prev) === JSON.stringify(transferData) ? prev : transferData
            );
        } catch (error) {
            console.error("Error fetching transfers ❌", error);
            setloading(false)
        }
        finally{
          setloading(false)
        }
    }

    fetchTransfers();
}, []);
const session= getSession();
  // Process data when `transfers` change
  useEffect(() => {
    if (transfers.length === 0) return;

    setLabels((prev) => {
      const newLabels = transfers.map((t) => new Date(t.timestamp).toLocaleString());
      return JSON.stringify(prev) === JSON.stringify(newLabels) ? prev : newLabels;
    });

    setData((prev) => {
      const newData = transfers.map((t) => t.amount / 100);
      setsum(newData.reduce((a, b) => a + b, 0))
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
    return <Shimmer />;
  }
  return (
   
    <div  className=" p-5   flex       ">
    
      <Card title="Payment Statstics" className="text-[#333333] bg-[FBFBFB] w-[500px]">
       
      <h1 className=" text-xl mb-6 ml-12 mt-2">General Payment</h1>
      <h1 className=" text-xl mb-6 ml-12 mt-5">₹{sum}.000  Money sent from {session1?.user.name || "User"} Account</h1>
      <div className=" text-white w-[400px]    ">
      <Line data={data} />
     
     
      
      </div>
      </Card>
      <div>
        <Userdetailcard  session1={session1}/>
        </div>
    
    </div>
   
    

  );
};

export default LineChart;

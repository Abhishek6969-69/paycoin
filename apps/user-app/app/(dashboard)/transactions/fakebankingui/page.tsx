"use client";
// import { redirect } from "next/navigation";
import { Card } from "@repo/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Webhookcall } from "../../../../components/Webhookcall";
const FakeBankPayment = () => {
  const [transactions, setTransactions] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter()
  const session=useSession()
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        
        const response = await axios.get(`${process.env.BANKSERVER_URL || ""}/transactions`);
        
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transaction:", error);
      }
    };

    fetchTransaction();

    // Extract token from URL
    const urlParams = new URLSearchParams(window.location.search);
    setToken(urlParams.get("token"));
  }, []);

  if (!transactions || !token || !transactions[token]) {
    
    return <h1>{JSON.stringify(process.env.BANKSERVER_URL)}Invalid transaction</h1>;
  }

  const { amount, user_identifier } = transactions[token];

  return (
    <div  className="flex justify-center items-center w-[1000px] h-screen  mr-64">
    <Card title="Fake Bank Payment" className=" text-black" >
    <div    style={{ fontFamily: "Arial, sans-serif", textAlign: "center", padding: "50px" }}>
      <h1 className="  text-2xl text-black">Payment Confirmation</h1>
      <p className=" text-[#28A745] mt-4 text-xl">
        Processing payment of Rs {amount } to  user {session.data?.user?.name } wallet
        
      </p>
      <button className=" text-blue-500 bg-gray-100 border border-blue-500 hover:bg-gray-200 mt-8 px-4 py-2  rounded-lg" onClick={async() =>{

      

await Webhookcall({token,amount,user_identifier})
setTimeout(() => {
    router.push(`${process.env.NEXTAUTH_URL}/transactions`);
},3000);



     
    }}>
        Confirm Payment
      </button>
    </div>
    </Card>
    </div>
  );
};

export default FakeBankPayment;

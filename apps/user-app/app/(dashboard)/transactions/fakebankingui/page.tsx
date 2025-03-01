"use client";

import { Card } from "@repo/ui/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Webhookcall } from "../../../../components/Webhookcall";
import { Button } from "@repo/ui/button";
import { toast } from "sonner";
const FakeBankPayment = () => {
  const [transactions, setTransactions] = useState<any>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();
  const session = useSession();
 
  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BANKSERVER_URL || ""}/transactions`
        );
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transaction:", error);
      }
    };

    fetchTransaction();
    const urlParams = new URLSearchParams(window.location.search);
    setToken(urlParams.get("token"));
  }, []);

  if (!transactions || !token || !transactions[token]) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-300">
        <h1 className="text-xl font-semibold bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
          Invalid transaction
        </h1>
      </div>
    );
  }

  const { amount, user_identifier } = transactions[token];
  const handaleclick=async()=>{
    const loadingToast = toast.loading("Processing your request...");
    try{
      const success= await Webhookcall({ token, amount, user_identifier });
      toast.dismiss(loadingToast)
      if(success){
        toast.dismiss(loadingToast);
        toast.success(`succesfuly sent ${amount} to  ${session.data?.user?.name}`)
      }
      else{
        toast.error("Transfer failed. Please try again.");
      }
      router.push(`${process.env.NEXTAUTH_URL}/transactions`)
    }
    catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please try again.");
      console.error("Transfer failed:", error);
    }

  }
  return (
    <div className="flex justify-center items-center min-h-screen px-4 md:px-0">
      <Card  title="" className="w-full md:w-[500px] shadow-xl bg-gradient-to-br from-gray-900 to-[#1C1F3A] border border-gray-700 p-6">
        <h1 className="text-xl font-bold text-gray-100 text-center">Payment Confirmation</h1>
        <p className="text-green-400 mt-4 text-center text-lg">
          Processing payment of ₹{amount} to {session.data?.user?.name}’s wallet
        </p>
        <Button
        type="submit"
          className="w-full py-3 mt-6 text-lg font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
          onClick={handaleclick}
        >
          Confirm Payment
        </Button>
      </Card>
    </div>
  );
};

export default FakeBankPayment;

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
      <div className="min-h-screen bg-gray-50 p-8">
        {/* Professional Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">CoinPay Bank</h1>
                <p className="text-sm text-red-500">Transaction Error</p>
              </div>
            </div>
          </div>
        </header>

        {/* Error Content */}
        <div className="pt-24 flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-lg border border-red-200 overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="text-2xl font-bold text-red-700 mb-3">Invalid Transaction</h1>
                <p className="text-gray-600 mb-6">
                  {!token ? "No transaction token found" : 
                   !transactions ? "Unable to load transaction data" : 
                   "Transaction not found in our records"}
                </p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                  <p className="text-red-800 text-sm">
                    This transaction may have expired or the link is invalid.
                  </p>
                </div>
                <button 
                  onClick={() => window.close()}
                  className="w-full py-3 px-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { amount, user_identifier } = transactions[token];
  const handaleclick = async () => {
    const loadingToast = toast.loading("Processing your secure payment...");
    
    try {
      const success = await Webhookcall({ token, amount, user_identifier });
      
      toast.dismiss(loadingToast);
      
      if (success) {
        toast.success(`Payment of ₹${amount} successfully processed!`, {
          description: `Funds added to ${session.data?.user?.name}'s wallet`,
          duration: 5000,
        });
        
        // Wait a moment before redirecting to let user see the success message
        setTimeout(() => {
          router.push(`${process.env.NEXTAUTH_URL || "http://localhost:3000"}/transactions`);
        }, 2000);
      } else {
        toast.error("Payment processing failed", {
          description: "Please try again or contact support if the issue persists.",
          duration: 6000,
        });
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Payment processing error", {
        description: "A technical error occurred. Please try again.",
        duration: 6000,
      });
      console.error("Payment confirmation failed:", error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Professional Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 tracking-tight">CoinPay Bank</h1>
                <p className="text-sm text-gray-500">Payment Processing</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-lg">
          <Card title="" className="bg-white border border-gray-200 shadow-2xl rounded-2xl overflow-hidden">
            <div className="p-10">
              {/* Header Section */}
              <div className="text-center mb-10">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-blue-200 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">Payment Confirmation</h1>
                <p className="text-gray-600">Please review and confirm your secure transaction</p>
              </div>
            
              {/* Transaction Details */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mb-10">
                <div className="text-center space-y-3">
                  <p className="text-blue-700 font-semibold">Transaction Amount</p>
                  <p className="text-4xl font-bold text-blue-900">₹{amount}</p>
                  <div className="flex items-center justify-center gap-3 text-blue-600">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    <span className="font-medium">{session.data?.user?.name}'s CoinPay Wallet</span>
                  </div>
                </div>
              </div>
              
              {/* Action Button */}
              <div className="space-y-6">
                <Button
                  variant="primary"
                  onClick={handaleclick}
                  className="w-full py-5 text-xl font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Confirm Secure Payment
                </Button>
                
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center justify-center gap-2 text-green-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-sm font-semibold">
                      Secured with bank-grade encryption
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FakeBankPayment;

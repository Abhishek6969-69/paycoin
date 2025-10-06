"use client";
import { useEffect, useState } from "react";
import { Card } from "@repo/ui/card";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import P2PTransfermoney from "../../lib/actions/p2ptransfer";
import { Label } from "@repo/ui/label";
import { toast } from "sonner";
import Option from "@repo/ui/option";
import Option2 from "components/Option2";
import { Findalluser } from "components/findalluser";
interface TransferResponse {
  success: boolean;
  message: string;
}

function P2PTransfer() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [ans,setans]=useState<any>([]);
useEffect(()=>{
 async function helper(){
const value=await Findalluser();
setans(value);
 }
 helper()
},[])
  const handleTransfer = async () => {
    if (!to || to.length !== 10 || !/^\d{10}$/.test(to)) {
      toast.error("Please enter a valid 10-digit phone number!");
      return;
    }
    const parsedAmount = Number(amount);
    if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
      toast.error("Please enter a valid positive amount!");
      return;
    }

    const loadingToast = toast.loading("Processing your request...");
    try {
  const result = await P2PTransfermoney(to, parsedAmount * 100);
      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success(`Successfully sent ₹${amount} to ${to}`);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please try again.");
      console.error("Transfer failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Enhanced Header Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl mx-auto mb-6 flex items-center justify-center border border-blue-200">
              <span className="text-3xl">💸</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">Send Money</h1>
            <p className="text-lg text-gray-600">Transfer money to any CoinPay user instantly and securely</p>
          </div>
        </div>
        
        <Card
          title=""
          className="bg-white border border-gray-200 shadow-lg rounded-2xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
            <h2 className="text-2xl font-bold text-white mb-2">P2P Transfer</h2>
            <p className="text-blue-100">Send money instantly to friends and family</p>
          </div>
          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <Label label="Recipient Phone Number" className="text-base font-semibold text-gray-800" />
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <Option2 onselect={(value:any)=>{setTo(value)}} 
                    options={ans.map((x:any) => ({ key: x.number, value: x.number }))}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all text-base font-medium"
                 />
              </div>
            </div>
            
            <div className="space-y-4">
              <Label label="Transfer Amount" className="text-base font-semibold text-gray-800" />
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">₹</span>
                <Input
                  placeholder="0.00"
                  type="number"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl transition-all text-lg font-semibold"
                  onChange={(value) => setAmount(value)}
                />
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                onClick={handleTransfer}
              >
                Send Money Instantly
              </Button>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-center gap-3 text-blue-800">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-sm">Bank-Grade Security</p>
                  <p className="text-xs text-blue-600">End-to-end encrypted instant transfers</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default P2PTransfer;
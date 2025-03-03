"use client";
import { useState } from "react";
import { Card } from "@repo/ui/card";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import P2PTransfermoney from "../../lib/actions/p2ptransfer";
import { Label } from "@repo/ui/label";
import { toast } from "sonner";

interface TransferResponse {
  success: boolean;
  message: string;
}

function P2PTransfer() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");

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
      console.log(result.success); // Now safe to access
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
    <div className="flex justify-center items-center min-h-[70vh] px-4 md:px-0 mb-36">
      <Card
        title="Send Money"
        className="w-full md:w-[500px] shadow-xl bg-gradient-to-br from-gray-900 to-[#1C1F3A] border border-gray-700"
      >
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <Label label="Recipient Number" className="text-sm font-medium text-gray-300" />
            <Input
              maxlength={10}
              type="tel"
              placeholder="Enter mobile number"
              className="w-full bg-gray-800/50 border-gray-700 focus:border-yellow-400 focus:ring focus:ring-yellow-400/20 rounded-lg transition-all"
              onChange={(value) => setTo(value)}
            />
          </div>
          <div className="space-y-2">
            <Label label="Amount" className="text-sm font-medium text-gray-300" />
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">₹</span>
              <Input
                placeholder="Enter amount"
                type="number"
                className="w-full pl-8 bg-gray-800/50 border-gray-700 focus:border-yellow-400 focus:ring focus:ring-yellow-400/20 rounded-lg transition-all"
                onChange={(value) => setAmount(value)}
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full py-4 text-lg font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 rounded-lg shadow-lg hover:shadow-yellow-500/20 transition-all duration-300"
            onClick={handleTransfer}
          >
            Send Money
          </Button>
          <div className="text-center text-xs text-gray-400 mt-4">
            <p>Secure, instant transfers to any CoinPay user</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default P2PTransfer;
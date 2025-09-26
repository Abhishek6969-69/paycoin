"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card } from "@repo/ui/card";
import Input from "@repo/ui/input";
import { Button } from "@repo/ui/button";
import { Label } from "@repo/ui/label";
import Option from "@repo/ui/option";
import { toast } from "sonner";

interface WithdrawResponse {
  token: string;
  redirectUrl: string;
}

export default function WithdrawMoney() {
  const session = useSession();
  const [balance, setBalance] = useState<number>(0);
  const SUPPORTED_BANKS = [
    { name: "HDFC", redirecturl: "https://netbanking.hdfcbank.com/netbanking/" },
    { name: "KOTAK", redirecturl: "https://netbanking.kotak.com/knb2/" },
    { name: "State Bank of India", redirecturl: "https://netbanking.kotak.com/knb2/" }
  ];

  const [redirecturl, setRedirecturl] = useState(SUPPORTED_BANKS[0]?.redirecturl);
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState<string>("");
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");

  // Fetch user balance
  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('/api/user/balance');
        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance || 0);
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    if (session.data?.user) {
      fetchBalance();
    }
  }, [session.data?.user]);

  const handleClick = async () => {
    if (!amount || !provider) {
      toast.error("Please fill in all fields!");
      return;
    }
    
    const parsedAmount = Number(amount);
    if (!amount || isNaN(parsedAmount) || parsedAmount <= 0) {
      toast.error("Please fill in valid positive value!");
      return;
    }

    // Check if user has sufficient balance
    const amountInPaise = parsedAmount * 100;
    if (amountInPaise > balance) {
      toast.error("Insufficient balance! Please enter a lower amount.");
      return;
    }

    const loadingToast = toast.loading("Processing your request...");
    try {
      const response = await fetch('/api/withdraw/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, provider }),
      });

      if (!response.ok) {
        throw new Error('Failed to create withdraw transaction');
      }

      const result: WithdrawResponse = await response.json();
      
      if (result.redirectUrl) {
        toast.dismiss(loadingToast);
        toast.success("Redirecting to bank server for withdrawal approval...");
        window.location.href = result.redirectUrl;
      }
    } catch (e) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please try again.");
      console.error("Withdraw failed:", e);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-md mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Cash Out</h1>
          <p className="text-gray-600 text-sm mt-1">Transfer money from your wallet to your bank account</p>
        </div>
        
        <Card title="Withdraw to Bank" className="bg-white border border-gray-200 shadow-sm">
          <div className="p-6 space-y-6">
            {/* Balance Display */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-blue-800">Available Balance:</span>
                <span className="text-lg font-bold text-blue-900">₹{Math.max(0, balance / 100).toFixed(2)}</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label label="Amount" className="text-sm font-medium text-gray-700" />
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                <Input 
                  placeholder="Enter amount to withdraw" 
                  type="number" 
                  className="w-full pl-8 bg-white border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500/20 rounded-lg transition-all" 
                  onChange={(value) => setAmount(value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label label="Select Bank" className="text-sm font-medium text-gray-700" />
              <Option
                onselect={(value) => {
                  const selectedBank = SUPPORTED_BANKS.find((x) => x.name === value);
                  setRedirecturl(selectedBank?.redirecturl || "");
                  setProvider(selectedBank?.name || "");
                }}
                options={SUPPORTED_BANKS.map((x) => ({ key: x.name, value: x.name }))}
              />
            </div>

            <Button 
              variant="secondary"
              size="lg"
              className="w-full" 
              onClick={handleClick}
            >
              Withdraw to Bank
            </Button>
            
            <div className="text-center text-xs text-gray-500 mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
              <p>⚠️ Funds will be transferred to your selected bank account</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
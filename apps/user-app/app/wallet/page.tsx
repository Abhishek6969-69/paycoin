"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Card } from "@repo/ui/card";
import { Button } from "@repo/ui/button";

export default function WalletPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    try {
      const statusParam = searchParams?.get("status");
      const tokenParam = searchParams?.get("token");
      
      setStatus(statusParam);
      setToken(tokenParam);

      // Auto redirect to transactions after 3 seconds
      const timer = setTimeout(() => {
        router.push("/transactions");
      }, 3000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.error("Error processing search params:", error);
      // Fallback redirect if there's an error
      router.push("/transactions");
    }
  }, [searchParams, router]);

  const getStatusMessage = () => {
    switch (status) {
      case "success":
        return {
          title: "✅ Transaction Successful!",
          message: "Your transaction has been processed successfully.",
          bgColor: "bg-green-50",
          borderColor: "border-green-200",
          textColor: "text-green-700",
          messageColor: "text-green-600"
        };
      case "failed":
        return {
          title: "❌ Transaction Failed",
          message: "Your transaction could not be processed. Please try again.",
          bgColor: "bg-red-50",
          borderColor: "border-red-200",
          textColor: "text-red-700",
          messageColor: "text-red-600"
        };
      case "declined":
        return {
          title: "⚠️ Transaction Declined",
          message: "You have declined the transaction.",
          bgColor: "bg-yellow-50",
          borderColor: "border-yellow-200",
          textColor: "text-yellow-700",
          messageColor: "text-yellow-600"
        };
      default:
        return {
          title: "🔄 Processing...",
          message: "Please wait while we process your transaction.",
          bgColor: "bg-blue-50",
          borderColor: "border-blue-200",
          textColor: "text-blue-700",
          messageColor: "text-blue-600"
        };
    }
  };

  const statusInfo = getStatusMessage();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card 
        title="Transaction Status" 
        className={`w-full max-w-md shadow-lg ${statusInfo.bgColor} ${statusInfo.borderColor} border bg-white`}
      >
        <div className="p-6 text-center space-y-6">
          <div className={`text-2xl font-bold ${statusInfo.textColor}`}>
            {statusInfo.title}
          </div>
          
          <div className={statusInfo.messageColor}>
            {statusInfo.message}
          </div>

          {token && (
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <div className="text-sm text-gray-600 mb-1">Transaction ID:</div>
              <div className="text-xs font-mono text-gray-700 break-all">{token}</div>
            </div>
          )}

          <div className="space-y-3">
            <Button 
              variant="primary"
              onClick={() => router.push("/transactions")}
              className="w-full"
            >
              View Transactions
            </Button>
            
            <Button 
              variant="secondary"
              onClick={() => router.push("/dashboard")}
              className="w-full"
            >
              Back to Dashboard
            </Button>
          </div>

          <div className="text-sm text-gray-500">
            Redirecting to transactions in 3 seconds...
          </div>
        </div>
      </Card>
    </div>
  );
}
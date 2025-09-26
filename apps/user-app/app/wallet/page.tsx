import { Suspense } from "react";
import WalletClient from "../../components/WalletClient";
import { Card } from "@repo/ui/card";

export default function WalletPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card title="Loading..." className="w-full max-w-md shadow-lg">
          <div className="p-6 text-center space-y-6">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <div className="text-gray-600">Loading transaction status...</div>
          </div>
        </Card>
      </div>
    }>
      <WalletClient />
    </Suspense>
  );
}
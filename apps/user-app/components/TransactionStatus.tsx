'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function TransactionStatus() {
  const searchParams = useSearchParams();
  const [statusMessage, setStatusMessage] = useState<JSX.Element | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    const status = searchParams.get('status');
    const error = searchParams.get('error');
    
    if (status === "success") {
      setStatusMessage(
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="text-green-600 mr-3">✅</div>
            <div>
              <h3 className="text-green-800 font-semibold">Payment Successful!</h3>
              <p className="text-green-700 text-sm">Your transaction has been processed successfully.</p>
            </div>
          </div>
        </div>
      );
    } else if (status === "failed") {
      setStatusMessage(
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="text-red-600 mr-3">❌</div>
            <div>
              <h3 className="text-red-800 font-semibold">Payment Failed</h3>
              <p className="text-red-700 text-sm">
                {error === "webhook_failed" 
                  ? "Unable to process payment. Please try again."
                  : error === "missing_fields"
                  ? "Invalid payment information. Please try again."
                  : "Transaction failed. Please try again."}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (status === "declined") {
      setStatusMessage(
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="text-yellow-600 mr-3">⚠️</div>
            <div>
              <h3 className="text-yellow-800 font-semibold">Payment Declined</h3>
              <p className="text-yellow-700 text-sm">You have declined the payment request.</p>
            </div>
          </div>
        </div>
      );
    }
  }, [searchParams, isClient]);

  if (!isClient) {
    return <div className="h-4"></div>;
  }

  return statusMessage;
}
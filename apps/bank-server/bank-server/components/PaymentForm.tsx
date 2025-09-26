"use client";

import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function PaymentForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const amountStr = searchParams.get("amount") ?? "";
  const user_identifier = searchParams.get("user_identifier") ?? "";
  const transactionType = searchParams.get("type") ?? "deposit";
  const rupees = amountStr ? Number(amountStr) / 100 : undefined;

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (credentials.username === "bankuser" && credentials.password === "bank123") {
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Invalid credentials. Try username: 'bankuser', password: 'bank123'");
      }
      setLoading(false);
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    setError("");
  };

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
                <p className="text-sm text-gray-500">Secure Transaction Portal</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm text-gray-500">Security Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold text-green-600">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 max-w-2xl mx-auto">
        {/* Transaction Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white text-center">
            <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">
                {transactionType === "withdraw" ? "💰" : "🏦"}
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">
              {transactionType === "withdraw" ? "Bank Withdrawal Simulator" : "Bank Payment Simulator"}
            </h1>
            <p className="text-blue-100">
              {transactionType === "withdraw" ? "Authorize withdrawal from your wallet" : "Authorize deposit to your wallet"}
            </p>
          </div>
          
          {/* Transaction Details */}
          <div className="p-8">
            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Transaction Details</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Transaction Token:</span>
                  <span className="text-sm font-mono text-gray-900 max-w-48 truncate bg-gray-100 px-2 py-1 rounded">
                    {token}
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">User ID:</span>
                  <span className="text-sm font-semibold text-gray-900">{user_identifier}</span>
                </div>
                
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="text-sm font-medium text-gray-500">
                    {transactionType === "withdraw" ? "Withdrawal Amount:" : "Payment Amount:"}
                  </span>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${transactionType === "withdraw" ? "text-red-600" : "text-green-600"}`}>
                      {typeof rupees === "number" ? `₹${rupees.toLocaleString()}` : amountStr}
                    </div>
                    {typeof rupees === "number" && (
                      <div className="text-xs text-gray-400 mt-1">
                        ({amountStr} paise)
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {!isAuthenticated ? (
              /* Authentication Form */
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bank Authentication Required</h3>
                  <p className="text-gray-600">Please enter your banking credentials to proceed securely</p>
                </div>

                <form onSubmit={handleAuthentication} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      value={credentials.username}
                      onChange={(e) => handleInputChange('username', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none font-medium"
                      placeholder="Enter your username"
                      required
                      disabled={loading}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      value={credentials.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none font-medium"
                      placeholder="Enter your password"
                      required
                      disabled={loading}
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                      {error}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className={`w-full py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 transform ${
                      loading 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-700 hover:scale-[1.02] shadow-lg hover:shadow-xl'
                    }`}
                    disabled={loading}
                  >
                    {loading ? '🔄 Authenticating...' : '🔓 Authenticate & Continue'}
                  </button>
                </form>

                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <div className="text-blue-800 text-sm">
                    <strong className="block mb-2">Demo Credentials:</strong>
                    <div className="font-mono text-xs space-y-1">
                      <div>Username: <span className="bg-blue-100 px-2 py-1 rounded">bankuser</span></div>
                      <div>Password: <span className="bg-blue-100 px-2 py-1 rounded">bank123</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Payment Action Buttons */
              <div className="space-y-6">
                <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-xl text-center font-medium">
                  ✅ Authentication Successful! You can now proceed with the {transactionType === "withdraw" ? "withdrawal" : "payment"}.
                </div>

                <div className="space-y-4">
                  <form method="post" action="/api/approve">
                    <input type="hidden" name="token" value={token} />
                    <input type="hidden" name="amount" value={amountStr} />
                    <input type="hidden" name="user_identifier" value={user_identifier} />
                    <button 
                      type="submit" 
                      className="w-full py-4 px-6 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                      {transactionType === "withdraw" ? "✅ Approve Withdrawal" : "✅ Approve Payment"}
                    </button>
                  </form>

                  <form method="post" action="/api/decline">
                    <input type="hidden" name="token" value={token} />
                    <button 
                      type="submit" 
                      className="w-full py-4 px-6 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                      {transactionType === "withdraw" ? "❌ Decline Withdrawal" : "❌ Decline Payment"}
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
          
          {/* Footer */}
          <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-500 border-t border-gray-200">
            🔒 This is a simulated banking interface for testing purposes only
          </div>
        </div>
      </div>
    </div>
  );
}
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
    <div className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18" />
              </svg>
            </div>
            <div>
              <h1 className="text-[30px] font-bold leading-none tracking-tight text-slate-900">CoinPay Bank</h1>
              <p className="text-xs font-medium text-slate-500">Secure Transaction Portal</p>
            </div>
          </div>
          <div className="hidden items-center gap-3 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 md:flex">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <div>
              <p className="text-xs text-slate-500">Security Status</p>
              <p className="text-sm font-semibold text-emerald-600">Secure Session</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1200px] px-4 py-6 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
          <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 px-6 py-7 text-white sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-100">Authorization</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                    {transactionType === "withdraw" ? "Confirm Withdrawal" : "Confirm Deposit"}
                  </h2>
                  <p className="mt-2 text-sm text-blue-100">
                    {transactionType === "withdraw" ? "Review and authorize wallet withdrawal." : "Review and authorize wallet deposit."}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/20 px-4 py-3 text-right">
                  <p className="text-xs text-blue-100">{transactionType === "withdraw" ? "Withdrawal Amount" : "Payment Amount"}</p>
                  <p className={`mt-1 text-2xl font-semibold ${transactionType === "withdraw" ? "text-rose-100" : "text-emerald-100"}`}>
                    {typeof rupees === "number" ? `₹${rupees.toLocaleString("en-IN")}` : amountStr}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 px-6 py-6 sm:px-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
                <h3 className="text-base font-semibold text-slate-900">Transaction Details</h3>
                <div className="mt-4 grid gap-3 text-sm">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-slate-500">Transaction Token</span>
                    <span className="max-w-[320px] truncate rounded-lg bg-white px-2 py-1 font-mono text-slate-900 shadow-sm">{token}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-slate-500">User ID</span>
                    <span className="font-semibold text-slate-900">{user_identifier}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-3">
                    <span className="font-medium text-slate-500">Amount in paise</span>
                    <span className="font-semibold text-slate-900">{amountStr}</span>
                  </div>
                </div>
              </div>

              {!isAuthenticated ? (
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900">Bank Authentication Required</h3>
                    <p className="mt-2 text-slate-600">Enter your internet banking credentials to continue.</p>
                  </div>

                  <form onSubmit={handleAuthentication} className="space-y-5">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Username</label>
                      <input
                        type="text"
                        value={credentials.username}
                        onChange={(e) => handleInputChange("username", e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-900 transition outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
                        placeholder="Enter your username"
                        required
                        disabled={loading}
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                      <input
                        type="password"
                        value={credentials.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-900 transition outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/15"
                        placeholder="Enter your password"
                        required
                        disabled={loading}
                      />
                    </div>

                    {error ? (
                      <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                        {error}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      className={`w-full rounded-xl px-6 py-3.5 text-base font-semibold text-white transition ${
                        loading ? "cursor-not-allowed bg-slate-400" : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      disabled={loading}
                    >
                      {loading ? "Authenticating..." : "Authenticate & Continue"}
                    </button>
                  </form>

                  <div className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                    <p className="font-semibold">Demo Credentials</p>
                    <div className="mt-2 flex flex-wrap gap-2 font-mono text-xs">
                      <span className="rounded bg-white px-2 py-1">Username: bankuser</span>
                      <span className="rounded bg-white px-2 py-1">Password: bank123</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
                    Authentication successful. You can now proceed with this request.
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <form method="post" action="/api/approve">
                      <input type="hidden" name="token" value={token} />
                      <input type="hidden" name="amount" value={amountStr} />
                      <input type="hidden" name="user_identifier" value={user_identifier} />
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700"
                      >
                        {transactionType === "withdraw" ? "Approve Withdrawal" : "Approve Payment"}
                      </button>
                    </form>

                    <form method="post" action="/api/decline">
                      <input type="hidden" name="token" value={token} />
                      <button
                        type="submit"
                        className="w-full rounded-xl bg-rose-600 px-6 py-3.5 font-semibold text-white transition hover:bg-rose-700"
                      >
                        {transactionType === "withdraw" ? "Decline Withdrawal" : "Decline Payment"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Session Security</h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2 text-sm text-emerald-700">TLS encrypted connection</div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">Origin verified: CoinPay wallet</div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">Transaction token validated</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">Need Help?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Never share OTPs, UPI PINs, or card details on this simulator. Only use demo credentials for test transactions.
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-4 text-center text-sm text-slate-500 sm:px-6">
        This is a simulated banking interface for testing purposes only.
      </footer>
    </div>
  );
}

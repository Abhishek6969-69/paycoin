"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@repo/ui/button";
import { toast } from "sonner";
import { ArrowDownToLine, Building2, Loader2, ShieldCheck } from "lucide-react";

interface WithdrawResponse {
  token: string;
  redirectUrl: string;
}

const SUPPORTED_BANKS = [
  { name: "HDFC", redirecturl: "https://netbanking.hdfcbank.com/netbanking/" },
  { name: "KOTAK", redirecturl: "https://netbanking.kotak.com/knb2/" },
  { name: "State Bank of India", redirecturl: "https://netbanking.kotak.com/knb2/" }
];

const quickAmounts = [500, 1000, 2000];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(value);
}

export default function WithdrawMoney() {
  const session = useSession();
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState("");
  const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch("/api/user/balance");
        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance || 0);
        }
      } catch (error) {
        console.error("Error fetching balance:", error);
      }
    };

    if (session.data?.user) {
      fetchBalance();
    }
  }, [session.data?.user]);

  const parsedAmount = Number(amount || 0);
  const amountValue = Number.isFinite(parsedAmount) ? parsedAmount : 0;
  const projectedReceive = Math.max(0, amountValue);

  const selectedBank = useMemo(
    () => SUPPORTED_BANKS.find((bank) => bank.name === provider),
    [provider]
  );

  const handleWithdraw = async () => {
    if (!amount || !provider) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!amount || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      toast.error("Please enter a valid positive amount.");
      return;
    }

    if (parsedAmount < 50 || parsedAmount > 25000) {
      toast.error("Amount must be between ₹50 and ₹25,000.");
      return;
    }

    const amountInPaise = parsedAmount * 100;
    if (amountInPaise > balance) {
      toast.error("Insufficient balance. Enter a lower amount.");
      return;
    }

    const loadingToast = toast.loading("Processing withdrawal...");
    setSubmitting(true);

    try {
      const response = await fetch("/api/withdraw/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ amount, provider })
      });

      if (!response.ok) {
        throw new Error("Failed to create withdraw transaction");
      }

      const result: WithdrawResponse = await response.json();

      if (result.redirectUrl) {
        toast.dismiss(loadingToast);
        toast.success("Redirecting to bank server for approval...");
        window.location.href = result.redirectUrl;
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please try again.");
      console.error("Withdraw failed:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Payments</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">Cash Out to Bank</h1>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          Withdraw wallet balance instantly to your linked bank account.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <section className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <ArrowDownToLine className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-950">Withdraw to Bank</h2>
                <p className="text-sm text-slate-500">Choose amount and bank for secure payout.</p>
              </div>
            </div>
          </div>

          <div className="space-y-7 px-6 py-6 sm:px-8">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <label className="text-sm font-medium text-slate-800">Amount</label>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {quickAmounts.map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setAmount(String(value))}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      amountValue === value
                        ? "bg-slate-900 text-white"
                        : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {formatCurrency(value)}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Withdraw amount</div>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xl font-semibold text-slate-500">₹</span>
                  <input
                    value={amount}
                    type="number"
                    placeholder="0.00"
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full border-0 bg-transparent p-0 text-xl font-semibold text-slate-950 placeholder:text-slate-300 focus:outline-none"
                  />
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-500">Minimum ₹50. Maximum ₹25,000. No processing fee.</p>
            </div>

            <div>
              <label className="mb-3 block text-sm font-medium text-slate-800">Select Bank</label>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full border-0 bg-transparent p-0 text-base font-medium text-slate-900 focus:outline-none"
                >
                  {SUPPORTED_BANKS.map((bank) => (
                    <option key={bank.name} value={bank.name}>
                      {bank.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 px-4 py-4">
              <div className="flex items-center justify-between text-sm text-slate-600">
                <span>Withdraw amount</span>
                <span className="font-semibold text-slate-900">{formatCurrency(amountValue)}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                <span>Fee</span>
                <span className="font-semibold text-slate-900">₹0.00</span>
              </div>
              <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-2 text-sm text-slate-600">
                <span>You will receive</span>
                <span className="font-semibold text-slate-950">{formatCurrency(projectedReceive)}</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className={`w-full rounded-2xl ${submitting ? "pointer-events-none opacity-80" : ""}`}
              onClick={handleWithdraw}
            >
              {submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Processing...
                </span>
              ) : (
                "Withdraw to Bank"
              )}
            </Button>
          </div>
        </section>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                <Building2 className="h-5 w-5" />
              </div>
              <p className="text-lg font-semibold text-slate-950">Summary</p>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Bank</div>
                <div className="mt-2 text-sm font-semibold text-slate-900">{selectedBank?.name || "Not selected"}</div>
              </div>

              <div className="rounded-2xl border border-slate-200 px-4 py-3">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">You Receive</div>
                <div className="mt-1.5 text-2xl font-semibold text-slate-950">{formatCurrency(projectedReceive)}</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-slate-950">Secure withdrawal</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Funds are verified and routed to your selected bank account after confirmation.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

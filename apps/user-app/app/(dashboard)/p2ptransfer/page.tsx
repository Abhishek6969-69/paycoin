"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@repo/ui/button";
import P2PTransfermoney from "../../lib/actions/p2ptransfer";
import { toast } from "sonner";
import Option2 from "components/Option2";
import { Findalluser } from "components/findalluser";
import {
  CheckCircle2,
  Loader2,
  ShieldCheck,
  Smartphone,
  UserRound,
  Wallet
} from "lucide-react";

type UserRecord = {
  id: number;
  name?: string | null;
  number: string;
};

const quickAmounts = [100, 500, 1000];

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(value);
}

export default function P2PTransfer() {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [balance, setBalance] = useState<number | null>(null);
  const [balanceLoading, setBalanceLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const value = await Findalluser();
      setUsers(value);
    }

    loadUsers();
  }, []);

  useEffect(() => {
    const getBalance = async () => {
      try {
        setBalanceLoading(true);
        const res = await fetch("/api/user/balance");

        if (res.ok) {
          const data = await res.json();
          setBalance(data.balance || 0);
        }
      } catch (e) {
        console.error("balance fetch error", e);
        setBalance(null);
      } finally {
        setBalanceLoading(false);
      }
    };

    getBalance();
  }, []);

  const selectedUser = useMemo(
    () => users.find((user) => user.number === to),
    [to, users]
  );

  const parsedAmount = Number(amount || 0);
  const amountValue = Number.isFinite(parsedAmount) ? parsedAmount : 0;
  const availableBalance = Math.max(0, (balance || 0) / 100);

  const handleTransfer = async () => {
    if (!to || to.length !== 10 || !/^\d{10}$/.test(to)) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!selectedUser) {
      toast.error("Choose a registered CoinPay user.");
      return;
    }

    if (!amount || Number.isNaN(parsedAmount) || parsedAmount <= 0) {
      toast.error("Please enter a valid positive amount.");
      return;
    }

    setLoading(true);
    setSuccess(false);
    const loadingToast = toast.loading("Processing transfer...");

    try {
      const result = await P2PTransfermoney(to, parsedAmount * 100);
      toast.dismiss(loadingToast);

      if (result.success) {
        setSuccess(true);
        toast.success(`Successfully sent ${formatCurrency(parsedAmount)} to ${selectedUser.name || to}`);
        setAmount("");
        setTo("");
        setTimeout(() => setSuccess(false), 1800);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("An error occurred. Please try again.");
      console.error("Transfer failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-4 lg:px-5">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-600">Payments</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">P2P Transfer</h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Send money instantly to another CoinPay user with a clean and secure workflow.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-950">Send Money</h2>
                  <p className="text-sm text-slate-500">Use a registered mobile number to make an instant transfer.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 px-6 py-6 sm:px-8">
              <div>
                <label className="mb-3 block text-sm font-medium text-slate-800">Recipient</label>
                <div className="relative">
                  <div className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-slate-400">
                    <UserRound className="h-4 w-4" />
                  </div>
                  <Option2
                    value={to}
                    displayValue={to ? (selectedUser?.name ? `${selectedUser.name} - ${to}` : to) : ""}
                    onselect={(value: string) => setTo(value)}
                    options={users.map((user) => ({
                      key: user.number,
                      value: user.number,
                      label: user.name || undefined
                    }))}
                    className="w-full rounded-2xl border border-slate-200 bg-white pl-12 pr-4 shadow-sm transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10"
                  />
                </div>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <label className="block text-sm font-medium text-slate-800">Amount</label>
                  <span className="text-sm text-slate-500">
                    {balanceLoading ? "Loading balance..." : `Available ${formatCurrency(availableBalance)}`}
                  </span>
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
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">Transfer amount</div>
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
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-4">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>You send</span>
                  <span className="font-semibold text-slate-900">{formatCurrency(amountValue)}</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
                  <span>Fee</span>
                  <span className="font-semibold text-slate-900">₹0.00</span>
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-slate-200 pt-2 text-sm text-slate-600">
                  <span>Total</span>
                  <span className="font-semibold text-slate-950">{formatCurrency(amountValue)}</span>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className={`w-full rounded-2xl ${loading ? "pointer-events-none opacity-80" : ""}`}
                onClick={handleTransfer}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Processing...
                  </span>
                ) : success ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Transfer complete
                  </span>
                ) : (
                  "Send Money"
                )}
              </Button>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <Wallet className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-950">Summary</p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Recipient</div>
                  <div className="mt-2 text-sm font-semibold text-slate-900">{selectedUser?.name || "Not selected"}</div>
                  <div className="mt-1 text-sm text-slate-500">{to || "No mobile number entered"}</div>
                </div>

                <div className="rounded-2xl border border-slate-200 px-4 py-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Amount</div>
                  <div className="mt-1.5 text-2xl font-semibold text-slate-950">{formatCurrency(amountValue)}</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-blue-100 bg-blue-50 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-950">Secure transfer</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Transfers are verified against registered users and processed with balance checks.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useMemo, useState } from "react";
import { useSession } from "next-auth/react";
import p2ptransferserver from "components/p2ptransfer";
import { ArrowDownLeft, ArrowUpRight, Filter, ListFilter, Search, TrendingUp } from "lucide-react";

type TransferRecord = {
  id: number;
  amount: number;
  timestamp: Date;
  fromUserId: number;
  toUserId: number;
};

type TypeFilter = "all" | "sent" | "received";
type StatusFilter = "all" | "success" | "failed";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2
  }).format(value);
}

export default function Transfer() {
  const session = useSession();
  const [transfers, setTransfers] = useState<TransferRecord[]>([]);
  const [pageSize, setPageSize] = useState(10);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  useEffect(() => {
    async function fetchTransfers() {
      try {
        const transferData = await p2ptransferserver();
        const { transfer } = transferData;

        if (!Array.isArray(transfer)) {
          console.error("Invalid transfer data format", transfer);
          return;
        }

        const normalizedTransfers = transfer
          .map((item) => ({
            ...item,
            timestamp: new Date(item.timestamp)
          }))
          .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());

        setTransfers(normalizedTransfers);
      } catch (error) {
        console.error("Error fetching transfers", error);
      }
    }

    fetchTransfers();
  }, []);

  const currentUserId = Number(session?.data?.user?.id);

  const { filteredTransfers, totalSent, totalReceived, sentCount, receivedCount } = useMemo(() => {
    const sent = transfers.filter((transfer) => transfer.fromUserId === currentUserId);
    const received = transfers.filter((transfer) => transfer.toUserId === currentUserId);

    const typeFiltered = transfers.filter((transfer) => {
      const isSent = transfer.fromUserId === currentUserId;
      if (typeFilter === "sent") {
        return isSent;
      }
      if (typeFilter === "received") {
        return !isSent;
      }
      return true;
    });

    const statusFiltered = typeFiltered.filter(() => {
      if (statusFilter === "failed") {
        return false;
      }
      return true;
    });

    return {
      filteredTransfers: statusFiltered.slice(0, pageSize),
      totalSent: sent.reduce((sum, transfer) => sum + transfer.amount, 0) / 100,
      totalReceived: received.reduce((sum, transfer) => sum + transfer.amount, 0) / 100,
      sentCount: sent.length,
      receivedCount: received.length
    };
  }, [currentUserId, pageSize, statusFilter, transfers, typeFilter]);

  return (
    <div className="min-h-screen bg-slate-50 px-3 py-5 sm:px-4 lg:px-5">
      <div className="mx-auto w-full max-w-[1320px] space-y-6">
        <section className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 sm:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600">Payments</p>
                <h1 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">Transfer History</h1>
                <p className="mt-2 text-sm text-slate-500 sm:text-base">Track, filter and review all wallet transfers.</p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Total Transfers</p>
              <p className="mt-1 text-2xl font-semibold text-slate-950">{transfers.length}</p>
            </div>
          </div>

          <div className="grid gap-3 px-6 py-5 sm:grid-cols-3 sm:px-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <ArrowUpRight className="h-4 w-4 text-red-500" />
                Sent
              </div>
              <p className="mt-2 text-xl font-semibold text-red-600">{formatCurrency(totalSent)}</p>
              <p className="mt-1 text-xs text-slate-500">{sentCount} transactions</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <ArrowDownLeft className="h-4 w-4 text-emerald-600" />
                Received
              </div>
              <p className="mt-2 text-xl font-semibold text-emerald-600">{formatCurrency(totalReceived)}</p>
              <p className="mt-1 text-xs text-slate-500">{receivedCount} transactions</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <ListFilter className="h-4 w-4 text-blue-600" />
                Visible
              </div>
              <p className="mt-2 text-xl font-semibold text-slate-950">{filteredTransfers.length}</p>
              <p className="mt-1 text-xs text-slate-500">after current filters</p>
            </div>
          </div>
        </section>

        <section className="rounded-[28px] border border-slate-200 bg-white shadow-sm">
          <div className="flex flex-wrap items-center gap-3 border-b border-slate-200 px-6 py-4 sm:px-8">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <Filter className="h-4 w-4 text-slate-500" />
              Filters
            </div>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="all">All types</option>
              <option value="sent">Sent</option>
              <option value="received">Received</option>
            </select>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="all">All status</option>
              <option value="success">Success</option>
              <option value="failed">Failed</option>
            </select>
            <div className="ml-auto text-sm text-slate-500">Showing {filteredTransfers.length} of {transfers.length}</div>
          </div>

          <div className="px-6 py-5 sm:px-8">
            {transfers.length > 0 ? (
              <div className="space-y-3">
                {filteredTransfers.map((transfer) => {
                  const isSent = currentUserId === transfer.fromUserId;
                  return (
                    <div
                      key={transfer.id}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                              isSent ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
                            }`}
                          >
                            {isSent ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownLeft className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{isSent ? "Sent Money" : "Received Money"}</p>
                            <p className="text-xs text-slate-500">
                              {transfer.timestamp.toLocaleString(undefined, {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                              })}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="ml-4 grid shrink-0 grid-cols-[96px_140px] items-center gap-3">
                        <span className="justify-self-end rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Success
                        </span>
                        <div
                          className={`justify-self-end text-right text-base font-semibold tabular-nums ${
                            isSent ? "text-red-600" : "text-emerald-600"
                          }`}
                        >
                          {isSent ? `- ${formatCurrency(transfer.amount / 100)}` : `+ ${formatCurrency(transfer.amount / 100)}`}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-400 shadow-sm">
                  <Search className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-semibold text-slate-900">No transfers yet</p>
                <p className="mt-1 text-sm text-slate-500">Your transfer activity will appear here once you make a transaction.</p>
              </div>
            )}

            {transfers.length > 0 ? (
              <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                <div className="text-xs text-slate-500">
                  Showing {Math.min(pageSize, transfers.length)} of {transfers.length}
                </div>
                {pageSize < transfers.length ? (
                  <button
                    onClick={() => setPageSize((prev) => prev + 10)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
                  >
                    Load more
                  </button>
                ) : (
                  <div className="text-xs text-slate-400">End of results</div>
                )}
              </div>
            ) : null}
          </div>
        </section>
      </div>
    </div>
  );
}

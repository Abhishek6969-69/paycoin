"use client";
import { useState, useEffect, useMemo } from "react";
import p2ptransferserver from "../../../components/p2ptransfer";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
// import Router from "next/router";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { startRouteLoading } from "components/RouteLoader";

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = () => {
  const [transfers, setTransfers] = useState<
    { id: number; amount: number; timestamp: Date | string; fromUserId: number; toUserId: number }[]
  >([]);
  const [user, setUser] = useState<any>();
const router=useRouter()
  useEffect(() => {
    async function fetchTransfers() {
      try {
        const [transferData1, resp] = await Promise.all([
          p2ptransferserver(),
          fetch('/api/user')
        ]);
        const { transfer } = transferData1;

        if (resp.ok) {
          const userData = await resp.json();
          setUser(userData);
        } else {
          console.warn('Unable to fetch user data', resp.status);
        }

        if (!Array.isArray(transfer)) {
          console.error("Invalid data received ❌", transfer);
          return;
        }

        setTransfers(transfer);
      } catch (error) {
        console.error("Error fetching transfers ❌", error);
      }
    }
    fetchTransfers();
  }, []);

  const chartLabels = useMemo(
    () => transfers.map((t) => new Date(t.timestamp).toLocaleString()),
    [transfers]
  );
  const chartData = useMemo(
    () => transfers.map((t) => t.amount / 100),
    [transfers]
  );
  const sum = useMemo(
    () => chartData.reduce((a, b) => a + b, 0),
    [chartData]
  );

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Transaction Data",
        data: chartData,
        fill: false,
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        pointBackgroundColor: "#3B82F6",
        pointBorderColor: "#FFF",
        tension: 0.3,
      },
    ],
  };

  

  return (
    <div className="min-h-screen bg-gray-50 pt-3">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        
  {/* Header Section - Enhanced Professional Design */}
  <div className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 p-6 transition-all sticky top-4`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold text-slate-800 mb-1">Dashboard</h1>
              <p className="text-sm text-slate-500">Welcome back — here's a quick snapshot of your activity.</p>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Last updated</p>
                <p className="text-base font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl flex items-center justify-center border border-slate-100">
                <span className="text-xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chart Section - Full Width */}
        <div className="w-full">
          <Card title="" className="bg-white border border-gray-100 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg font-semibold text-slate-800">Payment Statistics</h2>
                  <p className="text-xs text-slate-500">Recent activity and trends</p>
                </div>
                <div className="flex items-center gap-3">
                  <select className="text-sm border rounded-md px-3 py-1 bg-white">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>This Year</option>
                  </select>
                </div>
              </div>

              {/* KPI Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-blue-600">₹</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Total Balance</div>
                    <div className="text-lg font-semibold text-slate-900">₹{sum.toFixed(2)}</div>
                  </div>
                </div>

                <div className="p-3 bg-green-50 rounded-xl border border-green-100 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-green-600">#</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Transactions</div>
                    <div className="text-lg font-semibold text-slate-900">{transfers.length}</div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-slate-700">⏱</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Avg Txn</div>
                    <div className="text-lg font-semibold text-slate-900">₹{(transfers.length? (sum / transfers.length).toFixed(2) : '0')}</div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="text-slate-700">📈</span>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">MoM Change</div>
                    <div className="text-lg font-semibold text-slate-900">+{Math.round(Math.random()*20)}%</div>
                  </div>
                </div>
              </div>

              {/* Chart (kept large but with gradient fill and tooltip) */}
              <div className="w-full" style={{ height: '340px' }}>
                <Line
                  data={data}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: { mode: 'index', intersect: false },
                    },
                    elements: { line: { tension: 0.4, borderWidth: 3 }, point: { radius: 3 } },
                    scales: {
                      y: { beginAtZero: true, grid: { color: 'rgba(15, 23, 42, 0.06)' } },
                      x: { grid: { display: false } },
                    },
                  }}
                />
              </div>
              
              {/* Quick actions */}
              <div className="mt-4 flex flex-wrap gap-3">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:shadow-md transition">Add Money</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition">Transfer</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition">View Passbook</button>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition">Request Payout</button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Recent Transactions" className="bg-white border border-gray-100 shadow-sm col-span-2">
              <div className="p-4">
                <ul className="divide-y">
                  {transfers.slice(0,5).map((t:any, i:number) => (
                    <li key={t.id || i} className="flex items-center justify-between py-3">
                      <div>
                        <div className="text-sm font-semibold text-slate-800">{t.description || 'Payment'}</div>
                        <div className="text-xs text-slate-500">{new Date(t.createdAt || Date.now()).toLocaleString()}</div>
                      </div>
                      <div className={`text-sm font-semibold ${t.status === 'success' ? 'text-green-600' : t.status === 'failed' ? 'text-red-600' : 'text-slate-700'}`}>
                        {t.status === 'failed' ? 'Failed' : `₹${(Number(t.amount ?? 0) / 100).toFixed(2)}`}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            <Card title="Insights" className="bg-white border border-gray-100 shadow-sm">
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Revenue (30d)</div>
                    <div className="text-lg font-semibold text-slate-900">₹{(sum * 0.7).toFixed(2)}</div>
                  </div>
                  <div className="text-sm text-green-600 font-semibold">+{Math.round(Math.random()*15)}%</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Top category</div>
                  <div className="text-sm font-medium text-slate-800">Payments</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Unresolved issues</div>
                  <div className="text-sm font-medium text-amber-600">{Math.max(0, Math.floor(Math.random()*3))}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Secondary Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* User Profile Card - unified style with Community card */}
          <Card title="" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    {user?.profileImage ? (
                      <div className="w-20 h-20 rounded-full bg-white p-1 ring-2 ring-blue-200 shadow-sm">
                        <Image
                          className="rounded-full w-full h-full object-cover"
                          src={user.profileImage}
                          alt="User Profile"
                          height={80}
                          width={80}
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center ring-1 ring-gray-200 shadow-sm">
                        <span className="text-2xl text-gray-400">👤</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{user?.name || "Abhishek Yadav"}</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{user?.number || "0000000000"}</span>
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-green-50 text-green-700">Verified</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm shadow-sm hover:shadow-md">Edit Profile</button>
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm shadow-sm hover:shadow-md">Update Photo</button>
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm shadow-sm hover:shadow-md">KYC Details</button>
                  <button className="px-3 py-1.5 bg-white border border-slate-200 rounded-md text-sm shadow-sm hover:shadow-md">Security</button>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  variant="primary"
                  onClick={() => {
                    startRouteLoading();
                    router.push('/profile');
                  }}
                  className="w-full"
                >
                  View Full Profile
                </Button>
              </div>
            </div>
          </Card>

          {/* Community & Actions Card - unified style, compact */}
          <Card title="" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full">
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Join Our Community</h3>
                    <p className="text-sm text-slate-500">Stay updated and get support from peers</p>
                  </div>
                  <div className="hidden md:block w-24 h-12">
                    {/* small decorative illustration */}
                    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                      <rect x="8" y="12" width="48" height="32" rx="6" fill="#EFF6FF" />
                      <circle cx="20" cy="28" r="6" fill="#DBEAFE" />
                    </svg>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">📢</div>
                    <div>
                      <div className="text-sm font-medium text-slate-800">Latest Updates</div>
                      <div className="text-xs text-slate-500">New features & releases</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">💬</div>
                    <div>
                      <div className="text-sm font-medium text-slate-800">Community Support</div>
                      <div className="text-xs text-slate-500">Connect with other users</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600">🎯</div>
                    <div>
                      <div className="text-sm font-medium text-slate-800">Exclusive Access</div>
                      <div className="text-xs text-slate-500">Premium content & perks</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md hover:opacity-95">
                  <span>Join Community</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LineChart;

"use client";
import { useState, useEffect } from "react";
import p2ptransferserver from "../../../components/p2ptransfer";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
// import Router from "next/router";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface UserSession {
  user: {
    name: string | null;
    email: string;
    id: string;
    token: string;
    image: string;
  };
}

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});

const LineChart = () => {
  const [transfers, setTransfers] = useState<
    { id: number; amount: number; timestamp: Date | string; fromUserId: number; toUserId: number }[]
  >([]);
  const [labels, setLabels] = useState<string[]>([]);
  const [data1, setData] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [session1] = useState<UserSession>();
  const [user, setUser] = useState<any>();
  const [sum, setSum] = useState<number>(0);
const router=useRouter()
  useEffect(() => {
    async function fetchTransfers() {
      try {
        const transferData1 = await p2ptransferserver();
        const { transfer } = transferData1;

        // Fetch authenticated user via API
        const resp = await fetch('/api/user');
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

        setTransfers((prev) => (JSON.stringify(prev) === JSON.stringify(transfer) ? prev : transfer));
      } catch (error) {
        console.error("Error fetching transfers ❌", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTransfers();
  }, []);

  useEffect(() => {
    if (transfers.length === 0) return;

    setLabels((prev) => {
      const newLabels = transfers.map((t) => new Date(t.timestamp).toLocaleString());
      return JSON.stringify(prev) === JSON.stringify(newLabels) ? prev : newLabels;
    });

    setData((prev) => {
      const newData = transfers.map((t) => t.amount / 100);
      setSum(newData.reduce((a, b) => a + b, 0));
      return JSON.stringify(prev) === JSON.stringify(newData) ? prev : newData;
    });
  }, [transfers]);

  const data = {
    labels,
    datasets: [
      {
        label: "Transaction Data",
        data: data1,
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-8 space-y-8">
        
        {/* Header Section - Enhanced Professional Design */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">Dashboard</h1>
              <p className="text-lg text-gray-600">Welcome back! Here's your comprehensive financial overview.</p>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-gray-500 mb-1">Last updated</p>
                <p className="text-base font-semibold text-gray-900">{new Date().toLocaleDateString()}</p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chart Section - Full Width */}
        <div className="w-full">
          <Card title="" className="bg-white border border-gray-200 shadow-sm">
            <div className="p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Statistics</h2>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100">
                    <p className="text-sm text-blue-600 font-medium">Total Transactions</p>
                    <p className="text-2xl font-bold text-blue-900">₹{sum.toFixed(2)}</p>
                  </div>
                  <div className="bg-green-50 px-4 py-2 rounded-lg border border-green-100">
                    <p className="text-sm text-green-600 font-medium">Transaction Count</p>
                    <p className="text-2xl font-bold text-green-900">{transfers.length}</p>
                  </div>
                </div>
              </div>
              
              {/* Large Chart Container */}
              <div className="w-full" style={{ height: '400px' }}>
                <Line 
                  data={data} 
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top' as const,
                        labels: {
                          usePointStyle: true,
                          padding: 20,
                          font: {
                            size: 14
                          }
                        }
                      },
                      title: {
                        display: true,
                        text: 'Transaction History Over Time',
                        font: {
                          size: 16,
                          weight: 'bold'
                        }
                      }
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        grid: {
                          color: 'rgba(0, 0, 0, 0.1)',
                        },
                        ticks: {
                          font: {
                            size: 12
                          }
                        }
                      },
                      x: {
                        grid: {
                          color: 'rgba(0, 0, 0, 0.1)',
                        },
                        ticks: {
                          font: {
                            size: 12
                          }
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Secondary Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* User Profile Card */}
          <Card title="" className="bg-white border border-gray-200 shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">User Profile</h3>
              
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Profile Image */}
                <div className="relative">
                  {user?.profileImage ? (
                    <div className="w-24 h-24 rounded-full bg-blue-100 p-1 ring-2 ring-blue-200">
                      <Image
                        className="rounded-full w-full h-full object-cover"
                        src={user.profileImage}
                        alt="User Profile"
                        height={96}
                        width={96}
                      />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center ring-2 ring-gray-200">
                      <span className="text-3xl text-gray-400">👤</span>
                    </div>
                  )}
                </div>

                {/* User Details */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {user?.name || "Abhishek Yadav"}
                  </h4>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">{user?.number || "0000000000"}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="primary" 
                  onClick={() => router.push('/profile')}
                  className="w-full mt-4"
                >
                  View Full Profile
                </Button>
              </div>
            </div>
          </Card>

          {/* Community & Actions Card */}
          <Card title="" className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 shadow-sm">
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Join Our Community</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">📢</span>
                  </div>
                  <div>
                    <p className="text-blue-800 font-medium text-sm">Latest Updates</p>
                    <p className="text-blue-700 text-sm">Stay informed about new features and improvements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">💬</span>
                  </div>
                  <div>
                    <p className="text-blue-800 font-medium text-sm">Community Support</p>
                    <p className="text-blue-700 text-sm">Connect with other users and get help</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-sm">🎯</span>
                  </div>
                  <div>
                    <p className="text-blue-800 font-medium text-sm">Exclusive Content</p>
                    <p className="text-blue-700 text-sm">Access premium features and content</p>
                  </div>
                </div>
              </div>

              <Button variant="primary" className="w-full mt-6">
                Join Community
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LineChart;

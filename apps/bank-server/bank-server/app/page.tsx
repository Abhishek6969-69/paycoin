import SimulatorControls from "../components/SimulatorControls";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">CoinPay Bank</h1>
              <p className="text-xs text-gray-500">Bank simulator — testing only</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold text-gray-700">Online</span>
            </div>
            <a className="text-sm text-gray-500 hover:text-gray-700" href="#logs">Logs</a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
              <span className="text-3xl">🏦</span>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">Bank Simulator</h2>
              <p className="text-sm text-gray-600 mt-1">Quickly start a test payment and inspect webhook responses.</p>
              <div className="mt-4">
                {/* SimulatorControls (client) */}
                <SimulatorControls />
              </div>
            </div>
          </div>
        </div>

        <div id="logs" className="bg-white rounded-2xl shadow p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Events</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
              <div>
                <div className="text-sm text-gray-800 font-medium">Payment completed</div>
                <div className="text-xs text-gray-500">txn_abc123 — ₹250.00 • 2m ago</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-2 h-2 mt-2 bg-yellow-400 rounded-full"></div>
              <div>
                <div className="text-sm text-gray-800 font-medium">Webhook retry</div>
                <div className="text-xs text-gray-500">webhook — 1 retry • 8m ago</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-3 rounded-lg border border-gray-100">
              <div className="text-sm text-gray-500">Payment Gateway</div>
              <div className="font-semibold text-gray-900">Operational</div>
            </div>
            <div className="p-3 rounded-lg border border-gray-100">
              <div className="text-sm text-gray-500">Authentication</div>
              <div className="font-semibold text-gray-900">Operational</div>
            </div>
            <div className="p-3 rounded-lg border border-gray-100">
              <div className="text-sm text-gray-500">API Services</div>
              <div className="font-semibold text-gray-900">Operational</div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-gray-500">
          © 2025 CoinPay Bank Simulator — testing environment only.
        </div>
      </footer>
    </div>
  );
}

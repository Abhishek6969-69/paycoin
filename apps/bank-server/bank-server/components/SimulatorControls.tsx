"use client";

import { useState } from "react";

type EventItem = {
  id: string;
  title: string;
  subtitle?: string;
  level?: "info" | "warning" | "success";
};

export default function SimulatorControls() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState<number>(250);
  const [userId, setUserId] = useState<string>("1");
  const [events, setEvents] = useState<EventItem[]>([
    { id: "evt1", title: "Payment completed", subtitle: "txn_abc123 — ₹250.00 • 2m ago", level: "success" },
    { id: "evt2", title: "Webhook retry", subtitle: "webhook — 1 retry • 8m ago", level: "warning" },
  ]);

  function addEvent(e: EventItem) {
    setEvents((prev) => [e, ...prev].slice(0, 8));
  }

  function handleStartPayment(e: React.FormEvent) {
    e.preventDefault();
    // open the real start-payment endpoint in a new tab (preserve behavior)
    const url = `/start-payment?token=test&amount=${encodeURIComponent(String(amount))}&user_identifier=${encodeURIComponent(userId)}`;
    window.open(url, "_blank");

    const id = `evt_${Date.now()}`;
    addEvent({ id, title: "Payment started", subtitle: `Amount ₹${amount} — user ${userId}`, level: "info" });
    setShowModal(false);
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <button onClick={() => setShowModal(true)} className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">Start Payment</button>
        <a className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200" href="#logs">View Logs</a>
      </div>

      {/* Recent Events */}
      <div className="mt-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">Recent Events</h3>
        <div className="space-y-3">
          {events.map((ev) => (
            <div key={ev.id} className="flex items-start gap-3">
              <div className={`w-2 h-2 mt-2 rounded-full ${ev.level === "success" ? "bg-green-500" : ev.level === "warning" ? "bg-yellow-400" : "bg-blue-400"}`}></div>
              <div>
                <div className="text-sm text-gray-800 font-medium">{ev.title}</div>
                {ev.subtitle && <div className="text-xs text-gray-500">{ev.subtitle}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)} />
          <form onSubmit={handleStartPayment} className="relative bg-white rounded-2xl shadow-lg p-6 w-full max-w-md z-10">
            <h4 className="text-lg font-semibold mb-2">Start Test Payment</h4>
            <div className="text-sm text-gray-500 mb-4">Fill quick details and open the payment flow in a new tab.</div>

            <label className="block text-sm text-gray-600">Amount (₹)</label>
            <input className="mt-1 w-full px-3 py-2 border rounded-lg" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} min={1} />

            <label className="block text-sm text-gray-600 mt-3">User ID</label>
            <input className="mt-1 w-full px-3 py-2 border rounded-lg" value={userId} onChange={(e) => setUserId(e.target.value)} />

            <div className="mt-4 flex justify-end gap-2">
              <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">Cancel</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">Open Payment</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

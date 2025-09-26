import { Suspense } from "react";
import PaymentForm from "../../components/PaymentForm";

export default function StartPaymentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-center">Loading payment details...</p>
        </div>
      </div>
    }>
      <PaymentForm />
    </Suspense>
  );
}

"use client";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ArrowUpRight, ShieldCheck, Sparkles, Zap } from "lucide-react";
import React from "react";
import { startRouteLoading } from "./RouteLoader";

const Hero = () => {
  const router = useRouter();
  async function handaletrynow() {
    const loadingToastId = toast.loading("Signing in as Test User");
    try {
      const res = await signIn("credentials", {
        phone: "9696694046",
        password: "123456789",
        redirect: false
      });

      toast.dismiss(loadingToastId);

      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success("Signed in Test User");
        startRouteLoading();
        router.push("/dashboard");
      }
    } catch (err) {
      toast.dismiss(loadingToastId);
      toast.error("An error occurred during signin. Please try again");
    }
  }

  // Show a sonner loading toast while navigating to signup
  async function handleGetStarted() {
    const loadingToastId = toast.loading("Redirecting to Sign up...");
    try {
      startRouteLoading();
      await router.push("/user/signup");
      toast.dismiss(loadingToastId);
      toast.success("Opening Sign up");
    } catch (err) {
      console.error("Navigation error", err);
      toast.dismiss(loadingToastId);
      toast.error("Unable to open Sign up. Please try again.");
    }
  }

  return (
    <section className="relative overflow-hidden bg-slate-50 pb-16 pt-36 text-slate-900 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-20%] h-[420px] w-[420px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-[-8%] top-[10%] h-[360px] w-[360px] rounded-full bg-sky-200/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            <Sparkles className="h-3.5 w-3.5" />
            Built For Modern Payments
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Welcome to <span className="text-blue-600">CoinPay</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Manage wallets, move money instantly, and operate with enterprise-level security in one seamless digital banking experience.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              onClick={handaletrynow}
            >
              Try Demo Account
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
            <TrustBadge icon={<ShieldCheck className="h-4 w-4" />} label="Bank-grade encryption" />
            <TrustBadge icon={<Zap className="h-4 w-4" />} label="Instant settlement" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Live Network Snapshot</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Metric label="Today's Volume" value="₹8.4 Cr" />
              <Metric label="Success Rate" value="99.98%" />
              <Metric label="Active Wallets" value="1.2M+" />
              <Metric label="Avg. Latency" value="180 ms" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Metric = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3.5">
      <p className="text-xs text-slate-500">{label}</p>
      <p className="mt-1 text-lg font-semibold text-slate-900">{value}</p>
    </div>
  );
};

const TrustBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5">
      <span className="text-blue-600">{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default Hero;

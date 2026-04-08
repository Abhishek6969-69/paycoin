"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  Globe2,
  Menu,
  ShieldCheck,
  Smartphone,
  Users,
  Wallet,
  X,
  Zap
} from "lucide-react";
import Hero from "components/Hero";
import Link from "next/link";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Hero />

      <section id="features" className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Core Capabilities</p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-slate-950">Built For Everyday Finance</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              A complete digital payment stack designed for secure onboarding, fast movement of funds, and transparent transaction tracking.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <FeatureCard
              icon={<Building2 className="h-5 w-5 text-blue-600" />}
              title="Bank to Wallet"
              description="Instantly add funds from linked bank accounts with resilient settlement and realtime status visibility."
            />
            <FeatureCard
              icon={<Users className="h-5 w-5 text-blue-600" />}
              title="P2P Transfers"
              description="Send money instantly to verified recipients with simple lookup, confirmation previews, and secure execution."
            />
            <FeatureCard
              icon={<Smartphone className="h-5 w-5 text-blue-600" />}
              title="Bill & Recharge"
              description="Handle recurring payments and mobile recharges with a clean interface and consistent transfer experience."
            />
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-slate-950">
            How <span className="text-blue-600">CoinPay</span> Works
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <StepCard step="01" title="Create Account" body="Sign up in minutes and verify your profile with a secure onboarding flow." />
            <StepCard step="02" title="Fund Wallet" body="Add money from your linked account and monitor every state in real time." />
            <StepCard step="03" title="Pay Instantly" body="Transfer, recharge, and manage transactions through one trusted interface." />
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">About CoinPay</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">A Modern Platform For Trusted Digital Payments</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              CoinPay is designed to combine banking-grade security with a consumer-friendly product experience. Our mission is simple:
              make moving money feel instant, transparent, and dependable.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <AboutRow icon={<ShieldCheck className="h-4 w-4 text-emerald-600" />} text="Security-first architecture with encrypted flows." />
              <AboutRow icon={<Zap className="h-4 w-4 text-blue-600" />} text="Fast transaction processing and reliable status tracking." />
              <AboutRow icon={<Globe2 className="h-4 w-4 text-indigo-600" />} text="Built for users and businesses across regions." />
            </div>
            <button className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
              Learn more about our product
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Operational Highlights</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Highlight value="99.98%" label="Payment Success Rate" />
              <Highlight value="<200ms" label="Average API Latency" />
              <Highlight value="1M+" label="Active Wallet Users" />
              <Highlight value="24/7" label="Monitoring & Support" />
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-white py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-slate-950">Loved By Users</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Testimonial
              quote="CoinPay made daily business settlements smooth and predictable. The status updates are clearer than any app I've used."
              name="Priya Sharma"
              role="Merchant"
              initials="PS"
            />
            <Testimonial
              quote="The transfer workflow is fast, clean, and secure. I no longer worry about failed payments or confusion in transaction history."
              name="Rahul Mehta"
              role="Freelancer"
              initials="RM"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 text-center text-white shadow-lg">
            <h2 className="text-4xl font-semibold tracking-tight">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100">
              Join users who trust CoinPay for secure digital payments. Create your account and start moving money with confidence.
            </p>
            <Link
              href="/user/signup"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-blue-600 transition hover:bg-slate-100"
            >
              Create account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-white">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <p className="text-lg font-semibold text-slate-900">CoinPay</p>
                <p className="text-xs text-slate-500">Fast • Secure • Borderless</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Support</a>
              <a href="#" className="hover:text-slate-900">FAQ</a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-slate-500">© 2026 CoinPay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-slate-200 bg-white/85 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-white">
            <Wallet className="h-5 w-5" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-slate-900">CoinPay</div>
            <div className="text-xs text-slate-500">Fast • Secure • Borderless</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm md:flex">
          <a href="#features" className="font-medium text-slate-600 hover:text-slate-900">Features</a>
          <a href="#about" className="font-medium text-slate-600 hover:text-slate-900">About</a>
          <a href="#testimonials" className="font-medium text-slate-600 hover:text-slate-900">Testimonials</a>
          <a href="#contact" className="font-medium text-slate-600 hover:text-slate-900">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="/user/signin" className="hidden text-sm font-medium text-slate-600 hover:text-slate-900 sm:inline">Sign in</a>
          <Link href="/user/signup" className="hidden rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 sm:inline-flex">
            Create account
          </Link>
          <button onClick={() => setOpen(!open)} className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3 text-sm">
            <a href="#features" onClick={() => setOpen(false)} className="font-medium text-slate-700">Features</a>
            <a href="#about" onClick={() => setOpen(false)} className="font-medium text-slate-700">About</a>
            <a href="#testimonials" onClick={() => setOpen(false)} className="font-medium text-slate-700">Testimonials</a>
            <a href="#contact" onClick={() => setOpen(false)} className="font-medium text-slate-700">Contact</a>
            <a href="/user/signin" onClick={() => setOpen(false)} className="font-medium text-slate-700">Sign in</a>
            <Link href="/user/signup" className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-4 py-2.5 font-semibold text-white">
              Create account
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition"
    >
      <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </motion.div>
  );
}

function StepCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">{step}</div>
      <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{body}</p>
    </div>
  );
}

function AboutRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Highlight({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-2xl font-semibold text-slate-900">{value}</p>
      <p className="mt-1 text-sm text-slate-500">{label}</p>
    </div>
  );
}

function Testimonial({ quote, name, role, initials }: { quote: string; name: string; role: string; initials: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <p className="text-sm leading-7 text-slate-700">"{quote}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

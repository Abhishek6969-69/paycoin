"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, ArrowRight, CreditCard, Banknote, Users, Smartphone, Shield, Zap, Globe, ChevronRight } from 'lucide-react';
import Hero from 'components/Hero';
import Link from 'next/link';
import { Button } from '@repo/ui/button';
function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
    
      {/* Hero Section */}
     <Hero />

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          <span className="text-blue-600">Powerful</span> Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
            <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Bank to Wallet</h3>
            <p className="text-gray-600">
              Instantly transfer money from your bank account to your CoinPay wallet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
            <Users className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">P2P Transfers</h3>
            <p className="text-gray-600">
              Send money to friends and family instantly with zero fees.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
            <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Mobile Recharge</h3>
            <p className="text-gray-600">
              Recharge your mobile, pay bills, and make everyday payments.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          How <span className="text-blue-600">CoinPay</span> Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Sign Up</h3>
            <p className="text-gray-600">Create your account in minutes with just your phone number and basic details.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Add Money</h3>
            <p className="text-gray-600">Link your bank account and add money to your wallet securely.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Start Paying</h3>
            <p className="text-gray-600">Send money, pay bills, or shop online with your CoinPay wallet.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="About CoinPay" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About <span className="text-blue-600">CoinPay</span>
            </h2>
            <p className="text-gray-600 mb-4">
              CoinPay was founded with a mission to make digital payments accessible to everyone. 
              Our platform combines ease of use with enterprise-grade security to provide a seamless 
              payment experience.
            </p>
            <p className="text-gray-600 mb-6">
              We support a wide range of payment options and are constantly expanding our offerings to 
              meet the evolving needs of our users.
            </p>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium">
              Learn more about our story <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="container mx-auto px-4 py-20 bg-white">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          What Our <span className="text-blue-600">Users</span> Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
            <p className="text-gray-600 mb-4">
              "CoinPay has made sending money to my family so easy. The interface is intuitive 
              and the transfers are instant. I love it!"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                <p className="text-gray-500 text-sm">Regular User</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
            <p className="text-gray-600 mb-4">
              "As a small business owner, CoinPay has simplified how I receive payments. The dashboard 
              gives me all the insights I need to track my finances."
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Rahul Mehta</h4>
                <p className="text-gray-500 text-sm">Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-20 bg-gray-50">
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust CoinPay for their digital payment needs. 
            Download our app today and experience the future of payments.
          </p>
          <Button variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href={"/user/signup"}>Get started Now</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Wallet className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">CoinPay</span>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>
          <p className="text-center text-gray-400">
            © 2025 CoinPay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
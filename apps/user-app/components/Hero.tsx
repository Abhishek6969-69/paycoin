"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Signin from "app/user/signin/page";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
const Hero = () => {
  const router=useRouter()
  async function handaletrynow(){
    const loadingToastId = toast.loading("Signing in as Test User");
    try{
        const res = await signIn('credentials', {
            phone: '9696694046',
            password: '123456',
            redirect: false
        })

        toast.dismiss(loadingToastId);


        if (res?.error) {
            toast.error(res.error);
        } else {
            toast.success("Signed in Test User");
            router.push('/dashboard');
        }
    } catch (err) {
        console.log("Signup error ", err);
        toast.dismiss(loadingToastId);
        toast.error("An error occurred during signin. Please try again");
    }


}
  return (
    <section className="relative flex flex-col items-center justify-center text-center text-white min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0A0F1D] via-[#1C1F3A] to-[#2D2163]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Hero Content */}
      <motion.h1
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-400 to-purple-500 text-transparent bg-clip-text drop-shadow-xl relative z-10 leading-tight"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to CoinPay
      </motion.h1>

      <motion.p
        className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl px-6 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The future of <span className="font-semibold">fast, secure, and borderless</span> crypto payments.  
        Send, receive, and manage assets seamlessly.
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        <button className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
        <Link href={"/user/signup"} >  Get Started</Link>
        </button>
        <button className="px-8 py-3 bg-transparent border-2 border-gray-300 text-white font-semibold rounded-full hover:bg-gray-800 hover:border-gray-800 transition-all duration-300" onClick={handaletrynow}>
         Try Now
        </button>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 w-full max-w-5xl px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.4 }}
      >
        <Feature icon="🔐" title="Secure Transactions" description="Military-grade encryption for your safety." />
        <Feature icon="⚡" title="Instant Payments" description="Lightning-fast transfers worldwide." />
        <Feature icon="🌍" title="Global Access" description="Use CoinPay anywhere, anytime." />
      </motion.div>
    </section>
  );
};

const Feature = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center bg-gray-900 bg-opacity-80 p-6 rounded-xl shadow-lg backdrop-blur-md border border-gray-700 hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
    >
      <span className="text-4xl mb-4">{icon}</span>
      <h3 className="text-lg font-semibold text-gray-100">{title}</h3>
      <p className="mt-2 text-sm text-gray-400">{description}</p>
    </motion.div>
  );
};

export default Hero;
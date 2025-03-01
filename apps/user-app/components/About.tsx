"use client";
import { motion } from "framer-motion";

const About = () => {
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-purple-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About CoinPay
          </motion.h2>
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            CoinPay is revolutionizing the world of cryptocurrency payments by offering a platform that combines speed, security, and simplicity. Our mission is to empower individuals and businesses to transact globally with ease, using cutting-edge blockchain technology.
          </motion.p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src="/crypto-illustration.png" // Replace with your image
              alt="CoinPay Illustration"
              className="mx-auto max-w-md rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default About;


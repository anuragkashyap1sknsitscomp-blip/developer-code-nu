"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log("Attempting login with:", { email, password });
    alert("Login attempt successful! (No actual login implemented)");
  };

  return (
    <main className="min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-hidden">
      {/* HEADER */}
      <header className="w-full py-4 px-6 sm:px-10 lg:px-16 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-lg z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <img
            src="https://developer-code-nu-eight.vercel.app/images/logowhite.png"
            alt="Code Nutrition Logo"
            className="w-12 h-9 sm:w-31 sm:h-11 rounded-lg"
          />
          
        </motion.div>

        <nav className="flex items-center gap-4 sm:gap-6 text-sm">
          <Link
            href="/login"
            className="font-semibold text-white hover:text-gray-300 transition duration-200"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-200 shadow-lg"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      {/* MAIN SECTION */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* LEFT FORM */}
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-20 flex items-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-gray-400 mb-8 text-sm sm:text-base leading-relaxed">
              Sign in to manage your health and wellness journey with Code Nutrition.
            </p>

            <div className="flex flex-col gap-6">
              {/* EMAIL */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-2 text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="bg-gray-900/60 border border-white/20 py-3 px-4 rounded-xl text-white placeholder-gray-500 outline-none focus:border-white transition duration-200 shadow-lg"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* PASSWORD */}
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium mb-2 text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="bg-gray-900/60 border border-white/20 py-3 px-4 pr-12 rounded-xl text-white placeholder-gray-500 outline-none focus:border-white transition duration-200 shadow-lg w-full"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* FORGOT PASSWORD */}
              <div className="flex justify-end -mt-2">
                <Link
                  href="/forgot-password"
                  className="text-sm text-gray-300 hover:text-white transition"
                >
                  Forgot password?
                </Link>
              </div>

              {/* LOGIN BUTTON */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="bg-white text-black hover:bg-gray-200 transition-all py-3 rounded-xl font-bold text-lg shadow-xl"
              >
                Log In
              </motion.button>
            </div>

            {/* SIGNUP LINK */}
            <p className="mt-6 text-center text-sm text-gray-400">
              Don't have an account?{" "}
              <Link href="/signup" className="text-white font-semibold hover:underline transition">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>

        {/* RIGHT VISUAL SECTION */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-gradient-to-b from-black via-gray-950 to-black items-center justify-center p-12 border-l border-white/10 relative overflow-hidden order-1 lg:order-2">
          {/* BG ORBS */}
          <div className="absolute top-16 left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-lg relative z-10"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Your Health Partner
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Trusted by 400K+ customers for quality medicines and healthcare products delivered fast.
            </p>

            {/* CARD */}
            <motion.div
              initial={{ rotateY: -20, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-72 h-72 bg-black rounded-3xl border border-white/20 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(255,255,255,0.3)] relative overflow-hidden backdrop-blur-sm mx-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-black/0 animate-pulse" />
              <svg
                className="w-1/2 h-1/2 text-white/60 relative z-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                />
              </svg>
            </motion.div>

            {/* TRUST BADGES */}
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              {["FDA Approved", "Secure Delivery", "24/7 Support"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-white/80"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full py-4 text-center text-gray-500 text-xs sm:text-sm border-t border-white/10">
        © {new Date().getFullYear()} Code Nutrition. All rights reserved.
      </footer>
    </main>
  );
}

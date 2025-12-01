"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">

      {/* FIXED PREMIUM HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
        <Navigation />
      </header>

      {/* TOP SPACING */}
      <div className="pt-32"></div>

      {/* PAGE TITLE */}
      <section className="pb-16 px-4 sm:px-8 text-center border-b border-white/10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
          Contact Us
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
          Have questions about our supplements, orders, or health guidance?
          We’re here to help you 24/7.
        </p>
      </section>

      {/* LEFT–RIGHT CONTACT SECTION */}
      <section className="px-4 sm:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* LEFT — FORM */}
          <div className="border border-white/10 rounded-2xl p-8 bg-white/5 backdrop-blur-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 tracking-wide">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <div>
                <label className="block text-sm mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:border-white/60 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:border-white/60 outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows={5}
                  className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:border-white/60 outline-none"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT — CONTACT INFO */}
          <div className="flex flex-col justify-center gap-8">

            {/* Email */}
            <div className="border border-white/10 rounded-xl p-8 hover:bg-white/5 transition duration-300 shadow-[0_0_30px_-15px_rgba(255,255,255,0.2)]">
              <Mail className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-white/70 text-sm">support@codenutrition.com</p>
            </div>

            {/* Phone */}
            <div className="border border-white/10 rounded-xl p-8 hover:bg-white/5 transition duration-300 shadow-[0_0_30px_-15px_rgba(255,255,255,0.2)]">
              <Phone className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-white/70 text-sm">+91 98765 43210</p>
            </div>

            {/* Address */}
            <div className="border border-white/10 rounded-xl p-8 hover:bg-white/5 transition duration-300 shadow-[0_0_30px_-15px_rgba(255,255,255,0.2)]">
              <MapPin className="w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-white/70 text-sm">
                Mumbai, Maharashtra, India
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="w-full h-[300px] sm:h-[400px] mt-10">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="border-t border-white/10 grayscale hover:grayscale-0 transition"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160984804!2d72.74109992173612!3d19.082197839664995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c630ed4bb7e3%3A0xdeb6e4cf1cd7e36d!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
        ></iframe>
      </section>

      {/* CLEAN FOOTER */}
      <footer className="border-t border-white/10 bg-black py-10 mt-10">
        <Footer />
      </footer>

    </main>
  );
}

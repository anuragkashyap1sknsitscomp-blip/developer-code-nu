"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased">
      <Navigation />

      {/* HEADER */}
      <header className="pt-32 pb-16 px-4 sm:px-8 bg-gradient-to-b from-black to-zinc-900 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400 font-semibold mb-2">
            Code Nutrition
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl font-light tracking-tight text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-white/50 font-sans">
            Effective Date: November 24, 2025
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="w-full px-4 sm:px-8 py-20 max-w-6xl mx-auto space-y-16">

        {/* INTRO CARD */}
        <section className="p-10 rounded-3xl bg-zinc-900/60 border border-white/10 shadow-xl backdrop-blur-sm space-y-4">
          <div className="h-1 w-12 bg-sky-400 rounded-full"></div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
            Our Commitment to Your Privacy
          </h2>
          <p className="text-lg text-white/70 leading-normal font-sans">
            At <span className="italic font-medium text-white">Code Nutrition</span>, we prioritize the
            confidentiality and protection of your personal data. This Privacy Policy explains how we
            collect, use, store, and secure your information when you engage with our platform or
            purchase our products.
          </p>
        </section>

        {/* SECTION 1 */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Information We Collect
          </h2>

          {/* Personal Information */}
          <h3 className="text-2xl font-semibold mt-6 text-white">Personal Information</h3>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Information you voluntarily provide during sign-up, checkout, or communication:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 font-sans leading-relaxed">
            <li><span className="text-sky-400 font-semibold">Identification:</span> Name, email, phone number</li>
            <li><span className="text-sky-400 font-semibold">Shipping/Billing:</span> Addresses & payment data (processed securely)</li>
            <li><span className="text-sky-400 font-semibold">Account Credentials:</span> Username & password</li>
          </ul>

          {/* Non-Personal Information */}
          <h3 className="text-2xl font-semibold mt-10 text-white">Non-Personal / Usage Data</h3>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Automatically collected data for analytics & performance:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 font-sans leading-relaxed">
            <li>IP address, browser type, device model</li>
            <li>Page visit data, time spent, click behaviour</li>
            <li>Cookies & tracking identifiers (explained below)</li>
          </ul>
        </section>

        {/* SECTION 2 */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li>To fulfill orders & process payments securely</li>
            <li>To send updates, confirmations, and support responses</li>
            <li>To enhance website performance and optimize experience</li>
            <li>To send newsletters & promotional offers (opt-out anytime)</li>
          </ul>
        </section>

        {/* SECTION 3 */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Disclosure of Your Information
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            We never sell your personal data. We share it only when essential:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 shadow-md">
              <p className="text-white font-semibold text-xl mb-2">✔ Service Providers</p>
              <p className="text-white/70">Delivery partners, payment processors, analytics providers</p>
            </div>

            <div className="p-5 rounded-2xl bg-red-950/40 border border-red-800/40 shadow-md">
              <p className="text-red-300 font-semibold text-xl mb-2">✔ Legal Obligations</p>
              <p className="text-red-200/70">Compliance with court orders, fraud prevention, law enforcement</p>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 shadow-md">
              <p className="text-white font-semibold text-xl mb-2">✔ Business Transfers</p>
              <p className="text-white/70">During mergers, acquisitions, or company restructuring</p>
            </div>
          </div>
        </section>

        {/* SECTION 4 — Cookies */}
        <section className="p-8 bg-blue-950/20 rounded-3xl border border-blue-800/40 shadow-xl space-y-6">
          <h2 className="font-serif text-3xl font-semibold text-white">
            Cookies & Tracking Technologies
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Cookies help enhance your browsing experience and track essential usage metrics.
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li><span className="text-sky-400 font-semibold">Functionality Cookies:</span> Save your preferences</li>
            <li><span className="text-sky-400 font-semibold">Analytics Cookies:</span> Understand user activity & improve UI</li>
          </ul>
        </section>

        {/* SECTION 5 Security */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Data Security
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Your data is protected using industry-grade security protocols including encryption,
            restricted access, and secure networks.
          </p>
          <p className="text-lg text-white font-semibold bg-green-900/40 rounded-xl p-4 border border-green-700/40">
            All sensitive payment information is encrypted via SSL and never stored on our servers.
          </p>
        </section>

        {/* SECTION 6 Rights */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Your Rights
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li>Access your data on request</li>
            <li>Request updates or corrections</li>
            <li>Request deletion when permitted by law</li>
          </ul>
        </section>

        {/* SECTION 7 Updates */}
        <section className="p-6 bg-zinc-900/60 rounded-2xl border border-white/10 shadow-xl space-y-4">
          <h2 className="font-serif text-3xl font-semibold">
            Updates to This Policy
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            We may revise this Privacy Policy. Continued use of the website indicates acceptance of the updated policy.
          </p>
        </section>

        {/* SECTION 8 Contact */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Contact Us
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            For questions or concerns, contact us:
          </p>

          <p className="text-xl font-bold text-sky-400">support@codenutrition.com</p>
          <p className="text-xl font-bold text-sky-400">
            Address: Code Nutrition, [Your Business Address]
          </p>
        </section>

      </div>

      <Footer />
    </main>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function TermsPage() {
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
            Terms & Conditions
          </h1>
          <p className="mt-4 text-base text-white/50 font-sans">
            Last Updated: November 24, 2025
          </p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="w-full px-4 sm:px-8 py-20 max-w-6xl mx-auto space-y-16">

        {/* INTRO CARD */}
        <section className="p-10 rounded-3xl bg-zinc-900/60 border border-white/10 shadow-xl backdrop-blur-sm space-y-4">
          <div className="h-1 w-12 bg-sky-400 rounded-full"></div>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-white">
            About Code Nutrition
          </h2>
          <p className="text-lg text-white/70 leading-normal font-sans">
            <span className="italic font-medium text-white">Code Nutrition</span> is committed to building
            scientifically validated, high-purity supplements. Every formula is developed through
            meticulous research, stringent testing, and global quality standards, ensuring
            transparency and integrity in everything we create.
          </p>
        </section>

        {/* SECTIONS */}
        {/* ELIGIBILITY */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Eligibility
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li>You must be at least <span className="text-sky-400 font-semibold">18 years old</span>.</li>
            <li>You must be legally capable of entering agreements.</li>
            <li>You must use the platform responsibly and within all applicable laws.</li>
          </ul>
        </section>

        {/* MEDICAL DISCLAIMER */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Medical Disclaimer
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Our products are not medical substitutes. All content on this website is intended for educational
            purposes only and should not be used to diagnose, treat, or cure any medical condition.
          </p>
          <p className="text-lg leading-relaxed font-sans font-semibold bg-red-950/40 p-4 rounded-xl border border-red-800/40 text-red-300">
            Always consult your licensed healthcare professional before using supplements or altering your health routine.
          </p>
        </section>

        {/* PRODUCT INFORMATION */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Product Information & Availability
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li>Product availability is subject to change at any time.</li>
            <li>Formulas, packaging, and labels may be updated without notice.</li>
            <li>We may temporarily restrict website access for maintenance.</li>
          </ul>
        </section>

        {/* PRICING */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Pricing & Payments
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            All prices are displayed in INR and include applicable taxes unless mentioned otherwise.
            Pricing, discounts, and promotional offers may change without prior notice.
            We reserve the right to cancel any order placed with incorrect pricing.
          </p>
        </section>

        {/* SHIPPING */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Shipping & Delivery
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li>Orders typically ship within <span className="font-semibold text-sky-400">1–4 business days</span>.</li>
            <li>Delivery time depends on your location and courier performance.</li>
            <li>Tracking details will be shared via email once dispatched.</li>
          </ul>
        </section>

        {/* RETURNS */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Returns & Refunds
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Returns are accepted under strict guidelines to maintain product safety:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li>Products damaged during delivery or incorrect items qualify.</li>
            <li>Items must be returned unused, sealed, and in original condition.</li>
            <li>Issues must be reported within <span className="font-bold text-red-400">48 hours</span> of delivery.</li>
          </ul>
        </section>

        {/* USER RESPONSIBILITIES */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            User Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-white/70 leading-relaxed font-sans">
            <li>Provide accurate personal and payment information.</li>
            <li>Use the platform lawfully and ethically.</li>
            <li>Avoid fraudulent, abusive, or harmful activities.</li>
          </ul>
        </section>

        {/* INTELLECTUAL PROPERTY */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Intellectual Property
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            All images, branding, product formulas, website design, and trademarks belong solely to
            <span className="text-sky-400 font-semibold"> Code Nutrition</span>.
            Unauthorized duplication, distribution, or modification is prohibited.
          </p>
        </section>

        {/* PRIVACY */}
        <section className="space-y-6">
          <h2 className="font-serif text-3xl font-semibold border-b pb-3 border-white/10">
            Privacy & Data
          </h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            Your personal data is securely stored and processed in alignment with global privacy standards.
            We only share your data when required by law or essential to fulfill your order.
            Read our detailed{" "}
            <Link
              href="/privacy-policy"
              className="underline text-sky-400 hover:text-sky-300 font-semibold"
            >
              Privacy Policy
            </Link>.
          </p>
        </section>

        {/* UPDATES */}
        <section className="space-y-6 p-6 bg-zinc-900/60 rounded-2xl border border-white/10 shadow-xl">
          <h2 className="font-serif text-3xl font-semibold">Updates to Terms</h2>
          <p className="text-lg text-white/70 leading-relaxed font-sans">
            These Terms & Conditions may be updated at any time. Continued use of the website
            indicates your acceptance of the revised terms.
          </p>
        </section>

      </div>

      <Footer />
    </main>
  )
}

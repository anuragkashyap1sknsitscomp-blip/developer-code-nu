"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    q: "What is Code Nutrition?",
    a: "Code Nutrition provides scientifically formulated, high-quality wellness supplements made with pure, research-backed ingredients."
  },
  {
    q: "Are your supplements safe?",
    a: "Yes. All our supplements undergo purity checks, stability testing, and are manufactured under strict quality standards."
  },
  {
    q: "Do I need a prescription?",
    a: "No prescription is required, but you should consult a healthcare professional before trying any supplement."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major debit and credit cards, as well as UPI and other secure payment methods."
  },
  {
    q: "How long does delivery take?",
    a: "Shipping typically takes 1–4 business days depending on your location."
  },
  {
    q: "Can I return a product?",
    a: "Returns are accepted only if the product is unused, sealed, and reported within 48 hours of delivery."
  },
  {
    q: "Is my data safe?",
    a: "Yes. Your personal data is protected with modern security standards and encrypted technologies."
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-black text-gray-200 antialiased font-sans">
      <Navigation />

      {/* HEADER */}
      <section className="pt-32 pb-16 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center w-full">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-2 font-mono">
            Code Nutrition
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl tracking-tight font-light text-white">
            Frequently Asked Questions
          </h1>

          <p className="mt-3 text-base text-gray-400 font-sans">
            Clear answers to everything you need to know
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-4 sm:px-6 lg:px-20 py-20 max-w-7xl mx-auto space-y-8">
        {faqs.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.01, borderColor: "rgba(255,255,255,0.2)" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="bg-neutral-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl w-full"
          >
            <button
              className="w-full flex items-center justify-between text-left group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center gap-4">
                <HelpCircle className="text-blue-400 group-hover:text-blue-300 transition-all" size={26} />
                <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans">
                  {item.q}
                </h3>
              </div>

              {openIndex === index ? (
                <ChevronUp className="text-gray-300" size={26} />
              ) : (
                <ChevronDown className="text-gray-300" size={26} />
              )}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 pl-10 text-lg text-gray-300 leading-relaxed font-light"
                >
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>

      <Footer />
    </main>
  )
}

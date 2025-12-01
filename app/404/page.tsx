"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function NotFound() {
  useEffect(() => {
    const cursorLight = document.getElementById("cursorLight")

    const handleMove = (e) => {
      cursorLight.style.left = e.clientX + "px"
      cursorLight.style.top = e.clientY + "px"
    }

    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">

      {/* Cursor Glow */}
      <div
        id="cursorLight"
        className="pointer-events-none fixed w-52 h-52 bg-white/10 blur-[90px] rounded-full -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-screen opacity-80 transition-transform"
      />

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.08] bg-[url('/noise.png')] bg-repeat mix-blend-overlay pointer-events-none"></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,transparent 40%,rgba(0,0,0,0.8)100%)] pointer-events-none z-0"></div>

      {/* Fog Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] bg-[url('/fog.png')] bg-cover animate-fogMove z-0"></div>

      {/* Particle Grid */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="particles"></div>
      </div>

      {/* Floating Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 w-96 h-96 bg-white/10 blur-[150px] rounded-full animate-floatSlow" />
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-white/5 blur-[120px] rounded-full animate-floatReverse" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 blur-[100px] rounded-full animate-floatSlow2" />
      </div>

      <Navigation />

      {/* Content */}
      <section className="pt-40 pb-24 px-5 text-center relative z-20">
        <p className="text-[0.7rem] tracking-[0.4em] uppercase text-gray-400 mb-5 fadeIn">
          Code Nutrition • Error
        </p>

        <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl font-light mb-6 zoomIn leading-none">
          4<span className="text-gray-300 italic">0</span>4
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-xl mx-auto leading-relaxed slideUp delay-300">
          You’ve reached a page that doesn’t exist —
          but your vision still does.
        </p>

        <div className="mt-10 slideUp delay-500">
          <Link
            href="/"
            className="inline-flex items-center px-7 py-3 rounded-full bg-white/5 border border-white/20 text-gray-200 font-medium hover:bg-white/10 hover:scale-[1.06] transition-all"
          >
            Return to Homepage →
          </Link>
        </div>
      </section>

      <Footer />

      {/* Animations */}
      <style jsx>{`
      
        @keyframes fadeIn {
          0% { opacity: 0 }
          100% { opacity: 1 }
        }
        .fadeIn { animation: fadeIn 1.3s ease-out forwards; }

        @keyframes zoomIn {
          0% { opacity: 0; transform: scale(0.8) }
          100% { opacity: 1; transform: scale(1) }
        }
        .zoomIn { animation: zoomIn 1.4s cubic-bezier(.16,.84,.44,1) forwards; }

        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(25px) }
          100% { opacity: 1; transform: translateY(0) }
        }
        .slideUp { animation: slideUp 1.2s ease-out forwards; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        
        @keyframes floatSlow {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-30px) }
        }
        .animate-floatSlow { animation: floatSlow 10s ease-in-out infinite; }

        @keyframes floatReverse {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(30px) }
        }
        .animate-floatReverse { animation: floatReverse 11s ease-in-out infinite; }

        @keyframes floatSlow2 {
          0%,100% { transform: translateY(0) }
          50% { transform: translateY(-20px) }
        }
        .animate-floatSlow2 { animation: floatSlow2 9s ease-in-out infinite; }

        
        @keyframes fogMove {
          0% { transform: translateX(0) }
          100% { transform: translateX(-200px) }
        }
        .animate-fogMove { animation: fogMove 40s linear infinite; }

        .particles {
          width: 100%;
          height: 100%;
          background: radial-gradient(#444 1px, transparent 1px);
          background-size: 38px 38px;
          opacity: 0.35;
        }
      `}</style>
    </main>
  )
}

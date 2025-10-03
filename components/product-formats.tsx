"use client"

import { useEffect, useRef } from "react"

export function ProductFormats() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Intersection Observer logic for fade-in animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-12")
            
          }
        })
      },
      { threshold: 0.2 },
    )

    const elements = sectionRef.current?.querySelectorAll(".format-item")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    // Section Background: Changed to bg-black for seamless dark theme integration
    <section ref={sectionRef} className="relative w-full py-32 bg-black text-white">
      
      {/* --- 1. The Softgel Section --- */}
      <div className="format-item opacity-0 translate-y-12 transition-all duration-1000 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative aspect-square">
            <img
              src="/extreme-macro-photography-of-omega-3-fish-oil-soft.jpg"
              alt="Softgel Capsule Close-up"
              className="w-full h-full object-cover rounded-xl shadow-2xl shadow-zinc-800/50"
            />
          </div>
          
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-white">The Softgel</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Enteric-coated softgels ensure optimal absorption in the small intestine, eliminating fishy aftertaste
              while maximizing bioavailability.
            </p>
            <ul className="space-y-3 text-zinc-200">
              <li className="flex items-start gap-3">
                {/* Accent color for bullet point */}
                <span className="text-white font-bold text-xl leading-none -mt-1">•</span> 
                <span>Delayed-release coating protects omega-3s from stomach acid</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold text-xl leading-none -mt-1">•</span>
                <span>Gelatin-free, suitable for pescatarians</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white font-bold text-xl leading-none -mt-1">•</span>
                <span>Easy-to-swallow 1000mg size</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Separator for Visual Clarity */}
      <div className="max-w-screen-xl mx-auto border-t border-zinc-800 my-16 lg:my-32"></div>

      {/* --- 2. Inside the Capsule (Cross-section) Section --- */}
      <div className="format-item opacity-0 translate-y-12 transition-all duration-1000 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-white">Inside the Capsule</h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Pure, molecularly distilled fish oil in its natural triglyceride form— the most bioavailable and easily
              absorbed by your body.
            </p>
            
            {/* Stats Grid - Enhanced contrast */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-6">
              <div className="border-l-4 border-white/50 pl-4"> {/* Subtle border accent */}
                <p className="text-4xl font-serif mb-1 text-white">2000mg</p>
                <p className="text-sm text-zinc-400">Total Omega-3s</p>
              </div>
              <div className="border-l-4 border-white/50 pl-4">
                <p className="text-4xl font-serif mb-1 text-white">1400mg</p>
                <p className="text-sm text-zinc-400">EPA</p>
              </div>
              <div className="border-l-4 border-white/50 pl-4">
                <p className="text-4xl font-serif mb-1 text-white">600mg</p>
                <p className="text-sm text-zinc-400">DHA</p>
              </div>
              <div className="border-l-4 border-white/50 pl-4">
                <p className="text-4xl font-serif mb-1 text-white">{"<"}5ppm</p>
                <p className="text-sm text-zinc-400">Heavy Metals</p>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative aspect-square">
            <img
              src="/cross-section-of-fish-oil-capsule-showing-golden-o.jpg"
              alt="Capsule Cross-section"
              className="w-full h-full object-cover rounded-xl shadow-2xl shadow-zinc-800/50"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

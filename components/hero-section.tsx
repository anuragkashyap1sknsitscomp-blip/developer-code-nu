"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Note: To use DM Serif Display and DM Sans with Tailwind, you would typically 
// configure them in your tailwind.config.js as custom font families (e.g., font-serif-display and font-sans-body).
// Since I cannot modify that file, I will use inline styles to target the specific fonts.

// DM Serif Display for the bold, high-contrast look of the main title.
const FONT_TITLE = { fontFamily: "'DM Serif Display', serif" };
// DM Sans for the clean, legible, professional look of the small, uppercase text and body.
const FONT_SANS = { fontFamily: "'DM Sans', sans-serif" };

const heroImages = [

  "/images/vitamin12.png", "/images/med1.png",
  "/images/magenisum.png", "/images/med2.png",
  "/images/vitamink2.png", "/images/med3.png",
]

const CATEGORY_TILES_DATA = [
  {
    title: "EAT",
    link: "/shop/eat",
    imgUrl: "images/eat.webp",
  },
  {
    title: "MOVE",
    link: "/shop/move",
    imgUrl: "images/move.webp",
  },
  {
    title: "MIND",
    link: "/shop/mind",
    imgUrl: "images/mind.webp",
  },
  {
    title: "SLEEP",
    link: "/shop/sleep",
    imgUrl: "images/sleep.webp",
  },
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = heroRef.current
      if (!el) return
      const scrollY = window.scrollY
      const opacity = Math.max(1 - scrollY / 500, 0)
      const translate = Math.min(scrollY * 0.4, 120)
      el.style.opacity = `${opacity}`
      el.style.transform = `translateY(${-translate}px)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* HERO SECTION WITH BACKGROUND VIDEO */}
      <section className="relative flex items-center justify-center w-full min-h-[90vh] lg:min-h-[85vh] bg-black text-white pt-20 overflow-hidden">
        {/* 🔹 Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
          src="/bg_animation.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay tint */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />

        {/* MAIN HERO CONTENT */}
        <div
          ref={heroRef}
          className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 lg:py-20 transition-opacity duration-300 will-change-transform z-[2]"
        >
          {/* Text Section */}
          <div className="w-full lg:w-[50%] text-center lg:text-left space-y-3 md:space-y-4 lg:space-y-6 pt-4 lg:pt-0">
            {/* CURATED EXCELLENCE - Using DM Sans style */}
            <p
              className="text-white/70 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium pl-4 inline-block"
              style={FONT_SANS}
            >
              CURATED EXCELLENCE,
            </p>
            {/* Supplements Without Compromise - Using DM Serif Display style, now larger (md:text-6xl, lg:text-7xl) */}
            <h1
              className="text-white text-5xl md:text-6xl lg:text-7xl font-serif leading-tight"
              style={FONT_TITLE}
            >
              <span className="block text-white"></span>
              <span className="block text-white mb-2">Supplements <br /> Without <br /> Compromise</span>
            </h1>

          </div>

          {/* Product Image Section */}
          <div className="relative w-full lg:w-[50%] flex items-center justify-center mt-8 sm:mt-10 lg:mt-0 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-square overflow-hidden">
              {heroImages.map((src, index) => {
                const isActive = index === currentIndex
                return (
                  <Image
                    key={index}
                    src={src}
                    alt={`Product Bottle ${index + 1}`}
                    fill
                    className={`object-contain absolute inset-0 transition-all duration-[1500ms] ease-in-out ${isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
                      }`}
                    priority={index === 0}
                    sizes="(max-width: 1024px) 70vw, 400px"
                  />
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY TILES SECTION */}
      <section
        id="featured"
        className="w-full bg-white text-black py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-gray-800"
      >

        <h2 className="font-serif text-5xl md:text-6xl mb-5 text-balance">
          Wellness Oriented
        </h2>

        <p className="text-gray-600 mb-12 text-base" style={FONT_SANS}>
          Find the right supplement for what your body needs most.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-7xl mx-auto">
          {CATEGORY_TILES_DATA.map((tile, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                // 👇 For now this does nothing — but you can trigger a modal or toast here later
                console.log(`${tile.title} clicked`)
              }}
              className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.03] cursor-pointer"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%), url(${tile.imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-10">
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white" style={FONT_SANS}>
                  {tile.title}
                </h3>
                <div className="p-2 border border-white rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          className="mt-8 px-6 cursor-pointer py-2 text-sm font-semibold uppercase tracking-widest border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 shadow-md hover:shadow-white/20"
          style={FONT_SANS}
        >
          View More
        </button>
      </section>

    </>
  )
}

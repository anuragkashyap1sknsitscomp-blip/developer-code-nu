"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const heroImages = [
  "/images/bottle-premium-white.png",
  "/images/bottle2.png",
  "/images/bottle3.png",
  "/images/bottle1.png",
]

const CATEGORY_TILES_DATA = [
  {
    title: "EAT",
    link: "/shop/eat",
    imgUrl: "/professional-portrait-of-nutrition-scientist-in-la.jpg",
  },
  {
    title: "MOVE",
    link: "/shop/move",
    imgUrl: "https://www.shutterstock.com/image-photo/portrait-handsome-male-doctor-stethoscope-600nw-2480850611.jpg",
  },
  {
    title: "MIND",
    link: "/shop/mind",
    imgUrl: "https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-inside-hospital-handsome-model-portrait-46325210.jpg",
  },
  {
    title: "SLEEP",
    link: "/shop/sleep",
    imgUrl: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
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
      {/* 🟢 CHANGE 1: items-start changed to items-center for vertical centering */}
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
          // 🟢 CHANGE 2: Increased lg:py-16 to lg:py-20 for better visual vertical balance
          className="flex flex-col lg:flex-row items-center justify-between w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 lg:py-20 transition-opacity duration-300 will-change-transform z-[2]"
        >
          {/* Text Section */}
          <div className="w-full lg:w-[50%] text-center lg:text-left space-y-3 md:space-y-4 lg:space-y-6 order-2 lg:order-1 pt-4 lg:pt-0">
            <p className="text-white/70 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium border-l-2 border-white/50 pl-4 inline-block">
              — CURATED EXCELLENCE,
            </p>
            <h1 className="text-4xl sm:text-4xl md:text-5xl font-sans leading-tight tracking-tighter">
              <span className="block text-white"></span>
              <span className="block text-white mb-2">Supplements Without Compromise</span>
              {/* <span className="inline-block text-white font-serif italic text-5xl sm:text-6xl md:text-7xl font-light">
                your every day
              </span> */}
            </h1>
            <a
              href="#featured"
              className="inline-block mt-4 md:mt-6 px-8 sm:px-10 py-3 text-sm sm:text-base bg-white text-black font-extrabold uppercase tracking-widest rounded-full shadow-2xl shadow-white/20 transition-all duration-300 transform hover:scale-[1.03]"
            >
              Shop Collection
            </a>
          </div>

          {/* Product Image Section */}
          <div className="relative w-full lg:w-[50%] flex items-center justify-center mt-8 sm:mt-10 lg:mt-0 order-1 lg:order-2">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md aspect-square overflow-hidden">
              {heroImages.map((src, index) => {
                const isActive = index === currentIndex
                return (
                  <Image
                    key={index}
                    src={src}
                    alt={`Product Bottle ${index + 1}`}
                    fill
                    className={`object-contain absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                      isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
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

      {/* CATEGORY TILES SECTION (No changes needed, already centered) */}
<section
  id="featured"
  className="w-full bg-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-gray-800"
>
  <h2 className="text-3xl md:text-4xl font-sans font-bold mb-3 text-center tracking-tight">
    Shop by Focus
  </h2>
  <p className="text-gray-400 mb-12 text-base">
    Find supplements curated for your specific health goals.
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
        // EDITED: Border radius changed from rounded-xl to rounded-lg
        className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.03] cursor-pointer"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%), url(${tile.imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-10">
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white">
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

  <button className="mt-12 px-8 py-3 text-sm font-semibold uppercase tracking-widest border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 shadow-md hover:shadow-white/20">
    View Complete Catalog
  </button>
</section>

    </>
  )
}

export function CuratorSection() {
  // Define colors for the monochrome dark theme consistency
  // UPDATED: Changed background color to pure black (bg-black)
  const BG_DARK = "bg-black"; 
  const TEXT_MUTED = "text-gray-400";
  const TEXT_SUBTLE_ACCENT = "text-gray-200"; // Used for small accents
  const BORDER_COLOR = "border-gray-700";
  
  return (
    // UPDATED: Uses bg-black and vertical padding reduced from py-28/py-36 to py-16
    <section className={`relative w-full ${BG_DARK} text-white py-16 px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Image Column */}
        <div 
          // UPDATED: Border radius reduced from rounded-xl to rounded-lg
          className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg 
                    /* Subtle shadow for lift */
                    shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_15px_rgba(255,255,255,0.05)] 
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),_0_0_25px_rgba(255,255,255,0.1)]"
        >
          <img
            src="/professional-portrait-of-nutrition-scientist-in-la.jpg"
            alt="Dr. Sarah Chen, Chief Curator"
            className="w-full h-full object-cover object-top" 
          />
        </div>

        {/* Content Column */}
        <div className="space-y-8 sm:space-y-10">
          
          {/* Header */}
          <p className={`text-sm tracking-[0.3em] uppercase ${TEXT_SUBTLE_ACCENT} font-medium pb-2 border-b ${BORDER_COLOR} inline-block`}>
            Chief Scientific Officer
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Meet Dr. Sarah Chen
          </h2>

          <div className="space-y-8 text-gray-300 leading-relaxed pt-2">
            
            {/* Quote Section with monochrome styling */}
            <p className={`text-xl sm:text-2xl font-light italic text-white/90 border-l-4 border-gray-500 pl-4 sm:pl-6 py-1`}>
              "Our mission is to **cut through the noise** of the supplement industry. Too many products make bold claims
              without the science to back them up."
            </p>

            {/* Main Text Block 1 */}
            <p className="text-base sm:text-lg">
              With over **15 years in nutritional biochemistry** and a **PhD from Stanford**, I've dedicated my career to
              identifying supplements that actually work. Every product in our collection has been personally vetted for
              efficacy, purity, and bioavailability.
            </p>

            {/* Main Text Block 2 (Subtle text, professional voice) */}
            <p className="text-sm sm:text-base text-gray-400">
              We uphold the highest standard of verification. Our process involves reviewing third-party testing, analyzing
              primary research literature, and ensuring manufacturing integrity. **If it doesn't meet our rigorous standards, it doesn't make the cut.**
            </p>
          </div>

          {/* Credentials Section with separator */}
          <div className={`pt-10 border-t ${BORDER_COLOR}`}>
            <p className={`text-sm ${TEXT_MUTED} mb-4 uppercase tracking-[0.2em]`}>Key Credentials</p>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-center">
                {/* REVISED: Used a gray diamond for the bullet point */}
                <span className={`${TEXT_MUTED} mr-3 text-lg leading-none`}>♦</span> 
                PhD, Nutritional Biochemistry - **Stanford University**
              </li>
              <li className="flex items-center">
                {/* REVISED: Used a gray diamond for the bullet point */}
                <span className={`${TEXT_MUTED} mr-3 text-lg leading-none`}>♦</span> 
                Board Certified Nutrition Specialist (CNS)
              </li>
              <li className="flex items-center">
                {/* REVISED: Used a gray diamond for the bullet point */}
                <span className={`${TEXT_MUTED} mr-3 text-lg leading-none`}>♦</span> 
                Former Research Director, NIH Supplement Studies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

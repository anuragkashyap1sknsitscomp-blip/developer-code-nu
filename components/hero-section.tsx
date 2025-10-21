"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const FONT_TITLE = { fontFamily: "'DM Serif Display', serif" };
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


      {/* CATEGORY TILES SECTION */}
      <section
        id="featured"
        className="w-full bg-white text-black py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-gray-800"
      >

        <p className="text-gray-600 mb-12 text-base" style={FONT_SANS}>

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

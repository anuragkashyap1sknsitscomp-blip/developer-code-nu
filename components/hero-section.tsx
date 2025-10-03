"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const images = [
  "/images/bottle1.png",
  "/images/bottle2.png",
  "/images/bottle3.png",
  "/images/bottle1.png",
  "/images/bottle2.png",
  "/images/bottle3.png",
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fade-out effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY
        const opacity = Math.max(1 - scrollY / 800, 0)
        heroRef.current.style.opacity = opacity.toString()
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000) // 1.5s animation + 2.5s hold
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16 bg-black">
      <div ref={heroRef} className="relative w-full h-full min-h-screen flex flex-col lg:flex-row">
        {/* Left side - Text */}
        <div className="w-full lg:w-1/2 bg-black flex flex-col items-center justify-center px-8 py-20 lg:py-0 min-h-[50vh] lg:min-h-screen">
          <div className="max-w-xl text-center lg:text-left">
            <p className="text-white text-sm tracking-[0.3em] mb-6 font-light">CURATED EXCELLENCE</p>
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
              Supplements
              <br />
              Without
              <br />
              Compromise
            </h1>
          </div>
        </div>

        {/* Right side - Image Slideshow */}
        <div className="w-full lg:w-1/2 bg-black flex items-center justify-center px-8 py-20 lg:py-0 min-h-[50vh] lg:min-h-screen">
          <div className="relative w-full max-w-md aspect-square overflow-hidden">
            {images.map((src, index) => {
              const isActive = index === currentIndex
              return (
                <Image
                  key={index}
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className={`object-contain absolute inset-0 transition-all duration-[1500ms] ease-in-out
                    ${isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
                  `}
                  priority={index === 0}
                />
              )
            })}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce z-20">
        <span className="text-gray-400 text-xs tracking-widest font-light">SCROLL TO VIEW</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </section>
  )
}

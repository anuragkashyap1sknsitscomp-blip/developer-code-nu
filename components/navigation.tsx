"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

// Dropdown Content
const navItems = [
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "All Products", href: "/shop" },
      { label: "Best Sellers", href: "/shop?filter=bestsellers" },
      { label: "New Arrivals", href: "/shop?filter=new" },
      { label: "Bundles", href: "/shop?filter=bundles" },
      { label: "Subscriptions", href: "/shop?filter=subscriptions" },
    ],
  },
  {
    label: "Science",
    href: "/science",
    dropdown: [
      { label: "Research", href: "/science#research" },
      { label: "Clinical Studies", href: "/science#studies" },
      { label: "Ingredients", href: "/science#ingredients" },
      { label: "Quality Standards", href: "/science#quality" },
    ],
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/about#story" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "The Team", href: "/about#team" },
      { label: "Contact", href: "/about#contact" },
    ],
  },
]

// Custom Hook for delayed Mouse Leave
const useDelayedState = (initialValue: string | null, delay = 100) => {
  const [value, setValue] = useState(initialValue)
  const timerRef = useRef<number | null>(null)

  const setDelayedValue = (newValue: string | null) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    if (newValue === null) {
      timerRef.current = window.setTimeout(() => {
        setValue(newValue)
      }, delay)
    } else {
      setValue(newValue)
    }
  }

  return [value, setDelayedValue] as const
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useDelayedState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)

  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleMobileDropdownToggle = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label)
  }

  return (
    <>
      {/* Top Announcement Bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 text-white overflow-hidden"
        style={{
          background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)"
// 🔹 change this gradient easily
        }}
      >
        <div className="whitespace-nowrap flex animate-marquee text-base sm:text-lg font-semibold tracking-wide py-3">
          <span className="px-12">🚚 Free shipping on orders over $75</span>
          <span className="px-12">💯 365-Day Money Back Guarantee</span>
          <span className="px-12">🔥 Subscribe & Save 15%</span>
          {/* duplicate content for seamless loop */}
          <span className="px-12">🚚 Free shipping on orders over $75</span>
          <span className="px-12">💯 365-Day Money Back Guarantee</span>
          <span className="px-12">🔥 Subscribe & Save 15%</span>
        </div>
      </div>


      {/* Main Navigation Bar */}
      <nav
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? "bg-black/95 backdrop-blur-xl border-b border-white/10"
          : "bg-black/80 backdrop-blur-md"
          }`}
        style={{ top: "40px" }} // Adjusted for announcement bar height
      >
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-serif tracking-tight text-white hover:text-white/80 transition-colors"
          >
            Code Nutrition
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((navItem) => (
              <div
                key={navItem.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(navItem.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={navItem.href}
                  className="text-sm tracking-widest uppercase text-white/90 hover:text-white transition-colors flex items-center gap-1"
                >
                  {navItem.label}
                  <ChevronDown className="w-3 h-3" />
                </Link>
                {openDropdown === navItem.label && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-xl py-2 z-50">
                    {navItem.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-white/90 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative text-white/90 hover:text-white transition-colors" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-white/90 hover:text-white transition-colors z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 max-h-screen overflow-y-auto transition-all duration-300 ease-in-out">
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((navItem) => (
                <div key={navItem.label} className="border-b border-white/5 last:border-b-0">
                  <div
                    className="flex justify-between items-center py-3"
                    onClick={() => handleMobileDropdownToggle(navItem.label)}
                  >
                    <Link
                      href={navItem.href}
                      className="text-lg tracking-widest uppercase text-white hover:text-white/80 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {navItem.label}
                    </Link>
                    <button className="text-white/80 p-2" aria-expanded={openMobileDropdown === navItem.label}>
                      {openMobileDropdown === navItem.label ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openMobileDropdown === navItem.label ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0"
                      }`}
                  >
                    <div className="pl-4 pt-1 flex flex-col gap-1">
                      {navItem.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-sm text-white/70 hover:text-white transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </>
  )
}

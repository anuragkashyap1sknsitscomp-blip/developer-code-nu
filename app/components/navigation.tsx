"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ShoppingCart, Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

// Dropdown Content (No changes needed here)
const navItems = [
  {
    label: "Shop",
    href: "/shop",
    dropdown: [
      { label: "All Products", href: "/shop" },
      { label: "Best Sellers", href: "/bestsellers" },
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
      { label: "404", href: "/404" },
      { label: "FAQ", href: "/faq" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },

  {
    label: "About",
    href: "/about",
    dropdown: [
      { label: "Our Story", href: "/signup" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Journals / Blog", href: "/blog" },   // ✅ Corrected
      { label: "Contact", href: "/contact" },
    ],
  },

  {
    label: "Checkout",
    href: "/checkout/shipping",
    dropdown: [
      { label: "Shipping", href: "/checkout/shipping" },
      { label: "Payment", href: "/checkout/payment" },
      { label: "Order Confirmation", href: "/checkout/confirmation" },
    ],
  },
  {
  label: "Journal",
  href: "/journal",
  dropdown: [
    { label: "All Articles", href: "/journal" },
    { label: "Research Notes", href: "/journal?filter=research" },
  ],
}

];


// Custom Hook for delayed Mouse Leave (No changes needed here)
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
  // 1. Removed isScrolled state since the effect is no longer needed.
  // const [isScrolled, setIsScrolled] = useState(false) 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useDelayedState(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  )

  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  // 2. Removed the useEffect that handled the scroll behavior.
  /*
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  */

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const handleMobileDropdownToggle = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navigation Bar */}
      <nav
        // 3. Simplified the className to enforce a solid white background and a consistent shadow.
        // Removed: transition-all duration-300
        // Replaced conditional class with: bg-white shadow-md
        className="bg-white shadow-md"
      >
        <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between h-20">
          {/* ====== Left Section: Nav Links (Desktop) / Menu Icon (Mobile) ====== */}
          <div className="flex-1 flex justify-start">
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
                    className="text-sm font-bold tracking-widest uppercase text-gray-700 hover:text-black transition-colors flex items-center gap-1"
                  >
                    {navItem.label}
                    <ChevronDown className="w-3 h-3" />
                  </Link>
                  {openDropdown === navItem.label && (
                    <div className="absolute top-full left-0 mt-4 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 z-50">
                      {navItem.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
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

            {/* Mobile Menu Toggle Button */}
            <button
              className="md:hidden text-gray-800 hover:text-black transition-colors z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* ====== Center Section: Logo ====== */}
          <div className="flex-1 flex justify-center">
            <Link href="/" className="block shrink-0" onClick={closeMobileMenu}>
              <img
                src="/images/mainlogo.png" // Make sure you have a logo suitable for a white background
                alt="Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
          </div>

          {/* ====== Right Section: Cart Icon ====== */}
          <div className="flex-1 flex justify-end">
            <Link
              href="/cart"
              className="relative text-gray-800 hover:text-black transition-colors"
              aria-label="Cart"
              onClick={closeMobileMenu}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* ====== Mobile Menu ====== */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 absolute w-full left-0 shadow-lg">
            <div className="px-6 py-8 flex flex-col gap-2">
              {navItems.map((navItem) => (
                <div
                  key={navItem.label}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  <div
                    className="flex justify-between items-center py-3"
                    onClick={() => handleMobileDropdownToggle(navItem.label)}
                  >
                    <Link
                      href={navItem.href}
                      className="text-lg font-bold tracking-widest uppercase text-gray-800"
                      onClick={(e) => e.preventDefault()} // Prevent navigation to allow dropdown toggle
                    >
                      {navItem.label}
                    </Link>
                    <button
                      className="text-gray-600 p-2"
                      aria-expanded={openMobileDropdown === navItem.label}
                    >
                      {openMobileDropdown === navItem.label ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      openMobileDropdown === navItem.label
                        ? "max-h-96 opacity-100 pb-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 pt-1 flex flex-col gap-1">
                      {navItem.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-2 text-sm text-gray-600 hover:text-black transition-colors"
                          onClick={closeMobileMenu}
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
    </header>
  )
}

"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Facebook, Instagram, Twitter, Youtube, ChevronDown, ChevronUp } from "lucide-react"

// Define the navigation items for easy mapping and state management
const footerNavSections = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "#" },
      { label: "Essentials", href: "#" },
      { label: "Performance", href: "#" },
      { label: "Recovery", href: "#" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "The Science", href: "/science" },
      { label: "Testing Standards", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "#" },
      { label: "Careers", href: "#" },
      { label: "privacy-policy", href: "/privacy-policy" },
    ],
  },
]

// Component for a single collapsible section (used on mobile)
const CollapsibleSection = ({ title, links, isOpen, onToggle }) => {
  return (
    <div className="md:hidden border-b border-neutral-800 last:border-b-0">
      <button
        className="w-full flex justify-between items-center py-4 text-sm font-semibold tracking-widest uppercase text-gray-200 hover:text-white transition-colors"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100 pb-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-3 text-sm text-gray-400">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="hover:text-white transition-colors block">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const handleToggle = (title: string) => {
    setOpenSection(openSection === title ? null : title)
  }

  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-neutral-900 to-black text-white py-10 px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section - Unified Grid for Desktop, Stacked for Mobile */}
        <div className="mb-10">
          
          {/* ====== Desktop/Tablet Layout: 4-Column Grid (md:grid) ====== */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* 1. Brand Info (Desktop/Tablet) */}
            <div className="space-y-5">
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/images/logowhite.png"
                  alt="Code Nutrition Logo"
                  width={150}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>

              <p className="text-sm text-gray-400 leading-relaxed">
                Curated supplements backed by science, tested for purity, and selected for efficacy.
              </p>

              <div className="flex gap-5 mt-6">
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* 2. Shop, 3. Learn, 4. Company (Desktop/Tablet) */}
            {footerNavSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-200">
                  {section.title}
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ====== Mobile Layout: Stacked Brand Info + Collapsibles (hidden md:hidden) ====== */}
          <div className="md:hidden">
            {/* Brand Info (Mobile - always visible on top) */}
            <div className="space-y-4 pb-4">
              <Link href="/" className="inline-block mb-3">
                <Image
                  src="/images/logowhite.png"
                  alt="Code Nutrition Logo"
                  width={150}
                  height={60}
                  className="object-contain"
                  priority
                />
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Curated supplements backed by science, tested for purity, and selected for efficacy.
              </p>
              <div className="flex gap-5 pt-2">
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="Twitter">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-gray-200 transition-colors" aria-label="YouTube">
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="mt-4 border-t border-neutral-800">
                {/* Collapsible Navigation Sections (Mobile) */}
                {footerNavSections.map((section) => (
                    <CollapsibleSection
                        key={section.title}
                        title={section.title}
                        links={section.links}
                        isOpen={openSection === section.title}
                        onToggle={() => handleToggle(section.title)}
                    />
                ))}
            </div>
          </div>
        </div>

        {/* --- Bottom Section (Applies to all views) --- */}
        <div className="pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">© 2025 Code Nutrition. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

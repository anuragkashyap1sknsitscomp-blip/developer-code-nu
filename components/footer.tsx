"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-black via-neutral-900 to-black text-white py-16 px-6">
      <div className="max-w-screen-2xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
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
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-gray-200 transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-200">Shop</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">All Products</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Essentials</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Performance</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Recovery</Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-200">Learn</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/science" className="hover:text-white transition-colors">The Science</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Testing Standards</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold tracking-widest uppercase mb-6 text-gray-200">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Press</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
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

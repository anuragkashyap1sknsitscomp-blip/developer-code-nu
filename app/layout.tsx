import type React from "react"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { Toaster } from "@/components/ui/toaster"

const geistSans = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Code Nutrition - Premium Supplement Marketplace",
  description: "Curated supplements treated as art",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}>
      <body className="font-sans">
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

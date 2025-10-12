"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"

export function ProductHero() {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: "omega-3-elite",
      name: "Omega-3 Elite",
      price: 48,
      quantity: quantity,
      image: "/premium-omega-3-supplement-bottle-floating-with-dr.jpg",
      format: "60 softgels",
    })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-32 pb-16 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Product Image */}
        <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
          <img
            src="/premium-omega-3-supplement-bottle-floating-with-dr.jpg"
            alt="Omega-3 Elite"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6 lg:space-y-8 lg:sticky lg:top-32">
          {/* Header Block */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4">Essential Fatty Acids</p>
            <h1 className="font-serif text-5xl md:text-6xl mb-6 text-zinc-400">Omega-3 Elite</h1>
            <p className="text-xl text-zinc-500 leading-relaxed">
              Triple-strength fish oil with 2,000mg EPA/DHA per serving. Molecularly distilled for purity,
              third-party tested for heavy metals.
            </p>
          </div>

          {/* Price Block */}
          <div className="flex items-baseline gap-4">
            <span className="text-5xl font-serif text-zinc-400">${48}</span>
            <span className="text-zinc-600 text-lg">/ 60 softgels</span>
          </div>

          {/* Quantity & Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-6">
              <label className="text-sm tracking-widest uppercase text-zinc-600 whitespace-nowrap">Quantity</label>
              <div className="flex items-center gap-2">
                {/* Decrement */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10 border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-colors text-lg"
                >
                  −
                </Button>

                {/* Quantity Display */}
                <span className="w-12 text-center py-2 bg-zinc-900 rounded-lg text-white font-semibold border border-zinc-700">
                  {quantity}
                </span>

                {/* Increment */}
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10 border-zinc-700 bg-zinc-900 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-colors text-lg"
                >
                  +
                </Button>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              className="w-full h-14 text-sm tracking-widest uppercase bg-white text-black hover:bg-zinc-200 transition-colors font-bold"
              size="lg"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
          </div>

          {/* Features */}
          <div className="pt-8 border-t border-zinc-700 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-zinc-600">Third-Party Tested</span>
              <span className="text-white font-medium">✓ NSF Certified</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Bioavailability</span>
              <span className="text-white font-medium">Triglyceride Form</span>
            </div>
            <div className="flex justify-between">
              <span className="text-zinc-600">Sourcing</span>
              <span className="text-white font-medium">Wild-Caught Alaskan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useMemo } from "react"
import { useCart } from "@/contexts/cart-context"
import { useToast } from "@/hooks/use-toast"

// --- Product Data ---
const products = [
  {
    id: "1",
    name: "Omega-3 Elite",
    category: "Eat",
    description: "Triple-distilled fish oil with optimal EPA/DHA ratio",
    image: "/omega-3-capsules-transparent.png",
    price: 48,
    popularity: 80,
    isBestSeller: false,
  },
  {
    id: "2",
    name: "Magnesium Glycinate",
    category: "Sleep",
    description: "Highly bioavailable chelated magnesium for optimal absorption",
    image: "/magnesium-capsules-transparent.png",
    price: 32,
    popularity: 70,
    isBestSeller: true, // Best Seller 1
  },
  {
    id: "3",
    name: "Vitamin D3+K2",
    category: "Mind",
    description: "Synergistic combination for calcium metabolism",
    image: "/vitamin-d3-k2-supplement-bottle-on-black.png",
    price: 36,
    popularity: 85,
    isBestSeller: true, // Best Seller 2
  },
  {
    id: "4",
    name: "Probiotic Complex",
    category: "Move",
    description: "Multi-strain formula for balanced digestive and immune support",
    image: "/omega-3-capsules-transparent.png",
    price: 55,
    popularity: 90,
    isBestSeller: true, // Best Seller 3
  },
  {
    id: "5",
    name: "Creatine Monohydrate",
    category: "Move",
    description: "Micronized powder for strength, power, and muscle growth",
    image: "/magnesium-capsules-transparent.png",
    price: 25,
    popularity: 95,
    isBestSeller: false,
  },
  {
    id: "6",
    name: "B-Complex Ultra",
    category: "Eat",
    description: "Active B vitamins for cellular energy and neurological function",
    image: "/vitamin-d3-k2-supplement-bottle-on-black.png",
    price: 38,
    popularity: 75,
    isBestSeller: false,
  },
]

// --- Product Card Component (Reusable) ---
const ProductCard = ({ product, handleAddToCart, addedIds }) => {
  const isAdded = addedIds.includes(product.id)
  const isBestSeller = product.isBestSeller

  return (
    <div
      key={product.id}
      className="group relative block transition-colors duration-300 rounded-lg bg-zinc-900 hover:bg-zinc-950/70 border border-white/5 overflow-hidden" 
    >
      {/* Best Seller Ribbon (Green color, fully visible) */}
      {isBestSeller && (
        // Ribbon container. Positioned relative to the card, but the ribbon itself
        // is rotated and translated to appear from the top-left corner.
        <div className="absolute top-0 left-0 z-20 overflow-hidden w-28 h-28">
          <span
            className="absolute top-[20px] -left-[50px] w-[180px] text-center py-1 bg-green-500 text-white text-sm font-bold shadow-md transform -rotate-45"
            // The position (top and left) and width are adjusted for a prominent ribbon look
          >
            BEST SELLER
          </span>
        </div>
      )}
      
      <Link href={`/product/${product.id}`}>
        <div className="relative aspect-square rounded-t-lg"> 
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex justify-between items-center mb-1">
          <p className="text-xs tracking-widest uppercase text-white/50">
            {product.category}
          </p>
          <p className="text-xs text-white/60">Pop. {product.popularity}%</p>
        </div>

        <h3 className="text-xl font-serif mb-2 text-white group-hover:text-white/80 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-white/70 mb-4 h-10 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold text-white">${product.price}</p>

          {/* Add to Cart Button */}
          <button
            onClick={() => handleAddToCart(product)}
            disabled={isAdded}
            className={`px-4 py-2 text-sm rounded-md font-medium transition-all duration-300 ${
              isAdded
                ? "bg-green-500 text-white cursor-default"
                : "bg-black text-white hover:bg-gray-900"
            }`}
          >
            {isAdded ? "Added ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

// --- Best Sellers Section Component ---
const BestSellersSection = ({ handleAddToCart, addedIds }) => {
  // Filter products to only show those marked as best sellers
  const bestSellers = useMemo(
    () => products.filter((p) => p.isBestSeller),
    []
  )

  if (bestSellers.length === 0) {
    return (
      <div className="text-center py-20 bg-zinc-900 rounded-md">
        <h2 className="text-2xl text-white/80 font-serif mb-3">
          No Best Sellers available right now.
        </h2>
      </div>
    )
  }

  return (
    <div className="mb-20">
      <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 border-b border-white/10 pb-4">
        🏆 Our Best Sellers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {bestSellers.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            addedIds={addedIds}
          />
        ))}
      </div>
    </div>
  )
}

// --- Main Shop Page Component (Now focusing on Best Sellers) ---
export default function ShopPage() {
  const [addedIds, setAddedIds] = useState([])
  const { addToCart } = useCart()
  const { toast } = useToast()

  // Handle add to cart (with toast + visual feedback)
  const handleAddToCart = (product) => {
    if (addedIds.includes(product.id)) return
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })
    setAddedIds((prev) => [...prev, product.id])

    toast({
      title: "🛒 Added to cart",
      description: `${product.name} added successfully.`,
    })

    // Reset button state after 1.5 seconds
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== product.id))
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header */}
          <div className="mb-12 md:mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4">
              Code Nutrition
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight max-w-4xl">
              Our Bestselling Supplements.
            </h1>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Explore the supplements our community loves most. These are our
              most popular and highly-rated formulations.
            </p>
          </div>
          
          {/* --- Best Sellers Grid (Responsive) --- */}
          <BestSellersSection handleAddToCart={handleAddToCart} addedIds={addedIds} />
          {/* -------------------------------------- */}

          {/* --- See All Products Button (Smaller and stylish, centered at the bottom) --- */}
          <div className="text-center pt-12">
            <Link 
              href="/shop" // Change this to your "All Products" page path, e.g., "/shop"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 shadow-xl"
            >
              See All Products
              <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          {/* ----------------------------------------------------------------------------- */}

        </div>
      </div>

      <Footer />
    </main>
  )

}

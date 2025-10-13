"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useMemo } from "react"

// --- Product Data ---
const products = [
  {
    id: 1,
    name: "Omega-3 Elite",
    category: "Eat",
    description: "Triple-distilled fish oil with optimal EPA/DHA ratio",
    image: "/omega-3-capsules-transparent.png",
    price: 48,
    popularity: 80,
  },
  {
    id: 2,
    name: "Magnesium Glycinate",
    category: "Sleep",
    description: "Highly bioavailable chelated magnesium for optimal absorption",
    image: "/magnesium-capsules-transparent.png",
    price: 32,
    popularity: 70,
  },
  {
    id: 3,
    name: "Vitamin D3+K2",
    category: "Mind",
    description: "Synergistic combination for calcium metabolism",
    image: "/vitamin-d3-k2-supplement-bottle-on-black.png",
    price: 36,
    popularity: 85,
  },
  {
    id: 4,
    name: "Probiotic Complex",
    category: "Move",
    description: "Multi-strain formula for balanced digestive and immune support",
    image: "/omega-3-capsules-transparent.png",
    price: 55,
    popularity: 90,
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    category: "Move",
    description: "Micronized powder for strength, power, and muscle growth",
    image: "/magnesium-capsules-transparent.png",
    price: 25,
    popularity: 95,
  },
  {
    id: 6,
    name: "B-Complex Ultra",
    category: "Eat",
    description: "Active B vitamins for cellular energy and neurological function",
    image: "/vitamin-d3-k2-supplement-bottle-on-black.png",
    price: 38,
    popularity: 75,
  },
]

// --- Available Category Filters ---
const categories = ["All", "Eat", "Move", "Mind", "Sleep"]

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOption, setSortOption] = useState("default")
  const [activeCategory, setActiveCategory] = useState("All")

  // Filtering + sorting logic
  const filteredProducts = useMemo(() => {
    let currentProducts = products.filter((product) => {
      const matchesSearch =
        searchTerm.trim() === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory =
        activeCategory === "All" || product.category === activeCategory

      return matchesSearch && matchesCategory
    })

    let sortedProducts = [...currentProducts]

    if (sortOption === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price)
    } else if (sortOption === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price)
    } else if (sortOption === "popular") {
      sortedProducts.sort((a, b) => b.popularity - a.popularity)
    }

    return sortedProducts
  }, [searchTerm, sortOption, activeCategory])

  return (
    <main className="min-h-screen bg-black">
      <Navigation />

      <div className="pt-40 pb-32 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">
          {/* Header Section */}
          <div className="mb-12 md:mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4">
              Code Nutrition
            </p>
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight max-w-4xl">
              Elevate Your Routine. Shop All Products.
            </h1>
            <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
              Discover our full range of rigorously tested, science-backed
              supplements. Optimized for maximum bioavailability and performance.
            </p>
          </div>

          {/* Search + Sort */}
          <div className="flex flex-col md:flex-row gap-6 mb-10 md:justify-between">
            {/* Search */}
            <div className="relative w-full md:w-auto md:min-w-[300px] order-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 text-white bg-zinc-900 rounded-md focus:ring-1 focus:ring-white/70 focus:outline-none transition-colors"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Sort */}
            <div className="relative w-full md:w-auto md:min-w-[200px] order-2">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none w-full py-3 px-4 text-white bg-zinc-900 rounded-md focus:ring-1 focus:ring-white/70 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="default">Sort by: Default</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="popular">Most Popular</option>
              </select>
              <svg
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* ✅ Category Filter */}
          {/* Laptop/Tablet View — Horizontal Buttons */}
          <div className="hidden sm:flex gap-3 mb-12 overflow-x-auto scrollbar-hide flex-nowrap lg:flex-wrap lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full border text-sm font-semibold transition-all duration-300 whitespace-nowrap
                ${
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "border-white/30 text-white/70 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 📱 Mobile View — Dropdown */}
          <div className="sm:hidden relative mb-12">
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full py-3 px-4 bg-zinc-900 text-white rounded-md border border-white/30 focus:ring-1 focus:ring-white/70 appearance-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group block transition-colors duration-300 rounded-lg hover:bg-zinc-950/70"
                >
                  <div className="relative aspect-square mb-4 overflow-hidden bg-zinc-900 rounded-md">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-2">
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-xs tracking-widest uppercase text-white/50">
                        {product.category}
                      </p>
                      <p className="text-xs text-white/60">
                        Pop. {product.popularity}%
                      </p>
                    </div>

                    <h3 className="text-xl font-serif mb-2 text-white group-hover:text-white/80 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/70 mb-3 h-10 line-clamp-2">
                      {product.description}
                    </p>
                    <p className="text-xl font-semibold text-white">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-zinc-900 rounded-md">
              <h2 className="text-2xl text-white/80 font-serif mb-3">
                No products found 😔
              </h2>
              <p className="text-white/50">Try adjusting your filters or search.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

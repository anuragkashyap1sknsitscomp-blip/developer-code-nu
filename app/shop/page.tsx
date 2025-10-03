"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { useState, useMemo } from "react"

// --- Product Data ---
// Note: Price is now a number (no $ sign) which is required for correct numerical sorting.
const products = [
  {
    id: 1,
    name: "Omega-3 Elite",
    category: "Essential Fatty Acids",
    description: "Triple-distilled fish oil with optimal EPA/DHA ratio",
    image: "/omega-3-capsules-transparent.png",
    price: 48,
    popularity: 80,
  },
  {
    id: 2,
    name: "Magnesium Glycinate",
    category: "Sleep & Recovery",
    description: "Highly bioavailable chelated magnesium for optimal absorption",
    image: "/magnesium-capsules-transparent.png",
    price: 32,
    popularity: 70,
  },
  {
    id: 3,
    name: "Vitamin D3+K2",
    category: "Bone & Immune",
    description: "Synergistic combination for calcium metabolism",
    image: "/vitamin-d3-k2-supplement-bottle-on-black.png",
    price: 36,
    popularity: 85,
  },
  {
    id: 4,
    name: "Creatine Monohydrate",
    category: "Performance",
    description: "Micronized for enhanced solubility and absorption",
    image: "/magnesium-capsules-transparent.png",
    price: 42,
    popularity: 95,
  },
  {
    id: 5,
    name: "Zinc Picolinate",
    category: "Immune Support",
    description: "Superior absorption form for immune function",
    image: "/omega-3-capsules-transparent.png",
    price: 28,
    popularity: 60,
  },
  {
    id: 6,
    name: "B-Complex Elite",
    category: "Energy & Metabolism",
    description: "Methylated B vitamins for optimal bioavailability",
    image: "/vitamin-d3-k2-supplement-bottle-on-black.png",
    price: 38,
    popularity: 75,
  },
]

// The `allCategories` constant is removed as it is no longer used.

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  // The `activeCategory` state is removed.
  const [sortOption, setSortOption] = useState("default")

  // Use useMemo to filter + search + sort products efficiently
  const filteredProducts = useMemo(() => {
    // Start with a filtered list based on the search term.
    let currentProducts = products.filter(
        (product) => {
            if (searchTerm.trim() === "") return true; // Show all if search is empty

            const lowerCaseSearch = searchTerm.toLowerCase();
            return (
                product.name.toLowerCase().includes(lowerCaseSearch) ||
                product.description.toLowerCase().includes(lowerCaseSearch)
            );
        }
    );
    
    // Create a mutable copy for sorting
    let sortedProducts = [...currentProducts];

    // 2. Sorting Logic
    if (sortOption === "low-high") {
      sortedProducts.sort((a, b) => a.price - b.price)
    } else if (sortOption === "high-low") {
      sortedProducts.sort((a, b) => b.price - a.price)
    } else if (sortOption === "popular") {
      sortedProducts.sort((a, b) => b.popularity - a.popularity)
    }
    // "default" will maintain the order from the search filter.

    return sortedProducts
  }, [searchTerm, sortOption]) // Dependencies updated

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

          {/* --- Filter, Search & Sort Section (Updated) --- */}
          {/* Alignment changed to put search on the left and sort on the right for a cleaner look */}
          <div className="flex flex-col md:flex-row gap-6 mb-16 md:justify-between">
            
            {/* Search Input (Now aligned left, taking primary focus on mobile) */}
            <div className="relative w-full md:w-auto md:min-w-[300px] order-1">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 pl-12 pr-4 text-white bg-zinc-900 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none transition-colors border border-transparent hover:border-zinc-700"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Sort Dropdown (Now aligned right, placed second) */}
            <div className="relative w-full md:w-auto md:min-w-[200px] order-2">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="appearance-none w-full py-3 px-4 text-white bg-zinc-900 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none transition-colors border border-transparent hover:border-zinc-700 cursor-pointer"
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
          {/* --- End Filter, Search & Sort Section --- */}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group block transition-all duration-300 transform hover:-translate-y-1 p-5 rounded-xl bg-zinc-950 hover:shadow-xl hover:shadow-white/5"
                >
                  <div className="relative aspect-square mb-6 overflow-hidden bg-zinc-900 rounded-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Category and Popularity Detail */}
                  <div className="flex justify-between items-center mb-1">
                    <p className="text-xs tracking-widest uppercase text-white/50">
                      {product.category}
                    </p>
                    <p className="text-xs text-white/60">
                      Pop: {product.popularity}%
                    </p>
                  </div>
                  
                  <h3 className="text-xl font-serif mb-2 text-white group-hover:text-white/80 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-white/70 mb-4 h-10 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-white">
                    ${product.price}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-zinc-950 rounded-xl">
              <h2 className="text-2xl text-white/80 font-serif mb-3">No products found</h2>
              <p className="text-white/50">Try adjusting your search term.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
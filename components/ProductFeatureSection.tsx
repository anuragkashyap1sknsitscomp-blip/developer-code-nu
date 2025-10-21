"use client"
import React, { useState } from "react"
import { useCart } from "@/contexts/cart-context" // ✅ Cart context import

const FEATURED_PRODUCTS = [
  { id: 1, name: "Omega-3 Ultra Pure", price: 49.0, image: "images/bottle2.png", benefits: "Heart & Brain Health" },
  { id: 2, name: "Vegan Protein Powder", price: 59.99, image: "images/bottle1.png", benefits: "Muscle Recovery & Growth" },
  { id: 3, name: "Advanced Magnesium Complex", price: 22.5, image: "images/bottle3.png", benefits: "Relaxation & Sleep" },
  { id: 4, name: "Vitamin B12", price: 28.99, image: "images/vitamin12.png", benefits: "Hair, Skin, & Nails" },
  { id: 5, name: "Vitamink2", price: 39.5, image: "images/vitamink2.png", benefits: "Deep, Restful Sleep" },
  { id: 6, name: "Vitamin C", price: 32.0, image: "images/med1.png", benefits: "Vitamin Support" },
]

function ProductCard({ product }) {
  const [isAdded, setIsAdded] = useState(false)
  const { addToCart } = useCart() // ✅ Access cart context

  const handleAddToCart = () => {
    if (!isAdded) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2000)
    }
  }

  return (
    <div className="group flex-shrink-0 w-80 sm:w-72 md:w-auto bg-white border border-black rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* ✅ White background for image */}
      <div className="relative w-full aspect-square bg-white overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold text-black mb-1 truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 italic flex-grow">{product.benefits}</p>
        <div className="flex justify-between items-center mt-5 pt-5 border-t border-gray-300">
          <p className="text-lg font-semibold text-black">${product.price.toFixed(2)}</p>
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`px-4 py-2 text-sm font-semibold rounded-lg border border-black transition-all duration-300 ${
              isAdded
                ? "bg-black text-white"
                : "text-black bg-white hover:bg-black hover:text-white"
            }`}
          >
            {isAdded ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProductFeatureSection() {
  return (
    <section className="bg-white text-black pt-20 sm:pt-24 pb-0">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* ✅ Left Column */}
        <div className="md:sticky top-24 space-y-8">
          <p className="text-sm uppercase tracking-widest text-gray-500 border-b border-black pb-2 inline-block">
            Science First
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl font-extrabold leading-tight">
            Curated Essentials.
          </h2>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p className="border-l-4 border-black pl-6 italic">
              "Verified purity and maximum impact, guaranteed."
            </p>
            <p>
              Explore the core products that form a research-backed foundational routine.
            </p>
          </div>

          <a
            href="/shop"
            className="mt-6 inline-flex items-center justify-center px-8 py-3 text-base font-semibold rounded-lg border border-black text-black hover:bg-black hover:text-white transition-all"
          >
            See All Products →
          </a>
        </div>

        {/* ✅ Right Column */}
        <div className="flex overflow-x-auto md:overflow-visible gap-6 md:grid md:grid-cols-2 md:gap-8 scrollbar-hide scroll-smooth snap-x snap-mandatory">
          {FEATURED_PRODUCTS.map((product) => (
            <div key={product.id} className="snap-start">
              <ProductCard product={product} />
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

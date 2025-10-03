"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Omega-3 Elite",
    category: "Essential Fatty Acids",
    image: "images/bottle1.png",
    price: "$48",
  },
  {
    id: 2,
    name: "Magnesium Glycinate",
    category: "Sleep & Recovery",
    image: "images/bottle3.png",
    price: "$32",
  },
  {
    id: 3,
    name: "Vitamin D3+K2",
    category: "Bone & Immune",
    image: "images/bottle2.png",
    price: "$36",
  },
]

export function FeaturedProducts() {
  return (
    <section className="relative w-full py-32 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-serif text-5xl md:text-7xl">
            Featured
            <br />
            Collection
          </h2>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-2 text-sm tracking-widest uppercase hover:text-muted-foreground transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group cursor-pointer">
              <div className="relative aspect-square mb-6 overflow-hidden bg-surface rounded-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{product.category}</p>
              <h3 className="text-2xl font-serif mb-2 text-foreground group-hover:text-muted-foreground transition-colors">
                {product.name}
              </h3>
              <p className="text-lg font-medium text-foreground">{product.price}</p>
            </Link>
          ))}
        </div>

        <Link
          href="/shop"
          className="md:hidden flex items-center justify-center gap-2 text-sm tracking-widest uppercase hover:text-muted-foreground transition-colors group mt-12"
        >
          View All
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  )
}

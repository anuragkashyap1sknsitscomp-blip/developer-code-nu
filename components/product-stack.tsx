import Link from "next/link"

const complementaryProducts = [
  {
    id: 2,
    name: "Vitamin D3+K2",
    reason: "Enhances omega-3 absorption and supports cardiovascular health",
    image: "/vitamin-d3-k2-supplement-bottle-on-black-backgroun.jpg",
    price: "$36",
  },
  {
    id: 3,
    name: "Magnesium Glycinate",
    reason: "Supports omega-3 metabolism and reduces inflammation",
    image: "/vitamin-d3-k2-supplement-bottle-on-black-backgroun.jpg",
    price: "$32",
  },
]

export function ProductStack() {
  return (
    // Section Background: Darker than pure black for depth
    <section className="relative w-full py-32 px-6 bg-zinc-950 text-white">
      <div className="max-w-screen-xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-white">Complete Your Stack</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            These supplements work synergistically with Omega-3 Elite to maximize absorption and enhance overall
            benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {complementaryProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              // Card Background: Zinc-900 (slightly lighter) for card elevation
              // Hover Effect: Subtle ring and shadow
              className="group bg-zinc-900 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-white/5 hover:ring-2 hover:ring-white/10"
            >
              <div className="relative aspect-square overflow-hidden bg-black/50">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  // Image Hover: Maintained for dynamic effect
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                {/* Product Name */}
                <h3 className="font-serif text-2xl mb-3 text-white group-hover:text-zinc-200 transition-colors">
                  {product.name}
                </h3>
                {/* Reason/Description: Muted Text */}
                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">{product.reason}</p>
                {/* Price */}
                <p className="text-xl font-bold text-white">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
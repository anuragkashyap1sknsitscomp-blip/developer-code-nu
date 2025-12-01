"use client"

import { useState } from "react"
import { ChevronDown, Zap, Star, Leaf } from "lucide-react" // Added icons for certification

const ingredients = [
  {
    name: "EPA (Eicosapentaenoic Acid)",
    amount: "1400mg",
    dv: "*",
    benefits: "Supports cardiovascular health, reduces inflammation, promotes brain function",
    research: "200+ clinical studies available for review",
  },
  {
    name: "DHA (Docosahexaenoic Acid)",
    amount: "600mg",
    dv: "*",
    benefits: "Essential for brain health, eye health, and nervous system function, especially in cell membranes",
    research: "150+ clinical studies available for review",
  },
  {
    name: "Other Omega-3 Fatty Acids",
    amount: "200mg",
    dv: "*",
    benefits: "Additional naturally occurring omega-3s including ALA and DPA for comprehensive support",
    research: "Emerging research supports synergistic benefits",
  },
]

export function NutritionLabel() {
  const [expandedIngredient, setExpandedIngredient] = useState<string | null>(null)

  return (
    // Section Background: Pure Black for maximum contrast with the label
    <section className="relative w-full py-32 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto">
        
        <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center text-white">Supplement Facts</h2>

        {/* Nutrition Label Box - High Contrast, Premium Border */}
        <div className="bg-zinc-950 border-4 border-white shadow-2xl shadow-zinc-800/50 p-6 md:p-10">
          
          {/* Header */}
          <div className="border-b-8 border-white pb-3 mb-4">
            <h3 className="font-serif text-4xl text-white font-extrabold">Supplement Facts</h3>
          </div>

          {/* Serving Info */}
          <div className="border-b-4 border-white py-3 text-sm text-zinc-300">
            <p className="flex justify-between font-medium">
                <span>Serving Size</span> 
                <span>2 Softgels</span>
            </p>
            <p className="flex justify-between">
                <span>Servings Per Container</span> 
                <span>30</span>
            </p>
          </div>

          {/* Amount Header */}
          <div className="border-b-4 border-white py-4">
            <div className="flex justify-between text-base font-bold text-white uppercase">
              <span>Amount Per Serving</span>
              <span>% Daily Value</span>
            </div>
          </div>

          {/* Ingredients List (Accordion) */}
          <div className="space-y-1">
            {ingredients.map((ingredient) => (
              // Enhanced border for a cleaner separation
              <div key={ingredient.name} className="border-b border-zinc-700 last:border-b-0">
                <button
                  onClick={() => setExpandedIngredient(expandedIngredient === ingredient.name ? null : ingredient.name)}
                  // Hover Effect: Clearer feedback with background change
                  className="w-full py-4 flex items-center justify-between transition-colors text-white text-lg hover:bg-zinc-900"
                >
                  {/* Ingredient Name - Slightly indented and strong */}
                  <span className="text-left font-medium pl-2">{ingredient.name}</span>
                  
                  <div className="flex items-center gap-4">
                    {/* Amount - Bolded for data emphasis */}
                    <span className="font-extrabold text-white text-lg">{ingredient.amount}</span>
                    {/* DV - Muted slightly */}
                    <span className="text-zinc-400 w-8 text-right">{ingredient.dv}</span>
                    
                    {/* Chevron Icon - Visual feedback */}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ml-2 ${
                        expandedIngredient === ingredient.name ? "rotate-180 text-zinc-400" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedIngredient === ingredient.name && (
                  // Expanded background changed for clear sectioning
                  <div className="px-6 py-4 space-y-4 text-sm text-zinc-300 bg-zinc-900 border-l-4 border-white/50">
                    <div>
                      <p className="text-white font-semibold mb-1 uppercase tracking-wider">Benefits</p>
                      <p>{ingredient.benefits}</p>
                    </div>
                    <div>
                      <p className="text-white font-semibold mb-1 uppercase tracking-wider">Research Summary</p>
                      <p className="text-xs italic">{ingredient.research}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Notes */}
          <div className="pt-6 text-xs text-zinc-400 border-t border-white mt-4">
            <p className="mb-3">* Daily Value not established.</p>
            <p className="leading-relaxed">
              <strong className="text-white">Other Ingredients:</strong> Fish oil (from anchovies and sardines, purified), softgel
              capsule (fish gelatin, glycerin, purified water), natural mixed tocopherols (antioxidant).
            </p>
          </div>
        </div>
        
        {/* Certifications Block - Enhanced Design */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          
          {/* NSF Certification */}
          <div className="p-8 bg-zinc-900 rounded-xl border border-zinc-700 shadow-lg transition-transform hover:scale-[1.02]">
            <Zap className="w-8 h-8 mx-auto mb-3 text-white" /> {/* Icon added */}
            <p className="text-2xl font-serif mb-1 text-white">NSF Certified</p>
            <p className="text-sm text-zinc-400">Trusted for Purity & Sport</p>
          </div>
          
          {/* IFOS Certification */}
          <div className="p-8 bg-zinc-900 rounded-xl border border-zinc-700 shadow-lg transition-transform hover:scale-[1.02]">
            <Star className="w-8 h-8 mx-auto mb-3 text-white" /> {/* Icon added */}
            <p className="text-2xl font-serif mb-1 text-white">IFOS 5-Star</p>
            <p className="text-sm text-zinc-400">Highest Quality Rating</p>
          </div>
          
          {/* MSC Certification */}
          <div className="p-8 bg-zinc-900 rounded-xl border border-zinc-700 shadow-lg transition-transform hover:scale-[1.02]">
            <Leaf className="w-8 h-8 mx-auto mb-3 text-white" /> {/* Icon added */}
            <p className="text-2xl font-serif mb-1 text-white">MSC Certified</p>
            <p className="text-sm text-zinc-400">Sustainable Sourcing</p>
          </div>
        </div>
      </div>
    </section>
  )
}
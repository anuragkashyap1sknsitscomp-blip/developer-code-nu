"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const SCIENCE_IMAGES = {
  HERO: "/images/code-nutrition main.jpeg",
  FORMULATION: "https://img.freepik.com/free-photo/scientist-analyzing-dna-sample-lab_23-2148978473.jpg",
  BIOAVAILABILITY: "https://img.freepik.com/free-photo/omega-3-capsules-fish-oil_144627-25971.jpg",
  TESTING: "https://img.freepik.com/free-photo/chemist-lab-analyzing-samples_23-2148962454.jpg",
  SYNERGY: "https://img.freepik.com/free-photo/colorful-capsules-supplements_23-2148351923.jpg",
}

export default function SciencePage() {
  return (
    <main className="min-h-screen bg-black text-white pt-20">
      {/* Navigation - if your Navigation is fixed, pt-20 gives space so hero won't be hidden */}
      <Navigation />

      {/* HERO */}
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        {/* Background image (absolute so overlays sit above it) */}
        <img
          src={SCIENCE_IMAGES.HERO}
          alt="Curated Excellence - Supplements Without Compromise"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlay: dark on left, lighter to the right (so text reads well) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />

        {/* Centered heading */}
        <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
          <h1 className="font-serif text-[2.4rem] sm:text-[3.5rem] md:text-[4.75rem] lg:text-[6rem] leading-[0.95] text-center max-w-6xl">
           
          </h1>
        </div>

        {/* Optional subtle bottom fade so next section doesn't jump */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent z-30 pointer-events-none" />
      </section>

      {/* MAIN CONTENT */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Evidence-Based Formulation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-white">Evidence-Based Formulation</h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Every ingredient in our formulations is backed by peer-reviewed research and clinical studies. 
                We don’t follow trends—we follow science. 
                Our team of researchers and nutritionists continuously review the latest literature to ensure measurable results.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg shadow-black/50 h-64 md:h-96">
              <img src={SCIENCE_IMAGES.FORMULATION} alt="Formulation" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Bioavailability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg shadow-black/50 h-64 md:h-96 order-2 md:order-1">
              <img src={SCIENCE_IMAGES.BIOAVAILABILITY} alt="Bioavailability" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="font-serif text-3xl md:text-4xl text-white">Bioavailability Optimization</h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                A supplement is only as good as your body’s ability to absorb it. 
                We use chelated minerals, methylated vitamins, and liposomal delivery systems to maximize absorption.
              </p>
            </div>
          </div>

          {/* Third-Party Testing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl text-white">Third-Party Testing</h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Every batch undergoes rigorous third-party testing for purity, potency, and contaminants.
                Certificates of Analysis (CoA) are available for complete transparency.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg shadow-black/50 h-64 md:h-96">
              <img src={SCIENCE_IMAGES.TESTING} alt="Third-Party Testing" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          {/* Synergistic Combinations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg shadow-black/50 h-64 md:h-96 order-2 md:order-1">
              <img src={SCIENCE_IMAGES.SYNERGY} alt="Synergistic Combinations" className="w-full h-full object-cover object-center" />
            </div>
            <div className="space-y-4 order-1 md:order-2">
              <h2 className="font-serif text-3xl md:text-4xl text-white">Synergistic Combinations</h2>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Our formulations consider nutrient interactions and synergies. Vitamin D3 is paired with K2 for 
                optimal calcium metabolism. Magnesium is provided as glycinate for superior absorption.
              </p>
            </div>
          </div>
        </div>

        {/* Research & Standards */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-900/10 border border-cyan-500/30">
            <h3 className="text-2xl font-serif text-white mb-4">Our Research Partners</h3>
            <p className="text-white/80 leading-relaxed">
              We collaborate with global universities and labs to validate our formulations. 
              Our research network ensures continuous innovation in nutritional science.
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-900/10 border border-purple-500/30">
            <h3 className="text-2xl font-serif text-white mb-4">Our Standards</h3>
            <p className="text-white/80 leading-relaxed">
              All supplements are manufactured in GMP-certified facilities, adhering to the highest 
              pharmaceutical-grade standards.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

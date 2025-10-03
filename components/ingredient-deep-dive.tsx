export function IngredientDeepDive() {
  return (
    // Section Background: Use bg-zinc-950 for contrast with black background of other sections
    <section className="relative w-full py-32 bg-zinc-950 text-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        
        <h2 className="font-serif text-4xl md:text-5xl mb-24 text-center text-white">From Ocean to Capsule: Our Process</h2>

        <div className="space-y-32">
          
          {/* 1. Wild-Caught Sourcing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl shadow-black/50">
              <img
                src="/wild-alaskan-fish-swimming-in-pristine-ocean-water.jpg"
                alt="Wild-Caught Alaskan Fish"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              {/* Step Tag: High contrast tag */}
              <div className="inline-block px-5 py-2 bg-white/10 text-white rounded-full text-xs tracking-widest uppercase font-bold">
                Step 01
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white">Wild-Caught in Alaska</h3>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Our omega-3s come exclusively from **wild-caught anchovies and sardines** harvested in the pristine waters
                of Alaska. These small fish are naturally low in the food chain, resulting in minimal environmental contaminants.
              </p>
              
              {/* Feature List */}
              <ul className="space-y-3 text-zinc-300 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-xl leading-none -mt-1">✓</span>
                  <span>**MSC-certified** sustainable fishing practices.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-xl leading-none -mt-1">✓</span>
                  <span>Harvested within **24 hours of processing** to ensure maximum freshness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-xl leading-none -mt-1">✓</span>
                  <span>**100% Traceable** back to specific fishing vessels.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Molecular Distillation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Content (Order 1 on desktop) */}
            <div className="order-2 lg:order-1 space-y-6">
              {/* Step Tag */}
              <div className="inline-block px-5 py-2 bg-white/10 text-white rounded-full text-xs tracking-widest uppercase font-bold">
                Step 02
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white">Molecular Distillation</h3>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Advanced **molecular distillation** removes heavy metals, PCBs, and other environmental contaminants 
                while preserving the delicate omega-3 fatty acids. This process ensures **pharmaceutical-grade purity**.
              </p>
              
              {/* Stats Grid - Enhanced contrast and border accent */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-6 pt-6">
                <div className="p-4 bg-zinc-900 rounded-lg border-l-4 border-white/50">
                  <p className="text-3xl font-serif mb-1 font-bold">{"<"}0.01ppm</p>
                  <p className="text-sm text-zinc-400">Mercury Level</p>
                </div>
                <div className="p-4 bg-zinc-900 rounded-lg border-l-4 border-white/50">
                  <p className="text-3xl font-serif mb-1 font-bold">{"<"}0.09ppm</p>
                  <p className="text-sm text-zinc-400">PCB Level</p>
                </div>
              </div>
            </div>
            
            {/* Image (Order 2 on desktop) */}
            <div className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl shadow-black/50">
              <img
                src="/scientific-molecular-distillation-equipment-with-g.jpg"
                alt="Molecular Distillation Process"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* 3. Third-Party Testing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-2xl shadow-black/50">
              <img
                src="/laboratory-scientist-testing-fish-oil-samples-with.jpg"
                alt="Third-Party Testing"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-6">
              {/* Step Tag */}
              <div className="inline-block px-5 py-2 bg-white/10 text-white rounded-full text-xs tracking-widest uppercase font-bold">
                Step 03
              </div>
              <h3 className="font-serif text-3xl md:text-4xl text-white">Independent Verification</h3>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Every batch undergoes rigorous **third-party testing** by NSF International and IFOS (International Fish Oil
                Standards). We ensure that every softgel not only meets but dramatically **exceeds** global purity standards.
              </p>
              
              {/* Feature List */}
              <ul className="space-y-3 text-zinc-300 pt-4">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-xl leading-none -mt-1">✓</span>
                  <span>Tested for **250+ potential contaminants** and heavy metals.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-xl leading-none -mt-1">✓</span>
                  <span>**Verified concentration** of EPA/DHA and freshness (oxidation levels).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold text-xl leading-none -mt-1">✓</span>
                  <span>Certificates of analysis are **available upon request** for full transparency.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
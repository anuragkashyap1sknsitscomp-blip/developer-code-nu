"use client"

export function CuratorSection() {
  // Define colors for the light theme consistency
  const BG_LIGHT = "bg-white"; 
  const TEXT_PRIMARY = "text-gray-900";
  const TEXT_MUTED = "text-gray-500";
  const TEXT_SUBTLE_ACCENT = "text-blue-600"; // Accent color for light theme
  const BORDER_COLOR = "border-gray-200";
  
  return (
    // UPDATED: Uses bg-white, and pt-0 to remove top margin/padding
    <section className={`relative w-full ${BG_LIGHT} ${TEXT_PRIMARY} pt-0 pb-16 px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Image Column */}
        <div 
          // UPDATED: Reduced shadow for a light theme look. Reduced rounded-lg to rounded-md.
          className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[3/4] overflow-hidden rounded-md 
                     shadow-xl border border-gray-100 
                     transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl"
        >
          <img
            src="/professional-portrait-of-nutrition-scientist-in-la.jpg"
            alt="Dr. Sarah Chen, Chief Curator"
            className="w-full h-full object-cover object-top" 
          />
        </div>

        {/* Content Column */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Header */}
          <p className={`text-sm tracking-[0.3em] uppercase ${TEXT_MUTED} font-medium pb-1 border-b ${BORDER_COLOR} inline-block`}>
            Chief Scientific Officer
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight">
            Meet Dr. Sarah Chen
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed pt-2">
            
            {/* Quote Section with light styling */}
            {/* UPDATED: Text is darker, border color is blue accent */}
            <p className={`text-lg sm:text-xl font-light italic ${TEXT_PRIMARY} border-l-4 border-blue-500 pl-4 sm:pl-6 py-1`}>
              "Our mission is to **cut through the noise** of the supplement industry, ensuring every product is backed by rigorous science and proof."
            </p>

            {/* Main Text Block 1 (REDUCED TEXT) */}
            <p className="text-base sm:text-lg">
              With over **15 years in nutritional biochemistry** and a **PhD from Stanford**, I personally vet every product for
              efficacy, purity, and bioavailability. We believe in science, not speculation.
            </p>

            {/* Main Text Block 2 (REDUCED TEXT) */}
            <p className="text-sm sm:text-base ${TEXT_MUTED}">
              Our verification process is non-negotiable: reviewing third-party testing, analyzing primary research literature, and ensuring manufacturing integrity. **If it doesn't meet our rigorous standards, it doesn't make the cut.**
            </p>
          </div>

          {/* Credentials Section with separator */}
          <div className={`pt-8 border-t ${BORDER_COLOR}`}>
            <p className={`text-sm ${TEXT_MUTED} mb-4 uppercase tracking-[0.2em]`}>Key Credentials</p>
            <ul className="space-y-3 text-sm ${TEXT_PRIMARY}">
              <li className="flex items-center">
                {/* UPDATED: Used a blue diamond for a modern accent */}
                <span className={`${TEXT_SUBTLE_ACCENT} mr-3 text-lg leading-none`}>♦</span> 
                PhD, Nutritional Biochemistry - **Stanford University**
              </li>
              <li className="flex items-center">
                {/* UPDATED: Used a blue diamond for a modern accent */}
                <span className={`${TEXT_SUBTLE_ACCENT} mr-3 text-lg leading-none`}>♦</span> 
                Board Certified Nutrition Specialist (CNS)
              </li>
              <li className="flex items-center">
                {/* UPDATED: Used a blue diamond for a modern accent */}
                <span className={`${TEXT_SUBTLE_ACCENT} mr-3 text-lg leading-none`}>♦</span> 
                Former Research Director, NIH Supplement Studies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

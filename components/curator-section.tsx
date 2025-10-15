export function CuratorSection() {
  // Define colors for the monochrome dark theme consistency
  // UPDATED: Changed background color to pure black (bg-black)
  const BG_DARK = "bg-black"; 
  const TEXT_MUTED = "text-gray-400";
  const TEXT_SUBTLE_ACCENT = "text-gray-200"; // Used for small accents
  const BORDER_COLOR = "border-gray-700";
  
  return (
    // UPDATED: Uses bg-black and vertical padding reduced from py-28/py-36 to py-16
    <section className={`relative w-full ${BG_DARK} text-white py-16 px-6`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Image Column */}
        <div 
          // UPDATED: Border radius reduced from rounded-xl to rounded-lg
          className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg 
                    /* Subtle shadow for lift */
                    shadow-[0_10px_30px_rgba(0,0,0,0.5),_0_0_15px_rgba(255,255,255,0.05)] 
                    transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),_0_0_25px_rgba(255,255,255,0.1)]"
        >
          <img
            src="/professional-portrait-of-nutrition-scientist-in-la.jpg"
            alt="Dr. Sarah Chen, Chief Curator"
            className="w-full h-full object-cover object-top" 
          />
        </div>

        {/* Content Column */}
        <div className="space-y-8 sm:space-y-10">
          
          {/* Header */}
          <p className={`text-sm tracking-[0.3em] uppercase ${TEXT_SUBTLE_ACCENT} font-medium pb-2 border-b ${BORDER_COLOR} inline-block`}>
            Chief Scientific Officer
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Meet Dr. Sarah Chen
          </h2>

          <div className="space-y-8 text-gray-300 leading-relaxed pt-2">
            
            {/* Quote Section with monochrome styling */}
            <p className={`text-xl sm:text-2xl font-light italic text-white/90 border-l-4 border-gray-500 pl-4 sm:pl-6 py-1`}>
              "Our mission is to **cut through the noise** of the supplement industry. Too many products make bold claims
              without the science to back them up."
            </p>

            {/* Main Text Block 1 */}
            <p className="text-base sm:text-lg">
              With over **15 years in nutritional biochemistry** and a **PhD from Stanford**, I've dedicated my career to
              identifying supplements that actually work. Every product in our collection has been personally vetted for
              efficacy, purity, and bioavailability.
            </p>

            {/* Main Text Block 2 (Subtle text, professional voice) */}
            <p className="text-sm sm:text-base text-gray-400">
              We uphold the highest standard of verification. Our process involves reviewing third-party testing, analyzing
              primary research literature, and ensuring manufacturing integrity. **If it doesn't meet our rigorous standards, it doesn't make the cut.**
            </p>
          </div>

          {/* Credentials Section with separator */}
          <div className={`pt-10 border-t ${BORDER_COLOR}`}>
            <p className={`text-sm ${TEXT_MUTED} mb-4 uppercase tracking-[0.2em]`}>Key Credentials</p>
            <ul className="space-y-3 text-sm text-gray-200">
              <li className="flex items-center">
                {/* REVISED: Used a gray diamond for the bullet point */}
                <span className={`${TEXT_MUTED} mr-3 text-lg leading-none`}>♦</span> 
                PhD, Nutritional Biochemistry - **Stanford University**
              </li>
              <li className="flex items-center">
                {/* REVISED: Used a gray diamond for the bullet point */}
                <span className={`${TEXT_MUTED} mr-3 text-lg leading-none`}>♦</span> 
                Board Certified Nutrition Specialist (CNS)
              </li>
              <li className="flex items-center">
                {/* REVISED: Used a gray diamond for the bullet point */}
                <span className={`${TEXT_MUTED} mr-3 text-lg leading-none`}>♦</span> 
                Former Research Director, NIH Supplement Studies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

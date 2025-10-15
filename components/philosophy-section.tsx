export function PhilosophySection() {
  // Define colors for the dark theme, using pure black for background
  const BG_DARK = "bg-black"; // Changed to pure black
  const TEXT_HIGHLIGHT = "text-white";
  const TEXT_MUTED = "text-gray-400";
  const TEXT_ACCENT = "text-gray-200"; 

  return (
    // UPDATED: Padding reduced from py-28/py-36 to py-16 to eliminate excessive top/bottom margins.
    <section className={`relative w-full ${BG_DARK} ${TEXT_HIGHLIGHT} py-16 px-6`}> 
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Sub-Header for Context */}
        <p className={`text-sm tracking-[0.3em] uppercase ${TEXT_MUTED} font-medium mb-4`}>
          Our Commitment to Excellence
        </p>

        {/* Title - Bold and responsive */}
        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold mb-10 sm:mb-12">
          Our Rigorous Curation Process
        </h2>

        {/* Introduction Text - Subtle and informative */}
        <p className={`text-lg md:text-xl ${TEXT_MUTED} leading-relaxed mb-16 max-w-3xl mx-auto`}>
          Every supplement in our collection undergoes rigorous evaluation. We scrutinize **bioavailability,** ensure **third-party testing,** verify **ingredient sourcing,** and uphold the highest **manufacturing standards.** Only the truly exceptional make it through.
        </p>

        {/* Three-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16">
          
          {/* Step 01 */}
          <div className="space-y-4 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700 hover:bg-[#111]">
            <div 
              // Styling for the Step Number Circle
              className={`w-16 h-16 mx-auto rounded-full bg-gray-900 flex items-center justify-center 
                          text-3xl font-bold ${TEXT_ACCENT} shadow-[0_0_15px_rgba(255,255,255,0.08)]`}>
              01
            </div>
            <h3 className="text-2xl font-serif font-semibold pt-2 text-white">Scientific Backing</h3>
            <p className={`text-base ${TEXT_MUTED} leading-relaxed max-w-xs mx-auto`}>
              We require **peer-reviewed research** and clinical studies to validate every single ingredient and formulation.
            </p>
          </div>

          {/* Step 02 */}
          <div className="space-y-4 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700 hover:bg-[#111]">
            <div 
              // Styling for the Step Number Circle
              className={`w-16 h-16 mx-auto rounded-full bg-gray-900 flex items-center justify-center 
                          text-3xl font-bold ${TEXT_ACCENT} shadow-[0_0_15px_rgba(255,255,255,0.08)]`}>
              02
            </div>
            <h3 className="text-2xl font-serif font-semibold pt-2 text-white">Third-Party Tested</h3>
            <p className={`text-base ${TEXT_MUTED} leading-relaxed max-w-xs mx-auto`}>
              **Independent laboratory verification** ensures purity, accurate dosage, and freedom from contaminants.
            </p>
          </div>

          {/* Step 03 */}
          <div className="space-y-4 p-6 rounded-lg transition-all duration-300 border border-transparent hover:border-gray-700 hover:bg-[#111]">
            <div 
              // Styling for the Step Number Circle
              className={`w-16 h-16 mx-auto rounded-full bg-gray-900 flex items-center justify-center 
                          text-3xl font-bold ${TEXT_ACCENT} shadow-[0_0_15px_rgba(255,255,255,0.08)]`}>
              03
            </div>
            <h3 className="text-2xl font-serif font-semibold pt-2 text-white">Premium Sourcing</h3>
            <p className={`text-base ${TEXT_MUTED} leading-relaxed max-w-xs mx-auto`}>
              We trace ingredients back to **sustainable, ethical suppliers** to guarantee maximum bioavailability and quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

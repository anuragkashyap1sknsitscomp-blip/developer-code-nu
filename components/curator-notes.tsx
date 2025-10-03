export function CuratorNotes() {
  return (
    // Section Background: Use a dark shade (zinc-950) for contrast with black sections
    <section className="relative w-full py-32 px-6 bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Curator's Notes Tag */}
        <p className="text-xs tracking-[0.3em] uppercase text-zinc-500 mb-8 text-center">Curator's Notes</p>

        {/* Heading */}
        <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center text-balance text-white">Why This Made The Cut</h2>

        {/* Main Content Block - Text colors adjusted for readability on dark background */}
        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <p className="text-lg">
            After testing over 40 fish oil supplements, this is the only one that met all our criteria: **triglyceride
            form** for superior absorption, **third-party testing** for purity, **sustainable sourcing**, and therapeutic dosing.
          </p>

          <p>
            Most fish oils on the market use the cheaper ethyl ester form, which has significantly lower
            bioavailability. This formula uses the natural **triglyceride form**—the same molecular structure found in
            fish—resulting in up to **70% better absorption**.
          </p>

          <p>
            The **molecular distillation** process removes environmental contaminants while preserving the delicate omega-3
            fatty acids. Independent testing confirms undetectable levels of **mercury, PCBs, and dioxins**.
          </p>
        </div>

        {/* Curator's Profile - Clean separator and professional font styles */}
        <div className="mt-16 pt-12 border-t border-zinc-700 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src="/professional-headshot-of-dr-sarah-chen-in-lab-coat.jpg"
            alt="Dr. Sarah Chen"
            className="w-20 h-20 rounded-full object-cover border-2 border-white/10"
          />
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl mb-1 text-white font-medium">Dr. Sarah Chen</p>
            <p className="text-sm text-zinc-400">Chief Curator, Code Nutrition</p>
          </div>
        </div>
      </div>
    </section>
  )
}
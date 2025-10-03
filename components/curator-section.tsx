export function CuratorSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center py-32 px-6">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-square lg:aspect-[3/4] overflow-hidden rounded-lg">
          <img
            src="/professional-portrait-of-nutrition-scientist-in-la.jpg"
            alt="Dr. Sarah Chen, Chief Curator"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-8">
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Meet the Curator</p>

          <h2 className="font-serif text-5xl md:text-6xl">Dr. Sarah Chen</h2>

          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p className="text-lg">
              "Our mission is to cut through the noise of the supplement industry. Too many products make bold claims
              without the science to back them up."
            </p>

            <p>
              With over 15 years in nutritional biochemistry and a PhD from Stanford, I've dedicated my career to
              identifying supplements that actually work. Every product in our collection has been personally vetted for
              efficacy, purity, and bioavailability.
            </p>

            <p>
              We don't just look at labels—we examine manufacturing processes, review third-party testing, and analyze
              the research. If it doesn't meet our standards, it doesn't make the cut.
            </p>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">Credentials</p>
            <ul className="space-y-2 text-sm">
              <li>PhD, Nutritional Biochemistry - Stanford University</li>
              <li>Board Certified Nutrition Specialist (CNS)</li>
              <li>Former Research Director, NIH Supplement Studies</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

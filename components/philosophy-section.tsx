export function PhilosophySection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-7xl mb-12 text-balance">Our Curation Process</h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 text-pretty">
          Every supplement in our collection undergoes rigorous evaluation. We examine bioavailability, third-party
          testing, ingredient sourcing, and manufacturing standards. Only the exceptional make it through.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-surface-elevated flex items-center justify-center text-2xl font-serif">
              01
            </div>
            <h3 className="text-xl font-serif">Scientific Backing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Peer-reviewed research and clinical studies validate every ingredient
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-surface-elevated flex items-center justify-center text-2xl font-serif">
              02
            </div>
            <h3 className="text-xl font-serif">Third-Party Tested</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Independent verification ensures purity and potency claims
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-surface-elevated flex items-center justify-center text-2xl font-serif">
              03
            </div>
            <h3 className="text-xl font-serif">Premium Sourcing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Traceable ingredients from sustainable, ethical suppliers
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

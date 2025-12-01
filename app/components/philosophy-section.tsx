"use client";

// --- Philosophy Section ---
export function PhilosophySection() {
  const steps = [
    {
      id: "01",
      title: "Scientific Backing",
      desc: "Peer-reviewed research and clinical studies validate every ingredient we select, ensuring efficacy and safety.",
    },
    {
      id: "02",
      title: "Third-Party Tested",
      desc: "Independent verification from certified labs ensures that what's on the label is what's in the bottle. Purity is paramount.",
    },
    {
      id: "03",
      title: "Premium Sourcing",
      desc: "We partner with sustainable and ethical suppliers to source traceable, high-quality ingredients from around the globe.",
    },
  ];

  return (
    <>
      {/* It's good practice to encapsulate component-specific styles */}
      <style jsx>{`
        .philosophy-card {
          position: relative;
          overflow: hidden; /* Important for the shine effect */
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .philosophy-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }

        /* The shiny pseudo-element for the hover effect */
        .philosophy-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -150%; /* Start off-screen to the left */
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          transform: skewX(-25deg); /* Angle the shine */
          transition: left 0.5s ease-in-out;
        }

        /* On hover, move the shine across the card */
        .philosophy-card:hover::after {
          left: 150%;
        }
      `}</style>
    
      <section className="w-full bg-white text-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-0 md:py-0">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-serif text-5xl md:text-6xl mb-5 text-balance">
          Our Curation Process
        </h2>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Every supplement in our collection undergoes rigorous evaluation. We examine bioavailability, third-party testing, ingredient sourcing, and manufacturing standards. Only the exceptional make it through.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="philosophy-card bg-gray-50/70 border border-gray-200/80 rounded-2xl p-6 md:p-8 text-left"
              >
                <span className="text-5xl font-bold text-gray-300">
                  {step.id}
                </span>
                <h3 className="text-2xl font-semibold mt-4 mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


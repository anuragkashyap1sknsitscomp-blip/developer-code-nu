"use client";
import "./PhilosophySection.css"; // We'll create this CSS file

export function PhilosophySection() {
  const steps = [
    {
      id: "01",
      title: "Supplier Vetting",
      desc: "We partner only with manufacturers holding top-tier GMP and regulatory approvals, ensuring strict quality at the source.",
      // Keep your existing image path
      img: "/images/making.png", 
    },
    {
      id: "02",
      title: "Quality Verification",
      desc: "Every batch is verified against Certificates of Analysis (COA) to guarantee its purity, potency, and safety before we accept it.",
      // Keep your existing image path
      img: "/images/testing.png", 
    },
    {
      id: "03",
      title: "Secure Logistics",
      desc: "Products are stored and shipped under precise temperature and security protocols to preserve integrity until delivery.",
      // Keep your existing image path
      img: "/images/approval.png", 
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* UPDATED MAIN HEADING */}
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
          Our Quality Commitment
        </h2>
        {/* UPDATED SUB-DESCRIPTION */}
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          As a trusted seller, our process ensures the quality, safety, and effectiveness of every product we deliver.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="flip-card w-full h-72">
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Back */}
                <div className="flip-card-back rounded-2xl bg-black flex flex-col justify-center items-center text-center px-6 py-6 border border-gray-700 shadow-lg">
                  <h3 className="text-2xl sm:text-3xl font-semibold mb-3 text-white">
                    {step.title}
                  </h3>
                  <p className="text-white text-sm sm:text-base leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="mt-3 text-xs sm:text-sm tracking-widest text-gray-400 uppercase">
                    Step {step.id}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

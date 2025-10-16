"use client";
import "./QualityCommitmentSection.css"; // Note: Changed CSS file name

export function QualityCommitmentSection() {
  const steps = [
    {
      id: "01",
      title: "Curation & Selection",
      desc: "We rigorously vet all potential suppliers, partnering only with manufacturers who hold top-tier GMP and regulatory certifications.",
      // You'll need to update these image paths to reflect the new content
      img: "/images/selection.png", 
    },
    {
      id: "02",
      title: "Quality Verification",
      desc: "We confirm that every product batch has current, valid third-party test results for purity, potency, and safety, guaranteeing authenticity.",
      img: "/images/verification.png", 
    },
    {
      id: "03",
      title: "Safe Distribution",
      desc: "Our handling and storage meet strict protocols to preserve product integrity, ensuring the medicine reaches you safely and effectively.",
      img: "/images/shipping.png", 
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
          Our Quality Commitment
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          As a seller, our process focuses on strict vetting, verification, and careful distribution to ensure you receive only the best.
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
                    // This class makes the image cover the card
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

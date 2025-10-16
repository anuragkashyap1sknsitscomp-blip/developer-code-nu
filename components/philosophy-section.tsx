"use client";
// NOTE: I've updated the imported CSS name to match the new component name for clarity
import "./QualityCommitmentSection.css"; 

export function QualityCommitmentSection() {
  const steps = [
    {
      id: "01",
      title: "Vetting & Selection",
      desc: "We rigorously evaluate manufacturers, partnering only with those holding top-tier GMP and recognized international regulatory certifications.",
      // You can keep your existing image paths if they represent 'vetting', 'verification', and 'logistics'
      img: "/images/philosophy/selection.jpg", 
    },
    {
      id: "02",
      title: "Quality Verification",
      desc: "Every product batch must pass our internal quality checks and be accompanied by validated Certificates of Analysis (COA) for purity and potency.",
      img: "/images/philosophy/verification.jpg", 
    },
    {
      id: "03",
      title: "Secure Logistics",
      desc: "Products are stored and shipped under strict environmental control (e.g., cold chain) to maintain their integrity and effectiveness until they reach your hands.",
      img: "/images/philosophy/logistics.jpg", 
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* UPDATED MAIN HEADING */}
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
          Our Quality Assurance
        </h2>
        {/* UPDATED SUB-DESCRIPTION */}
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          As your trusted distributor, we focus on a rigorous multi-step process for sourcing, verifying, and carefully delivering every medicine.
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

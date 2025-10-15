"use client";
import "./PhilosophySection.css"; // We'll create this CSS file

export function PhilosophySection() {
  const steps = [
    {
      id: "01",
      title: "Manufacture",
      desc: "Medicines are carefully manufactured using high-quality ingredients under strict GMP standards to ensure safety and efficacy.",
      img: "/images/making.png",
    },
    {
      id: "02",
      title: "Testing",
      desc: "Each batch undergoes rigorous third-party testing to guarantee purity, potency, and safety for our consumers.",
      img: "/images/testing.png",
    },
    {
      id: "03",
      title: "Approval",
      desc: "Products are reviewed and approved by experts, ensuring they meet all regulatory and quality standards before reaching the market.",
      img: "/images/approval.png",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
          Our Medicine Process
        </h2>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-12">
          Every medicine we produce goes through a strict process to ensure quality, safety, and effectiveness.
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

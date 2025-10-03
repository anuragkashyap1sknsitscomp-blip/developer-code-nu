"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Real-time image URLs fetched from the internet
const IMAGES = {
  INTRO:"https://t4.ftcdn.net/jpg/02/70/36/25/360_F_270362596_kIpf2k7Q5PBjR5wWTp5qentfEeQnm5dM.jpg",
  MISSION: "https://img.pikbest.com/wp/202347/capsule-pill-3d-rendering-of-a-solitary-set-against-dark-blue-background_9757159.jpg!w700wp", // scientist in lab
  PURITY: "https://img.pikbest.com/wp/202347/capsule-pill-3d-render-of-panoramic-layout-featuring-pills-on-a-black-background_9764530.jpg!sw800", // reuse or alternate
  TEAM_SARAH: "https://media.istockphoto.com/id/1201229397/photo/happy-young-man-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=dX8TiDEayu8c1MTAFofaJiuV-jm1KfBe26mWWU83XHo=", // as placeholder
  TEAM_ALEX: "https://media.istockphoto.com/id/1201229397/photo/happy-young-man-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=dX8TiDEayu8c1MTAFofaJiuV-jm1KfBe26mWWU83XHo=", // placeholder
}

const teamMembers = [
  {
    name: "Dr. Sarah Chen, Ph.D.",
    title: "Chief Scientific Officer",
    bio: "Leads R&D, ensuring every formula is backed by clinical data and pharmaceutical-grade purity standards.",
    img: IMAGES.TEAM_SARAH,
  },
  {
    name: "Alex Lee",
    title: "Head of Sourcing & Sustainability",
    bio: "Oversees ethical sourcing, maintaining IFOS and MSC certifications for purity and environmental responsibility.",
    img: IMAGES.TEAM_ALEX,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased"> {/* Added antialiased for better font rendering */}
      <Navigation />

      {/* --- 1. HERO & INTRO --- */}
      {/* Refined padding for better mobile/desktop visual break */}
      <div className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Increased tracking and changed text color for better pop */}
          <p className="text-xs tracking-[0.3em] uppercase text-sky-400/80 mb-4 font-medium">Code Nutrition: About Us</p>
          
          {/* Refined headline size for visual impact and flow */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-white mb-8 font-light leading-snug">
            Engineered for <span className="text-sky-400 font-semibold">Purity.</span><br className="sm:hidden" /> Designed for Performance.
          </h1>
          
          {/* Adjusted max-width and color for a more sophisticated look */}
          <p className="text-base md:text-xl leading-relaxed text-white/70 max-w-3xl mx-auto">
            We exist at the intersection of **radical transparency** and **scientific rigor**. Our Omega-3 Elite is the result of a process where science dictates quality, ensuring clinically effective doses and unrivaled purity.
          </p>
        </div>
      </div>

      {/* --- 2. IMAGE SECTION BREAK --- */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 mb-24 md:mb-32">
        {/* Adjusted aspect ratio for a more panoramic feel on desktop */}
        <div className="relative aspect-[3/1] md:aspect-[5/1] rounded-xl overflow-hidden shadow-2xl shadow-sky-400/5">
          <img
            src={IMAGES.INTRO}
            alt="Omega-3 Capsules"
            className="w-full h-full object-cover"
          />
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </div>

      {/* --- 3. VISION, MISSION, PHILOSOPHY (Structured) --- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 md:pb-32 border-b border-white/10">
        {/* Adjusted gap and column structure for better mobile alignment */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-8">
          
          {/* Common style for VMP sections */}
          {[
            { title: "Vision", content: "To be the most trusted name in performance nutrition, setting the global standard for purity, bioavailability, and scientific honesty." },
            { title: "Mission", content: "To engineer the highest quality supplements, verified by IFOS and NSF, that deliver clinically effective doses to support optimal health." },
            { title: "Philosophy", content: "**Radical Transparency:** Every dosage is exact, every claim is backed by research, and every batch is third-party tested beyond industry norms." }
          ].map((item, index) => (
            <div key={index} className="space-y-4 md:p-4 border-l-4 md:border-l-2 border-sky-400/70">
              {/* Refined headline size and style for a clean look */}
              <h2 className="font-sans text-lg tracking-widest text-sky-400 font-bold uppercase pl-4 md:pl-2">{item.title}</h2>
              {/* Increased body text size for readability on dark background */}
              <p className="text-base leading-relaxed text-white/80 pl-4 md:pl-2">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- 4. CORE PROCESS - ALTERNATING LAYOUT --- */}
      <div className="py-24 md:py-32 space-y-20 md:space-y-32">
        
        {/* The Curation Process - LEFT IMAGE */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Image Column - Takes 6/12 on large screens */}
          <div className="relative lg:col-span-6 aspect-video rounded-xl overflow-hidden shadow-2xl shadow-sky-400/10">
            <img 
              src={IMAGES.MISSION} 
              alt="Precision Curation" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
          
          {/* Text Column - Takes 6/12 on large screens */}
          <div className="space-y-5 lg:col-span-6 lg:pl-12">
            <h3 className="font-serif text-3xl md:text-4xl text-white font-semibold leading-tight">Precision Curation & Bioavailability</h3>
            <p className="text-lg text-white/70 leading-relaxed">
              Our scientists selected the **natural triglyceride form** of Omega-3 for its superior absorption—up to 70% better than the cheaper ethyl ester form. Our process focuses purely on what is most effective for your body.
            </p>
            {/* Added a decorative separator line */}
            <hr className="w-12 border-t border-sky-400/50 pt-2" />
            
            {/* List with improved icons and spacing */}
            <ul className="space-y-3 text-base text-white/80 pt-2">
              <li className="flex items-start gap-4">
                <span className="text-sky-400 mt-1 font-bold text-xl">→</span> 
                <span>**Optimal Form:** Triglyceride structure chosen for maximum absorption.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-sky-400 mt-1 font-bold text-xl">→</span> 
                <span>**Clinical Dosage:** Exact EPA/DHA ratio proven effective in human trials.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Commitment to Purity - RIGHT IMAGE */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text Column - Order change for alternating layout */}
          <div className="space-y-5 lg:col-span-6 lg:pr-12 order-2 lg:order-1">
            <h3 className="font-serif text-3xl md:text-4xl text-white font-semibold leading-tight">Unwavering Purity & Verification</h3>
            <p className="text-lg text-white/70 leading-relaxed">
              We use **molecular distillation** to remove environmental contaminants. Purity is verified by independent, top-tier testing: **IFOS 5-Star** and **NSF Certified**. We guarantee undetectable levels of heavy metals and PCBs.
            </p>
            {/* Added a decorative separator line */}
            <hr className="w-12 border-t border-sky-400/50 pt-2" />
            
            {/* Refined tags style for a more polished look */}
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="inline-flex items-center px-4 py-1.5 bg-sky-400/10 text-sky-300 border border-sky-400/30 rounded-full text-sm font-medium">IFOS 5-Star</span>
              <span className="inline-flex items-center px-4 py-1.5 bg-sky-400/10 text-sky-300 border border-sky-400/30 rounded-full text-sm font-medium">NSF Certified</span>
              <span className="inline-flex items-center px-4 py-1.5 bg-sky-400/10 text-sky-300 border border-sky-400/30 rounded-full text-sm font-medium">MSC Sustainable</span>
            </div>
          </div>
          
          {/* Image Column - Order change for alternating layout */}
          <div className="relative lg:col-span-6 aspect-video rounded-xl overflow-hidden shadow-2xl shadow-sky-400/10 order-1 lg:order-2">
            <img 
              src={IMAGES.PURITY} 
              alt="Purity Commitment" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            />
          </div>
        </div>
      </div>

      {/* --- 5. THE TEAM (Black BG) --- */}
      {/* Increased padding for better separation */}
      <div className="py-20 md:py-32 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-center font-semibold text-white mb-4">Meet the Engineers</h2>
          <p className="text-lg text-white/70 text-center max-w-3xl mx-auto mb-16">
            The dedicated experts ensuring every product meets the highest possible standard of quality and efficacy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white/5 rounded-xl border border-white/10 shadow-xl transition-all duration-300 hover:border-sky-400/30 hover:shadow-sky-400/10"
              >
                {/* Larger, more prominent profile picture container */}
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-sky-400/50">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                
                <h3 className="font-serif text-xl text-white font-medium mb-1">{member.name}</h3>
                <p className="text-base font-medium text-sky-400 mb-3">{member.title}</p>
                <p className="text-base text-white/80 leading-relaxed max-w-sm mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
          
          {/* Styled link for better visibility */}
          <div className="text-center mt-16">
            <Link 
              href="/team-page" 
              className="inline-flex items-center text-base text-sky-400 font-semibold tracking-wide hover:text-sky-300 transition-colors border-b-2 border-sky-400/50 hover:border-sky-300 pb-1"
            >
              View Our Full Scientific Board 
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
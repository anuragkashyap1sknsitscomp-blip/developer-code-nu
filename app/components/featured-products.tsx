"use client"

import { useState, useRef } from "react"

const DOCTOR_CARDS_DATA = [
  {
    id: "sleep",
    tag: "Sleep and Rest",
    title: "Get the best sleep of your life",
    description: "Better nights make for better days. Wake up to in-depth sleep analysis and deeper insight into your blood oxygen levels [SpO2] to improve your habits and transform how you feel all day long.",
    backgroundImage: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
    doctorImage: "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
    doctorName: "Dr. Anya Sharma",
    testimonial: "I've learned that sleep is the most underrated recovery tool out there.",
    details: { "Time asleep": "7:43 min", "Total duration": "8h 32m", "Awake": "1h 21m", "Deep": "1h 19m 16%", "REM": "1h 16m 20%" },
  },
  {
    id: "wellness",
    tag: "Wellness and Longevity",
    title: "Don't just live longer, live healthier",
    description: "Optimize your well-being with tailored wellness plans focusing on nutrition, mindfulness, and daily habits to boost vitality and extend healthy years.",
    backgroundImage: "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=",
    doctorImage: "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=",
    doctorName: "Dr. John Smith",
    testimonial: "Preventive health is the cornerstone of a long and vibrant life.",
    details: { "Daily steps": "8,500", "Heart Rate Avg": "62 bpm", "Mindfulness": "30 min", "Hydration": "2.5 L" },
  },
  {
    id: "fitness",
    tag: "Activity and Fitness",
    title: "Bring your fitness goals into focus",
    description: "Achieve peak performance with personalized workout insights, recovery tracking, and progress monitoring. Understand your body's response to training like never before.",
    backgroundImage: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    doctorImage: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    doctorName: "Dr. Priya Sharma",
    testimonial: "Understanding your body's recovery is just as crucial as your training.",
    details: { "Workout score": "8.5 / 10", "Calories burned": "560 kcal", "Recovery time": "12 hours", "Activity level": "High" },
  },
  {
    id: "nutrition",
    tag: "Nutrition & Diet",
    title: "Fuel your body with the right food",
    description: "Personalized nutrition plans to optimize energy levels, improve gut health, and support your overall fitness journey.",
    backgroundImage: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    doctorImage: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
    doctorName: "Dr. Rohit Verma",
    testimonial: "Food is medicine. Our plans are designed for lasting, healthy change.",
    details: { "Calorie Goal": "2,000 kcal", "Protein Intake": "120g", "Hydration Target": "3.0 L" },
  },
 
]

const InteractiveDoctorCard = ({ card, isOpen, onToggle, isAnyCardOpen }: any) => {
  
  const CLOSED_WIDTH_CLASS = "w-[350px] min-w-[350px]"; // चौड़ाई 420px से 350px की गई

  let cardWidthClass;

  if (isOpen) {
    cardWidthClass = "w-[90vw] lg:w-[700px] max-w-[800px]"; // चौड़ाई 800px से 700px (lg) और max-w 900px से 800px की गई
  } else {
    cardWidthClass = isAnyCardOpen ? `${CLOSED_WIDTH_CLASS} opacity-70` : CLOSED_WIDTH_CLASS;
  }

  const ExpandedContent = (
    <div
      className={`absolute inset-0 p-4 sm:p-6 flex flex-col justify-end text-white z-10 overflow-y-auto transition-opacity duration-500 ease-out`} // p-8 से p-6 किया गया
    >
      <span className="inline-flex items-center text-white/80 text-xs sm:text-sm font-medium mb-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm"> {/* mb-4 से mb-3 किया गया */}
        {card.tag}
      </span>

      <h2 className="text-xl sm:text-3xl font-bold leading-tight max-w-2xl mb-2"> {/* text-2xl से text-xl, text-4xl से text-3xl, mb-3 से mb-2 किया गया */}
        {card.title}
      </h2>
      <p className="text-sm sm:text-base text-white/80 max-w-xl mb-4"> {/* text-lg से text-base, mb-6 से mb-4 किया गया */}
        {card.description}
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-3"> {/* gap-6 से gap-4, mb-4 से mb-3 किया गया */}
        <div
          className="flex flex-col p-3 rounded-lg bg-white/10 backdrop-blur-sm shadow-xl flex-1 min-w-[200px]" // p-4 से p-3, min-w-[240px] से min-w-[200px] किया गया
        >
          <div className="flex items-center mb-2"> {/* mb-3 से mb-2 किया गया */}
            <img
              src={card.doctorImage}
              alt={card.doctorName}
              className="rounded-full object-cover mr-2 w-10 h-10 border-2 border-white ring-2 ring-blue-400" // w-12 h-12 से w-10 h-10, mr-3 से mr-2 किया गया
            />
            <div>
              <p className="font-semibold text-sm sm:text-base"> {/* text-base से text-sm, text-lg से text-base किया गया */}
                {card.doctorName}
              </p>
              <p className="text-xs text-white/70"> {/* text-sm को text-xs किया गया */}
                Member Spotlight
              </p>
            </div>
          </div>
          <p className="italic text-xs sm:text-sm text-white/90"> {/* text-sm से text-xs, text-base से text-sm किया गया */}
            "{card.testimonial}"
          </p>
        </div>

        <div
          className="p-3 rounded-lg bg-white/10 backdrop-blur-sm shadow-xl flex-1 min-w-[200px]" // p-4 से p-3, min-w-[240px] से min-w-[200px] किया गया
        >
          {Object.entries(card.details).map(([key, value]) => (
            <p
              key={key}
              className="flex justify-between text-xs sm:text-sm text-white/90 mb-1 last:mb-0" // text-sm से text-xs, text-base से text-sm किया गया
            >
              <span className="text-white/70">{key}</span>
              <span className="font-medium">{value?.toString()}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  const CollapsedContent = (
    <div
        className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white z-10 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} // p-4 से p-3, p-6 से p-4 किया गया
    >
        <span className="inline-block bg-black/40 backdrop-blur-sm text-xs font-medium mb-1 px-2 py-1 rounded-full"> {/* text-sm से text-xs, mb-2 से mb-1 किया गया */}
            {card.tag}
        </span>
        <h3 className="font-semibold leading-tight text-base sm:text-xl"> {/* text-lg से text-base, text-2xl से text-xl किया गया */}
            {card.title}
        </h3>
    </div>
  );


  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-700 ease-in-out h-[450px] shadow-xl ${cardWidthClass}`} // h-[550px] से h-[450px], rounded-3xl से rounded-2xl किया गया
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.4), transparent), url(${card.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => !isOpen && onToggle(card.id)}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity duration-500 ${
          isOpen ? "opacity-90" : "opacity-70 group-hover:opacity-80"
        }`}
      ></div>

      <button
        className="absolute top-3 right-3 p-2 rounded-full bg-white text-black shadow-lg z-30 transition-all duration-300 hover:scale-110 active:scale-90" // top-4 right-4 से top-3 right-3, p-3 से p-2 किया गया
        onClick={(e) => {
          e.stopPropagation() 
          onToggle(card.id)
        }}
      >
        {isOpen ? (
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* h-5 w-5 से h-4 w-4, sm:h-6 sm:w-6 से sm:h-5 sm:w-5 किया गया */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> {/* h-5 w-5 से h-4 w-4, sm:h-6 sm:w-6 से sm:h-5 sm:w-5 किया गया */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </button>

      {isOpen ? ExpandedContent : CollapsedContent}

    </div>
  )
}

export function FeaturedProducts() {
  const [openCardId, setOpenCardId] = useState<string | null>(null)
  const isAnyCardOpen = openCardId !== null
  const scrollRef = useRef<HTMLDivElement>(null); 

  const handleCardToggle = (id: string) => {
    
    setOpenCardId(openCardId === id ? null : id);
    
    if (openCardId !== id) {
      setTimeout(() => {
        const cardElement = document.getElementById(`card-wrapper-${id}`);
        if (cardElement) {
          cardElement.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center' 
          });
        }
      }, 50); 
    }
  }

  return (
    <section
      id="featured"
      className="w-full bg-white text-gray-800 py-16 sm:py-20 flex flex-col items-center border-t border-gray-200"
    >
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 w-full max-w-7xl">
        <h2 className="font-serif text-5xl md:text-6xl mb-5 text-center text-black">
          Meet Our Experts
        </h2>
        <p className="text-gray-500 mb-12 text-lg text-center max-w-3xl mx-auto">
          Explore personalized insights and strategies guided by our leading specialists.
        </p>
      </div>

      <div className="w-full relative">
        <div
          ref={scrollRef} 
          className="flex flex-row overflow-x-auto px-4 sm:px-6 md:px-12 space-x-6 pb-8 justify-start items-center"
        >
          {DOCTOR_CARDS_DATA.map((card) => (
            <div
              key={card.id}
              id={`card-wrapper-${card.id}`} 
              className="flex-shrink-0" 
            >
              <InteractiveDoctorCard
                card={card}
                isOpen={openCardId === card.id}
                onToggle={handleCardToggle}
                isAnyCardOpen={isAnyCardOpen}
              />
            </div>
          ))}
          
        </div>
      </div>

      
    </section>
  )
}

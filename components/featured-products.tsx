"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// --- Doctor Cards Data ---
const DOCTOR_CARDS_DATA = [
  {
    id: "sleep",
    tag: "Sleep and Rest",
    title: "Get the best sleep of your life",
    description:
      "Better nights make for better days. Wake up to in-depth sleep analysis and deeper insight into your blood oxygen levels [SpO2] to improve your habits and transform how you feel all day long.",
    backgroundImage:
      "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
    doctorImage:
      "https://www.shutterstock.com/image-photo/profile-photo-attractive-family-doc-600nw-1724693776.jpg",
    doctorName: "Dr. Anya Sharma",
    testimonial:
      "I've learned that sleep is the most underrated recovery tool out there.",
    details: {
      "Time asleep": "7:43 min",
      "Total duration": "8h 32m",
      Awake: "1h 21m",
      REM: "1h 16m 20%",
      Light: "4h 4m 64%",
      Deep: "1h 19m 16%",
    },
  },
  {
    id: "wellness",
    tag: "Wellness and Longevity",
    title: "Don't just live longer, live healthier",
    description:
      "Optimize your well-being with tailored wellness plans focusing on nutrition, mindfulness, and daily habits to boost vitality and extend healthy years.",
    backgroundImage:
      "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=",
    doctorImage:
      "https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=",
    doctorName: "Dr. John Smith",
    testimonial:
      "Preventive health is the cornerstone of a long and vibrant life.",
    details: {
      "Daily steps": "8,500",
      "Heart Rate Avg": "62 bpm",
      Mindfulness: "30 min",
      Hydration: "2.5 L",
    },
  },
  {
    id: "fitness",
    tag: "Activity and Fitness",
    title: "Bring your fitness goals into focus",
    description:
      "Achieve peak performance with personalized workout insights, recovery tracking, and progress monitoring. Understand your body's response to training like never before.",
    backgroundImage:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    doctorImage:
      "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
    doctorName: "Dr. Priya Sharma",
    testimonial:
      "Understanding your body's recovery is just as crucial as your training.",
    details: {
      "Workout score": "8.5 / 10",
      "Calories burned": "560 kcal",
      "Recovery time": "12 hours",
      "Activity level": "High",
    },
  },
]

// --- Interactive Doctor Card ---
const InteractiveDoctorCard = ({ card, isOpen, onToggle }: any) => {
  return (
    <motion.div
      layout
      className={`relative rounded-lg overflow-hidden cursor-pointer group flex-shrink-0 transition-all duration-700 transform-gpu 
        ${isOpen ? "lg:w-[60%] w-full" : "lg:w-[25%] w-full"}
        h-[550px]`}
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

      {/* Collapsed Content */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white z-10"
          >
            <span className="inline-block bg-black/40 backdrop-blur-sm text-xs sm:text-sm font-medium mb-2 px-2 py-1 rounded-full">
              {card.tag}
            </span>
            <h3 className="font-semibold leading-tight text-lg sm:text-2xl">
              {card.title}
            </h3>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand/Close Button */}
      <motion.button
        className="absolute top-4 right-4 p-2 sm:p-3 rounded-full bg-white text-black shadow-lg z-30"
        onClick={(e) => {
          e.stopPropagation()
          onToggle(card.id)
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-6 sm:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )}
      </motion.button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end text-white z-10 overflow-y-auto"
          >
            <span className="inline-flex items-center text-white/80 text-xs sm:text-sm font-medium mb-4 px-3 py-1 rounded-full bg-black/40 backdrop-blur-sm">
              {card.tag}
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold leading-tight max-w-2xl mb-3">
              {card.title}
            </h2>
            <p className="text-sm sm:text-lg text-white/80 max-w-xl mb-6">
              {card.description}
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-4">
              {/* Doctor Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex flex-col p-4 rounded-lg bg-white/10 backdrop-blur-sm shadow-xl flex-1 min-w-[240px]"
              >
                <div className="flex items-center mb-3">
                  <img
                    src={card.doctorImage}
                    alt={card.doctorName}
                    className="rounded-full object-cover mr-3 w-12 h-12"
                  />
                  <div>
                    <p className="font-semibold text-base sm:text-lg">
                      {card.doctorName}
                    </p>
                    <p className="text-xs sm:text-sm text-white/70">
                      Member Spotlight
                    </p>
                  </div>
                </div>
                <p className="italic text-sm sm:text-base text-white/90">
                  "{card.testimonial}"
                </p>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-4 rounded-lg bg-white/10 backdrop-blur-sm shadow-xl flex-1 min-w-[240px]"
              >
                {Object.entries(card.details).map(([key, value]) => (
                  <p
                    key={key}
                    className="flex justify-between text-sm sm:text-base text-white/90 mb-1 last:mb-0"
                  >
                    <span className="text-white/70">{key}</span>
                    <span className="font-medium">{value?.toString()}</span>
                  </p>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// --- Featured Section ---
export function FeaturedProducts() {
  const [openCardId, setOpenCardId] = useState<string | null>(null)

  const handleCardToggle = (id: string) => {
    setOpenCardId(openCardId === id ? null : id)
  }

  return (
    <section
      id="featured"
      className="w-full bg-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col items-center border-t border-gray-800"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
        Meet Our Experts
      </h2>
      <p className="text-gray-400 mb-12 text-base text-center max-w-2xl">
        Learn how our specialists guide you to better health through personalized insights and proven strategies.
      </p>

      <motion.div
        layout
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8 items-stretch justify-center"
      >
        {DOCTOR_CARDS_DATA.map((card) => (
          <InteractiveDoctorCard
            key={card.id}
            card={card}
            isOpen={openCardId === card.id}
            onToggle={handleCardToggle}
          />
        ))}
      </motion.div>
    </section>
  )
}

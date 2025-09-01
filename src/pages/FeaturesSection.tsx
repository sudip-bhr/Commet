import { motion, type Variants } from "framer-motion";
import Orion from "/orion.svg";
import { Star } from "lucide-react";

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 20 } },
};

const cards = [
  {
    title: "Track Progress",
    desc: "Monitor your habits with precision and style. Visualize your journey with insightful analytics.",
    color: "text-yellow-400",
    position: { top: "35%", left:"-6%" },
  },
  {
    title: "Set Goals",
    desc: "Set and Track Your Personal Growth Effortlessly.",
    color: "text-green-400",
    position: { top:"32%", right: "-15%" },
  },
  {
    title: "Collaboration",
    desc: "Team up with friends. Share progress and motivate each other.",
    color: "text-blue-400",
    position: { bottom: "-5%", right: "10%", translateX: "-50%" },
  },
];

export default function FeaturesSection() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#170220] via-[#310455] to-[#170220] flex flex-col items-center justify-center text-white overflow-hidden px-4">
      {/* Star field */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <Star
            key={i}
            className="absolute text-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 12 + 6}px`,
              height: `${Math.random() * 12 + 6}px`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="text-center mb-12 z-20">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">Commet</h1>
        <p className="text-lg sm:text-xl text-gray-300 mt-2">Collaborative Habit Tracking Platform</p>
      </div>

      {/* SVG container */}
      <div className="relative flex items-center w-full max-w-[34rem]">
        {/* Rotating SVG */}
        <motion.img
          src={Orion}
          alt="Orion Constellation"
          className="w-120 sm:w-250 md:w-200 lg:w-[100rem] z-10"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: [-20, 10, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.5 }}
        />

        {/* Cards */}
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="absolute p-4 sm:p-6 w-40 sm:w-52 md:w-56 flex flex-col items-center rounded-2xl shadow-lg cursor-pointer"
            style={{
              top: card.position.top,
              bottom: card.position.bottom,
              left: card.position.left,
              right: card.position.right,
              transform: card.position.translateX ? `translateX(${card.position.translateX})` : undefined,
            }}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.08 }}
          >
            <h3 className={`text-lg font-semibold text-center ${card.color}`}>{card.title}</h3>
            <p className="text-sm text-gray-300 text-center">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}





















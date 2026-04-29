"use client";

import { motion } from "framer-motion";

const features = [
  "Premium organic products",
  "Certified beauty experts",
  "Luxury spa ambience",
  "Trusted by 10k+ clients",
  "Award-winning salon",
  "Hygiene & safety assured",
];

export default function CarouselStrip() {
  return (
    <section className="relative overflow-hidden py-6 border-y border-gray-200 bg-[#ECE7E1]">
      {/* Fade edges (updated to match bg) */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#ECE7E1] to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#ECE7E1] to-transparent z-10" />

      {/* Smooth infinite track */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {[...features, ...features].map((item, i) => (
          <div
            key={i}
            className="
              px-6 py-3 rounded-full 
              bg-[#FAF8F5] text-[#1A1A1A] 
              border border-gray-200 
              shadow-sm 
              whitespace-nowrap 
              hover:shadow-md transition
            "
          >
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

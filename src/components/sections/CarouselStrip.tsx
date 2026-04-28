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
    <section className="relative overflow-hidden py-6 border-y bg-gradient-to-r from-rose-50 to-pink-50">
      {/* Fade edges for premium feel */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-rose-50 to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-pink-50 to-transparent z-10" />

      {/* Smooth infinite track */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25, // increase = slower, more premium
          ease: "linear",
        }}
      >
        {/* Duplicate for seamless loop */}
        {[...features, ...features].map((item, i) => (
          <div
            key={i}
            className="px-6 py-3 rounded-full bg-black text-white shadow-lg whitespace-nowrap border border-white/10"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

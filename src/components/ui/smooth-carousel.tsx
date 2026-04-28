"use client";

import { motion } from "framer-motion";

type SmoothCarouselProps = {
  items: string[];
};

export default function SmoothCarousel({ items }: SmoothCarouselProps) {
  return (
    <div className="relative overflow-hidden py-6">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10" />

      {/* Moving track */}
      <motion.div
        className="flex gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="px-6 py-3 rounded-full bg-black text-white whitespace-nowrap shadow-lg"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

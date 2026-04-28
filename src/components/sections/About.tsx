"use client";

import { motion } from "framer-motion";

type Hours = {
  day: string;
  time: string;
};

const hours: Hours[] = [
  { day: "Monday", time: "9:00 – 18:00" },
  { day: "Tuesday", time: "9:00 – 18:00" },
  { day: "Wednesday", time: "9:00 – 18:00" },
  { day: "Thursday", time: "9:00 – 18:00" },
  { day: "Friday", time: "9:00 – 19:00" },
  { day: "Saturday", time: "10:00 – 17:00" },
  { day: "Sunday", time: "11:00 – 16:00" },
];

export default function About() {
  return (
    <section className="grid md:grid-cols-2 gap-14 px-8 py-24 max-w-7xl mx-auto">
      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-rose-500 font-semibold mb-2">ABOUT US</p>

        <h2 className="text-5xl font-serif mb-6 leading-tight">
          Experience Luxury Beauty & Wellness
        </h2>

        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Located in the heart of London, our salon offers a refined blend of
          beauty, wellness, and relaxation. We specialise in premium treatments
          tailored to enhance your natural elegance.
        </p>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Our team of certified professionals uses only high-end, organic
          products to ensure exceptional results while maintaining the highest
          standards of hygiene and care.
        </p>

        {/* USP Highlights */}
        <div className="grid grid-cols-2 gap-5 text-sm">
          {[
            "✨ 10+ Years Experience",
            "💆 5-Star Rated Services",
            "🌿 Organic Products Only",
            "👩‍🎨 Expert Stylists",
          ].map((item, i) => (
            <div
              key={i}
              className="
        p-5 rounded-xl 
        bg-white shadow border 
        transition-all duration-300 
        hover:shadow-xl 
        hover:-translate-y-1 
        hover:bg-black 
        hover:text-white 
        cursor-pointer
      "
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl border"
      >
        <h3 className="mb-6 text-2xl font-semibold">Opening Hours</h3>

        {hours.map((h, i) => (
          <div key={i} className="flex justify-between py-3 border-b text-base">
            <span className="font-medium">{h.day}</span>
            <span className="text-gray-600">{h.time}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

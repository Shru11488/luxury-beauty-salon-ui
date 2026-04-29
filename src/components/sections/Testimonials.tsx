"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  img: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Emma Watson",
    role: "Regular Client",
    text: "Absolutely loved the experience. Everything felt luxurious and professionally handled from start to finish.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Olivia Brown",
    role: "Bridal Client",
    text: "Highly professional staff and a calming ambience. The results exceeded my expectations.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Spa Member",
    text: "Best salon in London. The service quality and attention to detail are unmatched.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="px-8 py-24 bg-[#ECE7E1]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-sm text-rose-500 font-semibold mb-2">TESTIMONIALS</p>
        <h2 className="text-5xl font-serif">Trusted by Our Clients</h2>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -8 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="
              bg-white/80 backdrop-blur-xl 
              border border-white/40 
              p-8 rounded-2xl 
              shadow-xl 
              transition-all duration-300
              hover:shadow-2xl
            "
          >
            {/* Stars */}
            <div className="text-yellow-500 mb-4 text-xl tracking-wide">
              ★★★★★
            </div>

            {/* Text */}
            <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
              “{t.text}”
            </p>

            {/* User */}
            <div className="flex items-center gap-4 mt-4">
              <div className="relative w-12 h-12">
                <Image
                  src={t.img}
                  alt={t.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>

              <div>
                <p className="font-semibold text-base">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero({ onBook }: { onBook?: () => void }) {
  return (
    <section className="bg-gradient-to-b from-[#F3EFEA] to-[#E8E2DB] grid md:grid-cols-2 gap-10 px-8 py-24 items-center">
      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <p className="text-sm text-[#D4AF37] mb-3 tracking-[0.2em]">
          PREMIUM SALON
        </p>

        <h1 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
          Experience <span className="text-[#D4AF37]">true luxury</span> care
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          Elite beauty treatments in the heart of London, crafted to enhance
          your natural elegance.
        </p>

        <div className="flex gap-4">
          <button
            onClick={onBook}
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition shadow-md"
          >
            Book Now
          </button>

          <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-white transition">
            Contact
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          alt="Salon"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Floating content */}
        <div className="absolute bottom-10 left-10 text-white">
          <h2 className="text-3xl font-semibold">Luxury Experience</h2>
          <p className="text-sm text-gray-200 mt-1">
            Indulge in premium beauty treatments
          </p>
        </div>
      </motion.div>
    </section>
  );
}

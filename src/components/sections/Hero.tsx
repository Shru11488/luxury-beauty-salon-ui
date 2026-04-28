"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
      <div>
        <p className="text-sm text-[#C8A96A] mb-2 tracking-widest">
          PREMIUM SALON
        </p>

        <h1 className="text-5xl font-serif mb-6">
          Experience true luxury care
        </h1>

        <p className=" text-lg text-gray-600 mb-6">
          Elite beauty treatments in the heart of London.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#C8A96A] px-6 py-3 rounded-lg">
            Book Now
          </button>
          <button className="border px-6 py-3 rounded-lg">Contact</button>
        </div>
      </div>

      <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
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
          <h2 className="text-3xl font-bold">Luxury Experience</h2>
          <p className="text-lg text-gray-200">
            Indulge in premium beauty treatments
          </p>
        </div>
      </div>
    </section>
  );
}

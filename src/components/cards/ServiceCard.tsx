"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ServiceCardProps = {
  title: string;
  price: string;
  img: string;
};

export default function ServiceCard({ title, price, img }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -5 }}
      className="rounded-2xl overflow-hidden backdrop-blur-lg bg-white/70 border border-white/40 shadow-lg"
    >
      <div className="relative w-full h-[220px]">
        <Image src={img} alt={title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{price}</p>

        <button className="mt-4 text-sm text-[var(--gold)] font-medium hover:underline">
          Book Now →
        </button>
      </div>
    </motion.div>
  );
}

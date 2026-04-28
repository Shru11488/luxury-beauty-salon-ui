"use client";

import ServiceCard from "../cards/ServiceCard";
import { motion } from "framer-motion";
import { useState } from "react";
import SmoothCarousel from "@/components/ui/smooth-carousel";
const tabs = ["All", "Hair", "Skin", "Makeup", "Spa"];

const services = [
  {
    title: "Luxury Hair Spa",
    price: "£45",
    category: "Hair",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
  },
  {
    title: "Bridal Makeup",
    price: "£120",
    category: "Makeup",
    img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
  },
  {
    title: "Facial Glow Therapy",
    price: "£60",
    category: "Skin",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15",
  },
  {
    title: "Relaxing Body Spa",
    price: "£80",
    category: "Spa",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874",
  },
  {
    title: "Hair Styling",
    price: "£35",
    category: "Hair",
    img: "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
  },
  {
    title: "Skin Treatment",
    price: "£50",
    category: "Skin",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
];

export default function Categories() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? services : services.filter((s) => s.category === active);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <p className="text-sm text-rose-500 font-semibold mb-2">OUR SERVICES</p>

      <h2 className="text-4xl font-bold mb-6">Luxury treatments for you</h2>

      {/* Tabs */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-5 py-2 rounded-full border transition ${
              active === tab ? "bg-black text-white" : "bg-white text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div layout className="grid md:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <ServiceCard key={i} {...item} />
        ))}
      </motion.div>
    </section>
  );
}

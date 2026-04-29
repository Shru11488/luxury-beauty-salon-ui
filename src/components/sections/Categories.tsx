"use client";

import ServiceCard from "../cards/ServiceCard";
import { motion } from "framer-motion";
import { useState } from "react";

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
    <section className="bg-[#ECE7E1] py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm text-[#D4AF37] tracking-[0.2em] mb-2">
            OUR SERVICES
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold">
            Luxury treatments for you
          </h2>

          <p className="text-gray-600 mt-3">
            Indulge in premium beauty services tailored to perfection
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                active === tab
                  ? "bg-[#D4AF37] text-black shadow-md"
                  : "bg-[#FAF8F5] text-gray-600 border border-gray-200 hover:bg-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div layout className="grid md:grid-cols-3 gap-8">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-[#FAF8F5] border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition"
            >
              <ServiceCard {...item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

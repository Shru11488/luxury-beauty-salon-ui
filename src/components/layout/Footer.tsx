"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-gray-300 px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-serif text-white mb-4">Luxe Beauty</h2>

          <p className="text-base leading-relaxed text-gray-400">
            Premium beauty salon in London offering luxury treatments, expert
            stylists, and a relaxing spa experience tailored for you.
          </p>
        </motion.div>

        {/* SERVICES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white mb-5">Services</h3>

          <ul className="space-y-3 text-base">
            <li className="hover:text-white transition">Hair Styling</li>
            <li className="hover:text-white transition">Skin Treatments</li>
            <li className="hover:text-white transition">Bridal Makeup</li>
            <li className="hover:text-white transition">Spa & Wellness</li>
          </ul>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>

          <ul className="space-y-3 text-base">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About</li>
            <li className="hover:text-white transition">Services</li>
            <li className="hover:text-white transition">Contact</li>
          </ul>
        </motion.div>

        {/* CONTACT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-white mb-5">Contact</h3>

          <div className="space-y-3 text-base text-gray-400">
            <p>221B Baker Street</p>
            <p>London, UK</p>
            <p>+44 20 7946 0958</p>
            <p>hello@luxebeauty.co.uk</p>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Luxe Beauty. All rights reserved.
      </div>
    </footer>
  );
}

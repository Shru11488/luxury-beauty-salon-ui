"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="px-8 py-6 border-b bg-white/70 backdrop-blur-md"
    >
      <h1 className="text-xl font-semibold tracking-wide">
        Luxe Beauty London
      </h1>
    </motion.div>
  );
}

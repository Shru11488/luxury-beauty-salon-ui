"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-[#F8F7F4] to-white overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rose-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-rose-500 font-semibold tracking-widest mb-2">
            VISIT OUR SALON
          </p>

          <h2 className="text-5xl md:text-6xl font-serif leading-tight mb-6">
            Experience luxury <br /> beauty care in London
          </h2>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Step into a world of elegance and relaxation. Our expert stylists
            and premium products ensure a refined, rejuvenating experience
            tailored just for you.
          </p>

          <div className="space-y-5 text-gray-700 text-base">
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <p>221B Baker Street, London, UK</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <p>+44 20 7946 0958</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <p>hello@luxebeauty.co.uk</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Book Your Appointment
          </h3>

          <div className="space-y-5">
            <Input placeholder="Your Name" className="h-12 text-base" />
            <Input placeholder="Email Address" className="h-12 text-base" />
            <Input placeholder="Phone Number" className="h-12 text-base" />
            <Textarea
              placeholder="Tell us about your service..."
              className="min-h-[120px] text-base"
            />

            <Button className="w-full h-12 text-base bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-300">
              Send Enquiry
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

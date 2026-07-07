"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

const HERO_IMAGE =
  "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/c615d4cbd_generated_fce676c8.png";

const highlights = [
  { icon: "🏆", text: "Монгол Улсын аварга клуб (2024, 2025, 2026)" },
  { icon: "♟️", text: "9 жилийн түүхтэй" },
  { icon: "🥇", text: "30 гаруй улсын болон олон улсын цолтон төрүүлсэн" },
  { icon: "⭐", text: "98% эцэг эхийн сэтгэл ханамж" },
];

export default function Hero({ onEnrollClick }: { onEnrollClick: () => void }) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Шатрын хөлөг"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/95 via-[#0A1128]/80 to-[#0A1128]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              <span className="text-[#D4AF37] text-sm font-body font-medium">
                Монголын тэргүүлэгч шатрын клуб
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#F8FAFC] leading-tight mb-6 space-y-2"
          >
            <span className="block">Чимээгүй хэрнээ шаргуу хөдөлмөрлө.</span>
            <span className="block text-[#D4AF37]">
              Чиний өмнөөс үр дүн чинь ярих болно.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-[#F8FAFC]/70 font-body leading-relaxed mb-10 max-w-2xl"
          >
            Бүх насны анхан, дунд болон ахисан түвшний сурагчдад зориулсан
            мэргэжлийн шатрын сургалт.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row gap-4 mb-14"
          >
            <button
              onClick={onEnrollClick}
              className="group bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-base px-8 py-4 rounded-md hover:bg-[#E5C44D] transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            >
              Хичээлд бүртгүүлэх
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#branches")}
              className="border border-[#F8FAFC]/30 text-[#F8FAFC] font-heading font-semibold text-base px-8 py-4 rounded-md hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px] focus:outline-none"
            >
              <MapPin size={18} />
              Салбаруудыг харах
            </button>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-[#F8FAFC]/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-[#F8FAFC]/10"
              >
                <span className="text-xl flex-shrink-0">{h.icon}</span>
                <span className="text-sm text-[#F8FAFC]/80 font-body">{h.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

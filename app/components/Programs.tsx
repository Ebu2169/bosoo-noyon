"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const programs = [
  {
    icon: "♟",
    title: "Анхан шат",
    desc: "Шатрын дүрэм, нүүдэл, үндсэн ойлголтууд.",
    level: "Эхлэгчдэд",
    color: "#1E40AF",
  },
  {
    icon: "⚔",
    title: "Дунд шат",
    desc: "Тактик, стратеги, нээлтийн онолууд.",
    level: "Дунд түвшин",
    color: "#D4AF37",
  },
  {
    icon: "👑",
    title: "Ахисан шат",
    desc: "Тэмцээний бэлтгэл, анализ, өндөр түвшний тоглолтын арга барил.",
    level: "Ахисан түвшин",
    color: "#D4AF37",
  },
];

export default function Programs({ onEnrollClick }: { onEnrollClick: () => void }) {
  return (
    <section id="programs" className="py-20 md:py-32 bg-[#080E22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Сургалтууд
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F8FAFC]">
            Манай <span className="text-[#D4AF37]">сургалтууд</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#0D1630] border border-[#1E40AF]/20 rounded-xl p-7 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-2xl"
                style={{ backgroundColor: `${p.color}15` }}
              >
                {p.icon}
              </div>
              <div
                className="inline-flex items-center gap-1 text-xs font-heading font-semibold px-2.5 py-1 rounded-full mb-4 w-fit"
                style={{ backgroundColor: `${p.color}20`, color: p.color }}
              >
                {p.level}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#F8FAFC] mb-3">
                {p.title}
              </h3>
              <p className="text-[#F8FAFC]/60 font-body text-sm leading-relaxed flex-1">
                {p.desc}
              </p>
              <button
                onClick={onEnrollClick}
                className="mt-6 flex items-center gap-2 text-[#D4AF37] font-heading font-semibold text-sm hover:gap-3 transition-all duration-300"
              >
                Бүртгүүлэх <ChevronRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const TOURNAMENT_IMAGE =
  "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/88105ddac_generated_1a1f8f08.png";

const stats = [
  {
    icon: "🏆",
    number: "3x",
    label: "Монгол Улсын аварга клуб",
    detail: "2024, 2025, 2026",
  },
  {
    icon: "♟️",
    number: "9+",
    label: "Жилийн түүхтэй",
    detail: "Тасралтгүй ажиллаж байна",
  },
  {
    icon: "🥇",
    number: "30+",
    label: "Цолтон тамирчин",
    detail: "Улсын болон олон улсын",
  },
  {
    icon: "⭐",
    number: "98%",
    label: "Эцэг эхийн сэтгэл ханамж",
    detail: "Манай сурагчдын гэр бүлүүд",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 md:py-32 bg-[#0D1630] relative overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Амжилтууд
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F8FAFC]">
            Бидний <span className="text-[#D4AF37]">амжилт</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0A1128] border border-[#D4AF37]/15 rounded-xl p-6 text-center hover:border-[#D4AF37]/40 transition-all duration-500"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <div className="text-4xl font-heading font-bold text-[#D4AF37] block mb-2">
                {s.number}
              </div>
              <h3 className="text-base font-heading font-semibold text-[#F8FAFC] mb-1">
                {s.label}
              </h3>
              <p className="text-sm text-[#F8FAFC]/50 font-body">{s.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Tournament image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden border border-[#D4AF37]/20 relative group"
        >
          <img
            src={TOURNAMENT_IMAGE}
            alt="Тэмцээний мөч"
            className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="text-[#D4AF37] font-heading font-semibold text-lg">
              Тэмцээний ялалтууд
            </p>
            <p className="text-[#F8FAFC]/60 font-body text-sm">
              Ирээдүйн шагналууд болон тэмцээний гэрэл зургууд
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

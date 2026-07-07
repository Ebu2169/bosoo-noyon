"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Хүүгийн маань шатрын чадвар маш хурдан хөгжлөө. Багш нар маш анхааралтай, сурагч нэг бүрийг дэмжин ажилладаг. Би бусад эцэг эхчүүдэд санал болгож байна.",
    name: "Б. Оюунчимэг",
    role: "Эцэг эхийн сэтгэгдэл",
    initials: "БО",
  },
  {
    quote:
      "Би 2 жилийн өмнө шатар сурч эхэлсэн. Одоо улсын тэмцээнд оролцож, медаль хүртдэг болсон. Босоо Ноён клубт маш их баярлалаа!",
    name: "Д. Тэмүүлэн",
    role: "Сурагчийн сэтгэгдэл",
    initials: "ДТ",
  },
  {
    quote:
      "Тэмцээний бэлтгэл маш өндөр түвшинд хийгддэг. Дасгалжуулагч нар олон улсын туршлагатай учир тэмцээний бодит стратеги заадаг.",
    name: "Г. Батбаяр",
    role: "Тэмцээнд оролцогчийн сэтгэгдэл",
    initials: "ГБ",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Сэтгэгдлүүд
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F8FAFC]">
            Манай <span className="text-[#D4AF37]">сурагчид</span> юу хэлдэг вэ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0D1630] border border-[#1E40AF]/20 rounded-xl p-6 hover:border-[#D4AF37]/20 transition-all duration-500"
            >
              <Quote size={24} className="text-[#D4AF37]/40 mb-4" />
              <p className="text-[#F8FAFC]/80 font-body text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#D4AF37] font-heading font-bold text-xs">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[#F8FAFC] font-heading font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-[#F8FAFC]/50 font-body text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

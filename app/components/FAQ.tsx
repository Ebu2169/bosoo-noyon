"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Хүүхэд хэдэн наснаас эхлэх боломжтой вэ?",
    a: "Манай хүүхдийн сургалт 4н наснаас эхэлдэг. Учир нь хүүхдүүд 4 наснаас эхлэн attention span буюу анхаарал төвлөрөх чадварт суралцаж 4 наснаас хойш жил бүр 1 зүйлд тогтож харах дундаж хугацаа нь 3-5 минутаар нэмэгддэг бол шатар тоглодог хүүхдийн дундаж хугацаа 13-15 минут нэмэгддэг байна. Тиймээс бид 4 наснаас эхлэн хүүхдүүдэд зориулсан сургалтын систем бэлдсэн билээ.",
  },
  {
    q: "Өмнө нь шатар тоглож байгаагүй бол суралцаж болох уу?",
    a: "Мэдээж болно! Манай анхан шатны сургалт нь шатрын дүрэм, нүүдэл, үндсэн ойлголтуудаас эхлэн заах тул ямар ч өмнөх мэдлэг шаардахгүй.",
  },
  {
    q: "Тэмцээнд хэрхэн оролцох вэ?",
    a: "Манай клубын сурагчид дотоод тэмцээнд байнга оролцоно. Улсын болон олон улсын тэмцээнд бэлтгэл хангалттай түвшинд хүрсэн сурагчдыг дасгалжуулагч нар санал болгоно.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#080E22]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Түгээмэл асуултууд
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F8FAFC]">
            Түгээмэл <span className="text-[#D4AF37]">асуултууд</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0D1630] border border-[#1E40AF]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/20 transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
              >
                <span className="text-[#F8FAFC] font-heading font-semibold text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-[#D4AF37] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-[#F8FAFC]/70 font-body text-sm leading-relaxed border-t border-[#1E40AF]/10 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

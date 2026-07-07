"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Trophy, Lightbulb } from "lucide-react";

const STUDENT_IMAGE =
  "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/1d839683d_generated_1119466a.png";

const features = [
  {
    icon: Users,
    title: "Туршлагатай дасгалжуулагчид",
    desc: "Мэргэжлийн туршлагатай багш нар сурагч бүрийн ахиц дэвшлийг дэмжин ажиллана.",
  },
  {
    icon: BookOpen,
    title: "Системтэй сургалтын хөтөлбөр",
    desc: "Анхан шатнаас мэргэжлийн түвшин хүртэл шат дараалсан сургалт.",
  },
  {
    icon: Trophy,
    title: "Тэмцээний бэлтгэл",
    desc: "Улс болон олон улсын тэмцээнд амжилттай оролцоход зориулсан тусгай бэлтгэл.",
  },
  {
    icon: Lightbulb,
    title: "Үр дүнтэй арга зүй",
    desc: "Хүүхэд болон насанд хүрэгчдэд ойлгомжтой, сонирхолтой сургалтын аргачлал.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid: text + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#D4AF37] font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
              Бидний тухай
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F8FAFC] mb-6 leading-tight">
              БОСОО НОЁН{" "}
              <br />
              <span className="text-[#D4AF37]">клубын тухай</span>
            </h2>
            <p className="text-[#F8FAFC]/70 font-body text-base md:text-lg leading-relaxed mb-4">
              БОСОО НОЁН клуб нь шатрын спортоор дамжуулан хүүхэд, залуучуудын
              логик сэтгэлгээ, сахилга бат, төвлөрөл болон өрсөлдөх чадварыг
              хөгжүүлэх зорилготой мэргэжлийн сургалтын байгууллага юм.
            </p>
            <p className="text-[#F8FAFC]/70 font-body text-base md:text-lg leading-relaxed">
              Манай клуб нь олон жилийн туршлагатай дасгалжуулагчид, системтэй
              сургалтын хөтөлбөр, тэмцээний бэлтгэлийн арга барилаар дамжуулан
              олон улсын болон улсын хэмжээний цолтон тамирчдыг бэлтгэн гаргаж байна.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl overflow-hidden border border-[#D4AF37]/20">
              <img
                src={STUDENT_IMAGE}
                alt="Шатрын сурагч"
                className="w-full h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#D4AF37]/30 rounded-xl" />
          </motion.div>
        </div>

        {/* Why choose us */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-heading font-bold text-[#F8FAFC] text-center mb-12"
        >
          Яагаад биднийг сонгох вэ?
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-[#0D1630] border border-[#1E40AF]/20 rounded-xl p-6 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-[#1E40AF]/15 flex items-center justify-center mb-4 group-hover:bg-[#D4AF37]/15 transition-colors duration-500">
                <f.icon size={24} className="text-[#1E40AF] group-hover:text-[#D4AF37] transition-colors duration-500" />
              </div>
              <h4 className="text-lg font-heading font-semibold text-[#F8FAFC] mb-2">
                {f.title}
              </h4>
              <p className="text-sm text-[#F8FAFC]/60 font-body leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

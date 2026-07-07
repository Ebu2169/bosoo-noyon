"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Users, Phone } from "lucide-react";

interface Teacher {
  period: string;
  main: string;
  assistant?: string;
  advisor?: string;
}

interface Branch {
  name: string;
  desc: string;
  address: string;
  mapLink: string | null;
  phones: string[];
  classSize: string;
  periods: { label: string; dates: string }[];
  periodNote?: string;
  fees: { level: string; price: string }[];
  schedule: { level: string; time: string }[];
  weekendSchedule?: string[];
  weekendNote?: string;
  teachers: Teacher[];
}

const branches: Branch[] = [
  {
    name: "Мөнгөн завьяа салбар",
    desc: "Хүүхдийн оюун ухаан, логик сэтгэлгээг хөгжүүлж, ирээдүйг тодруулцгаая!",
    address:
      "Сүхбаатар дүүрэг, 4-р хороо, 1-р 40 мянгат, Мөнгөн Завьяагийн урд 40 дугаар байр, 2 давхарт 13 тоот (Орос элчний баруун талд)",
    mapLink: null,
    phones: [],
    classSize: "8–10 хүүхэд",
    periods: [
      { label: "1-р ээлж", dates: "2026.06.02 – 2026.06.29" },
      { label: "2-р ээлж", dates: "2026.07.20 – 2026.08.14" },
    ],
    fees: [
      { level: "Амралтын өдрийн анги (Зөвхөн амралтын өдөр)", price: "250'000₮" },
      { level: "Дунд шат", price: "500'000₮" },
      { level: "Ахисан шат", price: "800'000₮" },
    ],
    schedule: [
      { level: "Өглөө", time: "09:00 – 11:30" },
      { level: "Өдөр", time: "12:30 – 15:00" },
      { level: "Ахисан шат", time: "15:00 – 18:00" },
    ],
    teachers: [
      { period: "Ахисан шат", main: "Э.Энхнар (FM), Б.Очирсүх (MK)" },
      { period: "Анхан болон Дунд шат", main: "Б.Очирсүх (MK), Сод-Эрдэнэ (WMK)" },
    ],
  },
  {
    name: "Яармаг салбар",
    desc: "Хүүхдийн оюун ухаан, логик сэтгэлгээг хөгжүүлж, ирээдүйг тодруулцгаая!",
    address:
      "Хан-Уул дүүрэг 23-р хороо, Арцатын амаар өгсөөд Мандала Гарден хотхоны үйлчилгээний төвийн 2 давхарт",
    mapLink: null,
    phones: ["99662900", "88501483"],
    classSize: "10–12 хүүхэд",
    periods: [
      { label: "1-р ээлж", dates: "6.15 – 7.10" },
      { label: "2-р ээлж", dates: "8.03 – 8.28" },
    ],
    periodNote: "5 өдөр, нэг ээлжинд нийт 20 хоног 40 цаг орно.",
    fees: [
      { level: "Анхан, Анхан дунд шат", price: "400'000₮" },
      { level: "Дунд, Ахисан шат", price: "500'000₮" },
    ],
    schedule: [
      { level: "Анхан", time: "10:00 – 12:00" },
      { level: "Анхан дунд", time: "12:30 – 14:30" },
      { level: "Дунд", time: "15:00 – 17:00" },
      { level: "Ахисан", time: "17:00 – 19:00" },
    ],
    teachers: [
      { period: "1-р ээлжинд", main: "ФМ Г.Булганхан", assistant: "Т.Мөнхзул" },
      { period: "2-р ээлжинд", main: "ДМ Б.Эрдэнэхөлөг, ФМ Г.Булганхан", advisor: "ФМ Э.Болдоо" },
    ],
  },
  {
    name: "Хороолол салбар",
    desc: "Хүүхдийн оюун ухаан, логик сэтгэлгээг хөгжүүлж, ирээдүйг тодруулцгаая!",
    address: "29/1, БГД - 32 хороо, Улаанбаатар 16092",
    mapLink: "https://maps.app.goo.gl/SGEZezuP5HhoxB3L7?g_st=ic",
    phones: ["99310683"],
    classSize: "10–15 хүүхэд",
    periods: [
      { label: "1-р ээлж", dates: "2026.06.02 – 06.29" },
      { label: "2-р ээлж", dates: "2026.07.01 – 08.11" },
    ],
    periodNote: "Ажлын 5 өдөр, 2 цаг 30 минутаар орно. Нэг ээлжинд нийт 50 цаг.",
    fees: [
      { level: "Ажлын өдрийн сургалт", price: "400'000₮" },
      { level: "Амралтын өдрийн сургалт", price: "250'000₮" },
    ],
    schedule: [
      { level: "09:00 – 11:30", time: "" },
      { level: "12:30 – 15:00", time: "" },
      { level: "15:30 – 18:00", time: "" },
    ],
    weekendSchedule: ["10:00 – 12:30", "13:30 – 16:00"],
    weekendNote: "Хагас, бүтэн сайн өдөр, 2 цаг 30 минутаар орно. Нэг ээлжинд нийт 20 цаг.",
    teachers: [],
  },
];

export default function Branches({ onEnrollClick }: { onEnrollClick: () => void }) {
  return (
    <section id="branches" className="py-20 md:py-32 bg-[#080E22]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Салбарууд
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F8FAFC]">
            Манай <span className="text-[#D4AF37]">салбарууд</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#0D1630] border border-[#1E40AF]/20 rounded-2xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#0A1128] to-[#0D1630] border-b border-[#D4AF37]/15 px-6 py-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={20} className="text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-[#F8FAFC]">
                      {branch.name}
                    </h3>
                    <p className="text-sm text-[#F8FAFC]/60 font-body mt-1">
                      {branch.desc}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-2 text-sm text-[#F8FAFC]/70 font-body">
                  <MapPin size={14} className="text-[#D4AF37] mt-0.5 flex-shrink-0" />
                  <span>{branch.address}</span>
                </div>

                {/* Periods */}
                {branch.periods && (
                  <div className="bg-[#0A1128]/60 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={15} className="text-[#D4AF37]" />
                      <span className="text-xs font-heading font-semibold text-[#D4AF37] uppercase tracking-wide">
                        Хугацаа
                      </span>
                    </div>
                    <div className="space-y-1.5 mb-2">
                      {branch.periods.map((p, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="text-xs font-body text-[#F8FAFC]/50 w-20">
                            {p.label}:
                          </span>
                          <span className="text-sm font-body font-medium text-[#F8FAFC]">
                            {p.dates}
                          </span>
                        </div>
                      ))}
                    </div>
                    {branch.periodNote && (
                      <p className="text-xs text-[#F8FAFC]/40 font-body">
                        {branch.periodNote}
                      </p>
                    )}
                  </div>
                )}

                {/* Fees */}
                {branch.fees && (
                  <div className="bg-[#0A1128]/60 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <DollarSign size={15} className="text-[#D4AF37]" />
                      <span className="text-xs font-heading font-semibold text-[#D4AF37] uppercase tracking-wide">
                        Төлбөр
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {branch.fees.map((f, j) => (
                        <div key={j} className="flex items-center justify-between gap-2">
                          <span className="text-xs font-body text-[#F8FAFC]/60">
                            {f.level}
                          </span>
                          <span className="text-sm font-heading font-semibold text-[#D4AF37] flex-shrink-0">
                            {f.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Schedule */}
                {branch.schedule && branch.schedule.some(s => s.time) && (
                  <div className="bg-[#0A1128]/60 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={15} className="text-[#D4AF37]" />
                      <span className="text-xs font-heading font-semibold text-[#D4AF37] uppercase tracking-wide">
                        Цагийн хуваарь
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {branch.schedule.map((s, j) => (
                        s.time && (
                          <div key={j} className="flex items-center justify-between gap-2">
                            <span className="text-xs font-body text-[#F8FAFC]/60">
                              {s.level}
                            </span>
                            <span className="text-sm font-body font-medium text-[#F8FAFC]">
                              {s.time}
                            </span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}

                {/* Weekend schedule */}
                {branch.weekendSchedule && (
                  <div className="bg-[#0A1128]/60 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Clock size={15} className="text-[#D4AF37]" />
                      <span className="text-xs font-heading font-semibold text-[#D4AF37] uppercase tracking-wide">
                        Амралтын өдрийн хуваарь
                      </span>
                    </div>
                    <div className="space-y-1.5 mb-2">
                      {branch.weekendSchedule.map((s, j) => (
                        <div key={j} className="text-sm font-body text-[#F8FAFC]">
                          {s}
                        </div>
                      ))}
                    </div>
                    {branch.weekendNote && (
                      <p className="text-xs text-[#F8FAFC]/40 font-body">
                        {branch.weekendNote}
                      </p>
                    )}
                  </div>
                )}

                {/* Class size */}
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-[#D4AF37] flex-shrink-0" />
                  <span className="text-sm font-body text-[#F8FAFC]/70">
                    Анги дүүргэлт: <strong className="text-[#F8FAFC]">{branch.classSize}</strong>
                  </span>
                </div>

                {/* Teachers */}
                {branch.teachers && branch.teachers.length > 0 && (
                  <div className="space-y-1.5">
                    {branch.teachers.map((t, j) => (
                      <div key={j} className="text-xs font-body text-[#F8FAFC]/60">
                        <span className="text-[#D4AF37]/80">{t.period}:</span>{" "}
                        <span className="text-[#F8FAFC]/80">{t.main}</span>
                        {t.assistant && <> · Туслах: {t.assistant}</>}
                        {t.advisor && <> · Зөвлөх: {t.advisor}</>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Phone */}
                {branch.phones && branch.phones.length > 0 && (
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#D4AF37] flex-shrink-0" />
                    <div className="flex gap-3">
                      {branch.phones.map((ph, j) => (
                        <a
                          key={j}
                          href={`tel:${ph}`}
                          className="text-sm font-body text-[#D4AF37] hover:text-[#E5C44D] transition-colors"
                        >
                          {ph}
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Map link */}
                {branch.mapLink && (
                  <a
                    href={branch.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-body text-[#D4AF37] hover:text-[#E5C44D] transition-colors"
                  >
                    <MapPin size={12} />
                    Байршил харах
                  </a>
                )}

                {/* Enroll CTA */}
                <button
                  onClick={onEnrollClick}
                  className="w-full bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-sm py-3 rounded-md hover:bg-[#E5C44D] transition-all duration-300 mt-2"
                >
                  Бүртгүүлэх
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

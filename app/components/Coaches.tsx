"use client";

import { motion } from "framer-motion";

const coaches = [
  {
    name: "Энхбаатарын Энхнар",
    badge: "FIDE Master",
    title: "Дэлхийн шатрын холбооны мастер",
    role: "Босоо Ноён клубын төв салбарын зөвлөх багш",
    imageUrl: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/67eb4ff0f_Enkhnar.jpg",
    imagePosition: "center",
    achievements: [
      "2002 оноос шатрын спортоор хичээллэж эхэлсэн",
      "2013 онд Дэлхийн шатрын холбооны мастер цол хүртсэн",
      "2023 онд Монгол Улсын шилдэг дасгалжуулагч шагнал хүртсэн",
      "Хөдөлмөрийн хүндэт медалиар шагнагдсан",
      "2026 онд Монгол Улсын шигшээ багийн шилдэг 11 тоглогчийн бүрэлдэхүүнд 10 дахь удаагаа шалгарсан",
      "Шатрын багшаар 11 жилийн турш ажилласан туршлагатай",
    ],
  },
  {
    name: "Эрдэнэпүрэвийн Болдоо",
    badge: "FIDE Master",
    title: "Дэлхийн шатрын холбооны мастер",
    role: "Босоо Ноён клубын Яармаг дахь салбарын зөвлөх багш",
    imageUrl: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/dcaa0ef55_Boldoo.jpg",
    imagePosition: "center",
    achievements: [
      "2016 оны Азийн аваргын алтан медальт",
      "2020 оны Aeroflot International тэмцээний аварга",
      "2020 оны Moscow Open тэмцээний аварга",
      "ОХУ-ын ГЦОЛИФК их сургуульд шатрын багш мэргэжлээр суралцаж байсан",
      "2023 оны сүүлээр Монгол Улсад ирж ажилласан",
      "2024–2025 онд Монгол Улсын шигшээ багийн тамирчин",
    ],
  },
  {
    name: "Батсайханы Эрдэнэхөлөг",
    badge: "Спортын дэд мастер",
    title: "Спортын дэд мастер",
    role: null,
    imageUrl: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/c328a21ff_Erdenehulug.jpg",
    imagePosition: "75% 15%",
    achievements: [
      "2015 онд Спортын дэд мастер",
      "2016 онд Сурагчдын Улсын Аварга шалгаруулах тэмцээний алт",
      "2017 онд Сурагчдын Азийн Аварга шалгаруулах тэмцээний блиц төрөлд хүрэл",
      "2017 онд Өсвөрийн Улсын Аварга шалгаруулах тэмцээний мөнгө",
      "Шатрын багшаар 6 жил ажилласан",
    ],
  },
  {
    name: "Наранбаатарын Сод-Эрдэнэ",
    badge: "Спортын мастер",
    title: "Төв салбарын туслах багш",
    role: null,
    imageUrl: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/df4b7d3c7_Soderdene.jpg",
    imagePosition: "center",
    achievements: [
      '"Цагаан Бэрс" түргэвчилсэн шатрын аварга шалгаруулах тэмцээний алтан медаль (3 удаа)',
      "2023 онд 72 дахь Oregon Open олон улсын шатрын тэмцээний алтан медаль",
      "2016 онд Өсвөрийн Азийн аварга шалгаруулах тэмцээний хүрэл медаль",
      "2014 онд Монгол Улсын аварга шалгаруулах тэмцээний хүрэл медаль",
      "Багшлаад нийт 3 жил болж байгаа",
    ],
  },
  {
    name: "Ганзоригийн Булганхан",
    badge: "FIDE Master",
    title: "FIDE Master",
    role: null,
    imageUrl: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/fbac37385_Bulganhan.jpg",
    imagePosition: "center",
    achievements: [
      "2017 онд FIDE Master цол авсан",
      "2017 онд Зүүн Азийн аварга шалгаруулах тэмцээний алт, мөнгөн медаль",
      "Монгол улсын өсвөрийн аварга шалгаруулах тэмцээний хошой мөнгөн медальт",
      "2023 оны насанд хүрэгчдийн шигшээ тэмцээний 6-р байр",
      "Шатрын спортоор 2015 оноос хойш хичээллэж",
      "2024 оноос шатрын багш хийж байгаа",
    ],
  },
  {
    name: "Батсайханы Очирсүх",
    badge: "Спортын мастер",
    title: "Спортын мастер",
    role: null,
    imageUrl: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/4055cbebd_Ochirsuh.jpg",
    imagePosition: "center 15%",
    achievements: [
      "2010 оноос хойш шатрын спортоор хичээллэж",
      "2016 онд Өсвөрийн Азийн аварга шалгаруулах тэмцээний хүрэл медальт",
      "2021 онд Монгол улсын мастер цол авсан",
      "2024 онд Монгол улсын шилдэг дасгалжуулагч болсон",
      "2026 онд Багийн дэлхийн аварга шалгаруулах тэмцээний мөнгөн медаль хүртсэн",
    ],
  },
  {
    name: "Хатанзоригийн Буянхишиг",
    badge: null,
    title: "Багш",
    role: null,
    imageUrl: "https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/8330da9bd_Buynhishig.jpg",
    imagePosition: "center 15%",
    achievements: [
      "Шатрын спортоор 2020 оноос хойш хичээллэсэн",
      "Хүүхэдтэй харьцах чадвар болон сургах арга барил сайтай",
      "Бага насны хүүхдүүдэд шатрыг сонирхолтойгоор ойлгуулдаг",
      "2025 оноос эхлэн хийж байгаа анхан, дунд шатруу чиглэсэн дасгалжуулагч",
    ],
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-20 md:py-32 bg-[#0A1128]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            Дасгалжуулагчид
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#F8FAFC]">
            Манай <span className="text-[#D4AF37]">дасгалжуулагчид</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-[#0D1630] border border-[#1E40AF]/20 rounded-xl overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              <div className="relative h-72 md:h-80 overflow-hidden">
                <img
                  src={coach.imageUrl}
                  alt={coach.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: coach.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1630] via-[#0D1630]/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  {coach.badge && (
                    <span className="inline-block bg-[#D4AF37] text-[#0A1128] text-xs font-heading font-bold px-3 py-1 rounded-full mb-2">
                      {coach.badge}
                    </span>
                  )}
                  <h3 className="text-xl font-heading font-bold text-[#F8FAFC]">
                    {coach.name}
                  </h3>
                  <p className="text-sm text-[#D4AF37] font-body">{coach.title}</p>
                </div>
              </div>
              <div className="p-6">
                {coach.role && (
                  <p className="text-sm text-[#F8FAFC]/50 font-body mb-4 italic">
                    {coach.role}
                  </p>
                )}
                <ul className="space-y-2">
                  {coach.achievements.map((ach, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-sm text-[#F8FAFC]/70 font-body"
                    >
                      <span className="text-[#D4AF37] mt-0.5 flex-shrink-0">▸</span>
                      {ach}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

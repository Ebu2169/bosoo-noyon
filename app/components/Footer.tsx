"use client";

const footerLinks = [
  { label: "Нүүр", href: "#hero" },
  { label: "Бидний тухай", href: "#about" },
  { label: "Сургалтууд", href: "#programs" },
  { label: "Салбарууд", href: "#branches" },
  { label: "Дасгалжуулагчид", href: "#coaches" },
  { label: "Амжилтууд", href: "#achievements" },
  { label: "Түгээмэл асуултууд", href: "#faq" },
];

export default function Footer({ onEnrollClick }: { onEnrollClick: () => void }) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060B1A] border-t border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
          {/* Logo & desc */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/c34f28b5f_logo.png"
                alt="Босоо Ноён лого"
                className="h-10 w-10 object-contain rounded"
              />
              <span className="text-[#F8FAFC] font-heading font-bold text-xl">
                БОСОО НОЁН
              </span>
            </div>
            <p className="text-[#F8FAFC]/50 font-body text-sm leading-relaxed">
              Монголын тэргүүлэгч мэргэжлийн шатрын клуб. Шатрын спортоор
              дамжуулан ирээдүйн стратегичдыг бэлтгэнэ.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={onEnrollClick}
            className="bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-base px-8 py-3.5 rounded-md hover:bg-[#E5C44D] transition-all duration-300 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          >
            Хичээлд бүртгүүлэх
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-8" />

        {/* Nav links */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center mb-8">
          {footerLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-[#F8FAFC]/50 hover:text-[#D4AF37] font-body text-sm transition-colors duration-200 focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent mb-8" />

        {/* Copyright */}
        <p className="text-[#F8FAFC]/30 font-body text-sm text-center">
          © 2026 БОСОО НОЁН. Бүх эрх хуулиар хамгаалагдсан.
        </p>
      </div>
    </footer>
  );
}

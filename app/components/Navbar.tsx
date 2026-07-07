"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Нүүр", href: "#hero" },
  { label: "Бидний тухай", href: "#about" },
  { label: "Сургалтууд", href: "#programs" },
  { label: "Салбарууд", href: "#branches" },
  { label: "Дасгалжуулагчид", href: "#coaches" },
  { label: "Амжилтууд", href: "#achievements" },
  { label: "Түгээмэл асуултууд", href: "#faq" },
];

export default function Navbar({ onEnrollClick }: { onEnrollClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A1128]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-[#D4AF37]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("#hero")}
              className="flex items-center gap-3 focus:outline-none"
            >
              <img
                src="https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/c34f28b5f_logo.png"
                alt="Босоо Ноён лого"
                className="h-9 w-9 object-contain rounded"
              />
              <span className="text-[#F8FAFC] font-heading font-bold text-lg tracking-wide">
                БОСОО НОЁН
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-[#F8FAFC]/70 hover:text-[#D4AF37] font-body text-sm px-3 py-2 transition-colors duration-200 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA + hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={onEnrollClick}
                className="hidden md:flex bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#E5C44D] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              >
                Бүртгүүлэх
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden text-[#F8FAFC] p-2 focus:outline-none"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#0A1128]/98 backdrop-blur-md border-t border-[#D4AF37]/10">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left text-[#F8FAFC]/80 hover:text-[#D4AF37] font-body text-base px-3 py-3 transition-colors duration-200 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => { setMenuOpen(false); onEnrollClick(); }}
                className="w-full bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-base px-5 py-3 rounded-md hover:bg-[#E5C44D] transition-all duration-300 mt-3"
              >
                Бүртгүүлэх
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Branches from "./components/Branches";
import Coaches from "./components/Coaches";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import EnrollmentModal from "./components/EnrollmentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowStickyBar(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar onEnrollClick={() => setModalOpen(true)} />
      <main>
        <Hero onEnrollClick={() => setModalOpen(true)} />
        <About />
        <Programs onEnrollClick={() => setModalOpen(true)} />
        <Branches onEnrollClick={() => setModalOpen(true)} />
        <Coaches />
        <Achievements />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onEnrollClick={() => setModalOpen(true)} />

      {/* Mobile sticky CTA */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
          <div
            className="bg-[#0A1128]/90 backdrop-blur-lg border-t border-[#D4AF37]/20 px-4 py-3"
            style={{
              paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
              paddingLeft: "max(1rem, env(safe-area-inset-left))",
              paddingRight: "max(1rem, env(safe-area-inset-right))",
            }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-base py-3.5 rounded-md hover:bg-[#E5C44D] transition-all duration-300 min-h-[48px] focus:outline-none"
              style={{ animationDuration: "3s" }}
            >
              Хичээлд бүртгүүлэх
            </button>
          </div>
        </div>
      )}

      <EnrollmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2 } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const branches = ["Мөнгөн завьяа салбар", "Яармаг салбар", "Хороолол салбар"];
const levels = ["Анхан шат", "Дунд шат", "Ахисан шат"];

export default function EnrollmentModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    age: "",
    branch: "",
    level: "",
    notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.branch || !form.level) {
      setErrorMsg("Бүх шаардлагатай талбарыг бөглөнө үү.");
      return;
    }
    setErrorMsg("");
    setStatus("loading");

    try {
      const res = await fetch("/api/enrollments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const handleClose = () => {
    if (status === "loading") return;
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", phone: "", age: "", branch: "", level: "", notes: "" });
      setErrorMsg("");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-[#0D1630] border border-[#D4AF37]/20 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#1E40AF]/20">
                <div>
                  <h2 className="text-xl font-heading font-bold text-[#F8FAFC]">
                    Хичээлд бүртгүүлэх
                  </h2>
                  <p className="text-sm text-[#F8FAFC]/50 font-body mt-0.5">
                    Доорх мэдээллийг бөглөнө үү
                  </p>
                </div>
                <button
                  onClick={handleClose}
                  className="text-[#F8FAFC]/50 hover:text-[#F8FAFC] transition-colors focus:outline-none p-1"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle size={56} className="text-[#D4AF37] mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-bold text-[#F8FAFC] mb-2">
                      Бүртгэл амжилттай!
                    </h3>
                    <p className="text-[#F8FAFC]/60 font-body text-sm mb-6">
                      Таны хүсэлт хүлээн авлаа. Бид тантай удахгүй холбогдох болно.
                    </p>
                    <button
                      onClick={handleClose}
                      className="bg-[#D4AF37] text-[#0A1128] font-heading font-bold px-6 py-3 rounded-md hover:bg-[#E5C44D] transition-all duration-300"
                    >
                      Хаах
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-body font-medium text-[#F8FAFC]/80 mb-1.5">
                        Нэр <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Таны нэрийг бичнэ үү"
                        className="w-full bg-[#0A1128] border border-[#1E40AF]/30 focus:border-[#D4AF37]/50 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/30 font-body text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-body font-medium text-[#F8FAFC]/80 mb-1.5">
                        Утасны дугаар <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="99xxxxxx"
                        className="w-full bg-[#0A1128] border border-[#1E40AF]/30 focus:border-[#D4AF37]/50 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/30 font-body text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Age */}
                    <div>
                      <label className="block text-sm font-body font-medium text-[#F8FAFC]/80 mb-1.5">
                        Нас
                      </label>
                      <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                        placeholder="Жишээ: 8"
                        min={4}
                        max={100}
                        className="w-full bg-[#0A1128] border border-[#1E40AF]/30 focus:border-[#D4AF37]/50 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/30 font-body text-sm outline-none transition-colors"
                      />
                    </div>

                    {/* Branch */}
                    <div>
                      <label className="block text-sm font-body font-medium text-[#F8FAFC]/80 mb-1.5">
                        Салбар <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        name="branch"
                        value={form.branch}
                        onChange={handleChange}
                        className="w-full bg-[#0A1128] border border-[#1E40AF]/30 focus:border-[#D4AF37]/50 rounded-lg px-4 py-3 text-[#F8FAFC] font-body text-sm outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" className="text-[#F8FAFC]/30">
                          Салбараа сонгоно уу
                        </option>
                        {branches.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Level */}
                    <div>
                      <label className="block text-sm font-body font-medium text-[#F8FAFC]/80 mb-1.5">
                        Хичээлийн түвшин <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {levels.map((l) => (
                          <button
                            key={l}
                            type="button"
                            onClick={() => setForm((p) => ({ ...p, level: l }))}
                            className={`py-2.5 px-3 rounded-lg border font-body text-sm transition-all duration-200 focus:outline-none ${
                              form.level === l
                                ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]"
                                : "bg-[#0A1128] border-[#1E40AF]/30 text-[#F8FAFC]/60 hover:border-[#D4AF37]/40"
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-sm font-body font-medium text-[#F8FAFC]/80 mb-1.5">
                        Нэмэлт мэдээлэл
                      </label>
                      <textarea
                        name="notes"
                        value={form.notes}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Асуулт, хүсэлт байвал бичнэ үү"
                        className="w-full bg-[#0A1128] border border-[#1E40AF]/30 focus:border-[#D4AF37]/50 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/30 font-body text-sm outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Error */}
                    {errorMsg && (
                      <p className="text-red-400 font-body text-sm">{errorMsg}</p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-base py-4 rounded-md hover:bg-[#E5C44D] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed min-h-[52px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Илгээж байна...
                        </>
                      ) : (
                        "Бүртгүүлэх"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

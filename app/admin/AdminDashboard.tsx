"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Users,
  MapPin,
  BookOpen,
  RefreshCw,
  Search,
  Calendar,
  Phone,
  ChevronDown,
  TrendingUp,
  ArrowLeft,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { signOut } from "./actions";

interface Enrollment {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  age?: string;
  branch: string;
  level: string;
  notes?: string;
}

const BRANCH_COLORS: Record<string, string> = {
  "Мөнгөн завьяа салбар": "#1E40AF",
  "Яармаг салбар": "#D4AF37",
  "Хороолол салбар": "#16A34A",
};

const LEVEL_COLORS: Record<string, string> = {
  "Анхан шат": "#1E40AF",
  "Дунд шат": "#D4AF37",
  "Ахисан шат": "#DC2626",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("mn-MN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function AdminDashboard({
  initialEnrollments,
  userEmail,
}: {
  initialEnrollments: Enrollment[];
  userEmail: string;
}) {
  const [enrollments, setEnrollments] = useState(initialEnrollments);
  const [search, setSearch] = useState("");
  const [filterBranch, setFilterBranch] = useState("all");
  const [filterLevel, setFilterLevel] = useState("all");
  const [sortBy, setSortBy] = useState<"date" | "name">("date");
  const [refreshing, setRefreshing] = useState(false);

  const refresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/enrollments");
      const data = await res.json();
      setEnrollments(data);
    } catch {}
    setRefreshing(false);
  }, []);

  useEffect(() => {
    const interval = setInterval(refresh, 30000);
    return () => clearInterval(interval);
  }, [refresh]);

  const filtered = enrollments
    .filter((e) => {
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        e.name.toLowerCase().includes(q) ||
        e.phone.includes(q) ||
        (e.branch || "").toLowerCase().includes(q);
      const matchBranch = filterBranch === "all" || e.branch === filterBranch;
      const matchLevel = filterLevel === "all" || e.level === filterLevel;
      return matchSearch && matchBranch && matchLevel;
    })
    .sort((a, b) => {
      if (sortBy === "date")
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return a.name.localeCompare(b.name, "mn");
    });

  // Stats
  const branchCounts = enrollments.reduce<Record<string, number>>((acc, e) => {
    acc[e.branch] = (acc[e.branch] || 0) + 1;
    return acc;
  }, {});
  const levelCounts = enrollments.reduce<Record<string, number>>((acc, e) => {
    acc[e.level] = (acc[e.level] || 0) + 1;
    return acc;
  }, {});

  const uniqueBranches = [...new Set(enrollments.map((e) => e.branch))];
  const uniqueLevels = [...new Set(enrollments.map((e) => e.level))];

  return (
    <div className="min-h-screen bg-[#080E22] text-[#F8FAFC]">
      {/* Header */}
      <div className="bg-[#0A1128] border-b border-[#D4AF37]/15 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-1.5 text-[#F8FAFC]/50 hover:text-[#D4AF37] text-sm font-body transition-colors"
              >
                <ArrowLeft size={16} />
                <span className="hidden sm:inline">Вэбсайт руу буцах</span>
              </Link>
              <div className="w-px h-5 bg-[#F8FAFC]/10" />
              <div className="flex items-center gap-3">
                <img
                  src="https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/c34f28b5f_logo.png"
                  alt="logo"
                  className="h-7 w-7 object-contain rounded"
                />
                <div>
                  <h1 className="text-[#F8FAFC] font-heading font-bold text-lg leading-none">
                    БОСОО НОЁН
                  </h1>
                  <p className="text-[#D4AF37] font-body text-xs">Админ хяналт</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline text-[#F8FAFC]/30 font-body text-xs">
                {userEmail}
              </span>
              <button
                onClick={refresh}
                disabled={refreshing}
                className="flex items-center gap-2 bg-[#0D1630] border border-[#1E40AF]/30 hover:border-[#D4AF37]/40 text-[#F8FAFC]/70 hover:text-[#F8FAFC] font-body text-sm px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50"
              >
                <RefreshCw size={14} className={refreshing ? "animate-spin" : ""} />
                <span className="hidden sm:inline">Шинэчлэх</span>
              </button>
              <form action={signOut}>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-[#0D1630] border border-[#1E40AF]/30 hover:border-red-500/40 text-[#F8FAFC]/70 hover:text-red-400 font-body text-sm px-3 py-2 rounded-lg transition-all duration-200 focus:outline-none"
                >
                  <LogOut size={14} />
                  <span className="hidden sm:inline">Гарах</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#0D1630] border border-[#D4AF37]/15 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                <Users size={18} className="text-[#D4AF37]" />
              </div>
              <span className="text-[#F8FAFC]/60 font-body text-sm">Нийт бүртгэл</span>
            </div>
            <p className="text-3xl font-heading font-bold text-[#D4AF37]">
              {enrollments.length}
            </p>
          </div>

          <div className="bg-[#0D1630] border border-[#1E40AF]/20 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#1E40AF]/10 flex items-center justify-center">
                <MapPin size={18} className="text-[#1E40AF]" />
              </div>
              <span className="text-[#F8FAFC]/60 font-body text-sm">Идэвхтэй салбар</span>
            </div>
            <p className="text-3xl font-heading font-bold text-[#F8FAFC]">
              {uniqueBranches.length}
            </p>
          </div>

          <div className="bg-[#0D1630] border border-[#16A34A]/20 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#16A34A]/10 flex items-center justify-center">
                <BookOpen size={18} className="text-[#16A34A]" />
              </div>
              <span className="text-[#F8FAFC]/60 font-body text-sm">Анхан шат</span>
            </div>
            <p className="text-3xl font-heading font-bold text-[#F8FAFC]">
              {levelCounts["Анхан шат"] || 0}
            </p>
          </div>

          <div className="bg-[#0D1630] border border-[#D4AF37]/15 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center">
                <TrendingUp size={18} className="text-[#D4AF37]" />
              </div>
              <span className="text-[#F8FAFC]/60 font-body text-sm">Ахисан шат</span>
            </div>
            <p className="text-3xl font-heading font-bold text-[#F8FAFC]">
              {levelCounts["Ахисан шат"] || 0}
            </p>
          </div>
        </div>

        {/* Branch breakdown */}
        {uniqueBranches.length > 0 && (
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {uniqueBranches.map((branch) => (
              <div
                key={branch}
                className="bg-[#0D1630] border border-[#1E40AF]/15 rounded-xl p-4 flex items-center gap-4"
              >
                <div
                  className="w-2 h-10 rounded-full flex-shrink-0"
                  style={{ backgroundColor: BRANCH_COLORS[branch] || "#D4AF37" }}
                />
                <div>
                  <p className="text-[#F8FAFC]/60 font-body text-xs">{branch}</p>
                  <p className="text-2xl font-heading font-bold text-[#F8FAFC]">
                    {branchCounts[branch] || 0}
                    <span className="text-sm font-body text-[#F8FAFC]/40 ml-1">бүртгэл</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Filters */}
        <div className="bg-[#0D1630] border border-[#1E40AF]/15 rounded-xl p-4 mb-6">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#F8FAFC]/30"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Нэр, утас, салбараар хайх..."
                className="w-full bg-[#0A1128] border border-[#1E40AF]/20 focus:border-[#D4AF37]/50 rounded-lg pl-9 pr-4 py-2.5 text-[#F8FAFC] placeholder-[#F8FAFC]/30 font-body text-sm outline-none transition-colors"
              />
            </div>

            {/* Branch filter */}
            <div className="relative">
              <select
                value={filterBranch}
                onChange={(e) => setFilterBranch(e.target.value)}
                className="bg-[#0A1128] border border-[#1E40AF]/20 focus:border-[#D4AF37]/50 rounded-lg px-3 py-2.5 pr-8 text-[#F8FAFC] font-body text-sm outline-none appearance-none cursor-pointer"
              >
                <option value="all">Бүх салбар</option>
                {uniqueBranches.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#F8FAFC]/40 pointer-events-none" />
            </div>

            {/* Level filter */}
            <div className="relative">
              <select
                value={filterLevel}
                onChange={(e) => setFilterLevel(e.target.value)}
                className="bg-[#0A1128] border border-[#1E40AF]/20 focus:border-[#D4AF37]/50 rounded-lg px-3 py-2.5 pr-8 text-[#F8FAFC] font-body text-sm outline-none appearance-none cursor-pointer"
              >
                <option value="all">Бүх түвшин</option>
                {uniqueLevels.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#F8FAFC]/40 pointer-events-none" />
            </div>

            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "date" | "name")}
                className="bg-[#0A1128] border border-[#1E40AF]/20 focus:border-[#D4AF37]/50 rounded-lg px-3 py-2.5 pr-8 text-[#F8FAFC] font-body text-sm outline-none appearance-none cursor-pointer"
              >
                <option value="date">Огноогоор</option>
                <option value="name">Нэрээр</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#F8FAFC]/40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-[#F8FAFC]/40 font-body text-sm mb-4">
          {filtered.length} бүртгэл харуулж байна
          {filtered.length !== enrollments.length && ` (нийт ${enrollments.length}-аас)`}
        </p>

        {/* Table/Cards */}
        {filtered.length === 0 ? (
          <div className="bg-[#0D1630] border border-[#1E40AF]/15 rounded-xl p-16 text-center">
            <Users size={40} className="text-[#F8FAFC]/20 mx-auto mb-3" />
            <p className="text-[#F8FAFC]/40 font-body">
              {enrollments.length === 0
                ? "Бүртгэл байхгүй байна."
                : "Хайлтад тохирох бүртгэл олдсонгүй."}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden lg:block bg-[#0D1630] border border-[#1E40AF]/15 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#1E40AF]/15">
                    <th className="text-left px-5 py-3.5 text-xs font-heading font-semibold text-[#F8FAFC]/40 uppercase tracking-wide">
                      Нэр
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-heading font-semibold text-[#F8FAFC]/40 uppercase tracking-wide">
                      Утас
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-heading font-semibold text-[#F8FAFC]/40 uppercase tracking-wide">
                      Нас
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-heading font-semibold text-[#F8FAFC]/40 uppercase tracking-wide">
                      Салбар
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-heading font-semibold text-[#F8FAFC]/40 uppercase tracking-wide">
                      Түвшин
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-heading font-semibold text-[#F8FAFC]/40 uppercase tracking-wide">
                      Огноо
                    </th>
                    <th className="text-left px-5 py-3.5 text-xs font-heading font-semibold text-[#F8FAFC]/40 uppercase tracking-wide">
                      Нэмэлт
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((e, i) => (
                    <tr
                      key={e.id}
                      className={`border-b border-[#1E40AF]/10 hover:bg-[#0A1128]/50 transition-colors ${
                        i === filtered.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                            <span className="text-[#D4AF37] font-heading font-bold text-xs">
                              {e.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <span className="font-body font-medium text-[#F8FAFC] text-sm">
                            {e.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <a
                          href={`tel:${e.phone}`}
                          className="flex items-center gap-1.5 text-[#F8FAFC]/70 hover:text-[#D4AF37] font-body text-sm transition-colors"
                        >
                          <Phone size={13} />
                          {e.phone}
                        </a>
                      </td>
                      <td className="px-5 py-4">
                        <span className="text-[#F8FAFC]/60 font-body text-sm">
                          {e.age || "—"}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{
                              backgroundColor: BRANCH_COLORS[e.branch] || "#D4AF37",
                            }}
                          />
                          <span className="text-[#F8FAFC]/80 font-body text-sm">
                            {e.branch}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-heading font-semibold"
                          style={{
                            backgroundColor: `${LEVEL_COLORS[e.level] || "#D4AF37"}20`,
                            color: LEVEL_COLORS[e.level] || "#D4AF37",
                          }}
                        >
                          {e.level}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5 text-[#F8FAFC]/50 font-body text-xs">
                          <Calendar size={12} />
                          {formatDate(e.createdAt)}
                        </div>
                      </td>
                      <td className="px-5 py-4 max-w-[200px]">
                        <span className="text-[#F8FAFC]/50 font-body text-xs line-clamp-2">
                          {e.notes || "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="lg:hidden space-y-3">
              {filtered.map((e) => (
                <div
                  key={e.id}
                  className="bg-[#0D1630] border border-[#1E40AF]/15 rounded-xl p-5"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37]/15 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4AF37] font-heading font-bold text-sm">
                          {e.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <p className="text-[#F8FAFC] font-heading font-semibold text-base">
                          {e.name}
                        </p>
                        <a
                          href={`tel:${e.phone}`}
                          className="flex items-center gap-1 text-[#D4AF37] font-body text-sm"
                        >
                          <Phone size={12} />
                          {e.phone}
                        </a>
                      </div>
                    </div>
                    <span
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-heading font-semibold flex-shrink-0"
                      style={{
                        backgroundColor: `${LEVEL_COLORS[e.level] || "#D4AF37"}20`,
                        color: LEVEL_COLORS[e.level] || "#D4AF37",
                      }}
                    >
                      {e.level}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-[#F8FAFC]/40 font-body text-xs mb-0.5">Салбар</p>
                      <div className="flex items-center gap-1.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: BRANCH_COLORS[e.branch] || "#D4AF37" }}
                        />
                        <span className="text-[#F8FAFC]/80 font-body text-xs">{e.branch}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#F8FAFC]/40 font-body text-xs mb-0.5">Нас</p>
                      <span className="text-[#F8FAFC]/70 font-body text-xs">
                        {e.age || "—"}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[#F8FAFC]/40 font-body text-xs mt-3 pt-3 border-t border-[#1E40AF]/10">
                    <Calendar size={11} />
                    {formatDate(e.createdAt)}
                  </div>

                  {e.notes && (
                    <p className="text-[#F8FAFC]/40 font-body text-xs mt-2 italic">
                      {e.notes}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

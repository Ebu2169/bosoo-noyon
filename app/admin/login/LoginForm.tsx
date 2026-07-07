"use client";

import { useActionState } from "react";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";
import { useState } from "react";
import { signIn } from "../actions";

const initialState = { error: "" };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, initialState);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="space-y-5">
      <div>
        <label className="block text-sm font-body font-medium text-[#F8FAFC]/70 mb-1.5">
          Имэйл хаяг
        </label>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="admin@bosoonoyon.mn"
          className="w-full bg-[#0A1128] border border-[#1E40AF]/30 focus:border-[#D4AF37]/60 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#F8FAFC]/20 font-body text-sm outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-[#F8FAFC]/70 mb-1.5">
          Нууц үг
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className="w-full bg-[#0A1128] border border-[#1E40AF]/30 focus:border-[#D4AF37]/60 rounded-lg px-4 py-3 pr-11 text-[#F8FAFC] placeholder-[#F8FAFC]/20 font-body text-sm outline-none transition-colors"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F8FAFC]/30 hover:text-[#F8FAFC]/70 transition-colors focus:outline-none"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </div>

      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <p className="text-red-400 font-body text-sm">{state.error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-[#D4AF37] text-[#0A1128] font-heading font-bold text-base py-3.5 rounded-lg hover:bg-[#E5C44D] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#D4AF37] min-h-[52px]"
      >
        {pending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Нэвтэрч байна...
          </>
        ) : (
          <>
            <LogIn size={18} />
            Нэвтрэх
          </>
        )}
      </button>
    </form>
  );
}

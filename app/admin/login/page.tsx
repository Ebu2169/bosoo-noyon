import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#080E22] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <img
            src="https://media.base44.com/images/public/6a388cb6d4946cb79c88b96e/c34f28b5f_logo.png"
            alt="Босоо Ноён лого"
            className="h-14 w-14 object-contain rounded-xl mb-4"
          />
          <h1 className="text-[#F8FAFC] font-heading font-bold text-2xl">
            БОСОО НОЁН
          </h1>
          <p className="text-[#D4AF37] font-body text-sm mt-1">Админ нэвтрэх</p>
        </div>

        {/* Card */}
        <div className="bg-[#0D1630] border border-[#D4AF37]/20 rounded-2xl p-8 shadow-2xl">
          <LoginForm />
        </div>

        <p className="text-center text-[#F8FAFC]/20 font-body text-xs mt-6">
          © 2026 БОСОО НОЁН. Зөвхөн зөвшөөрөлтэй хэрэглэгчдэд зориулсан.
        </p>
      </div>
    </div>
  );
}

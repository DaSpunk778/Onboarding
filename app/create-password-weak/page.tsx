"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Eye, EyeOff } from "lucide-react"

type StrengthState = "weak" | "strong"

const strengthConfig = {
  weak: {
    label: "Weak",
    color: "text-[#FF7366]",
    barColor: "bg-[#FF7366]",
    barWidth: "w-1/4",
  },
  strong: {
    label: "Strong",
    color: "text-[#4CAF50]",
    barColor: "bg-[#4CAF50]",
    barWidth: "w-full",
  },
}

export default function CreatePasswordPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [strength, setStrength] = useState<StrengthState>("weak")

  const requirements = [
    "Must be at least 6 characters",
    "Use a mix of Upper case and lower case",
    "Must be strong",
  ]

  const handleContinue = () => {
    if (strength === "weak") {
      setStrength("strong")
    } else {
      router.push("/login")
    }
  }

  const config = strengthConfig[strength]

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1D1D1D] via-[#232222] via-10% to-[#181717] text-white flex flex-col items-center">
      <div className="w-full max-w-97.5 bg-linear-to-b from-[#1D1D1D] via-[#1e1e1e] via-15% to-[#000000] flex flex-col min-h-screen">

        
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030] bg-[#151515]">
          <button onClick={() => router.back()}>
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-semibold text-white">Create Password</h1>
          <div className="w-5" />
        </div>

        
        <div className="flex flex-col flex-1 px-5 pt-8">

          <h2 className="text-[16px] font-bold leading-[1.2] tracking-[-0.02em] text-white mb-2 ml-2">
            Welcome to Korrect Trivia
          </h2>

          
          <p className="text-[#888888] text-[13.5px] font-normal tracking-normal mb-6 mt-1 ml-2 leading-relaxed">
            Create your unique password to finish setting up your account, Kindly follow the password requirements below
          </p>

          
          <label className="text-[#888888] text-[13px] mb-1">Password</label>
          <div className="relative mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] pr-10 bg-[#222222] text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ?  <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>

          {/* Strengths side */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#888888] text-xs w-14">Strenght</span>
            <div className="flex-1 h-1.5 bg-[#303030] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${config.barColor} ${config.barWidth}`}
              />
            </div>
            <span className={`text-xs font-semibold w-10 text-right ${config.color}`}>
              {config.label}
            </span>
          </div>

          {/* Requirements */}
          <div className="flex flex-col gap-2 mb-8 ml-1">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border border-[#ffffff] flex items-center justify-center shrink-0">
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                    <path
                      d="M1 3L3 5L7 1"
                      stroke="#888888"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[#888888] text-xs">{req}</span>
              </div>
            ))}
          </div>


          <button
            onClick={handleContinue}
            className="w-full h-11.5 rounded-xl p-[8px_24px] bg-primary text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 mb-6 mt-34"
          >
            Continue
          </button>

        </div>
      </div>
    </div>
  )
}
"use client"
import { useRouter } from "next/navigation"
import { useRef, useState } from "react"
import { ChevronLeft, LockKeyhole } from "lucide-react"

export default function OTPVerifyPage() {
  const router = useRouter()
  const [otp, setOtp] = useState(["", "", "", ""])
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return 
    const newOtp = [...otp]
    newOtp[index] = value.slice(-1) 
    setOtp(newOtp)

    // auto move to next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    // move back on backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1D1D1D] via-[#232222] via-10% to-[#181717] text-white flex flex-col items-center">
      <div className="w-full max-w-97.5 bg-linear-to-b from-[#1D1D1D] via-[#1e1e1e] via-15% to-[#000000] flex flex-col min-h-screen">

        
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030] bg-[#151515]">
          <button onClick={() => router.back()}> 
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-semibold text-white">OTP verify</h1>
          <div className="w-5" />
        </div>

       <div className="flex flex-col flex-1 items-center justify-start pt-18 px-5 text-center gap-4">

          {/* Lock Icon */}
          <div className="w-20 h-20 rounded-full bg-primary-dark flex items-center justify-center mb-8">
            <LockKeyhole className="w-8 h-8 text-primary" />
          </div>

          <p className="text-[#ffffff] text-sm font-normal leading-relaxed tracking-normal max-w-53 mt-3">
            Kindly enter the OTP Verification code sent to your mobile number ending with ******110
          </p>

          {/* OTP Boxes */}
          <div className="flex gap-4 justify-center">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 rounded-[10px] border border-[#303030] bg-transparent text-white text-xl font-bold text-center outline-none transition-all duration-200 focus:border-primary focus:ring-1 focus:ring-primary"
              />
            ))}
          </div>

          {/* Resend Text */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-[#888888] text-xs">
              Didn't receive any code? resend in
            </p>
            <span className="text-primary text-xs font-semibold">
              2 minutes
            </span>
          </div>

          <button
                onClick={() => router.push("/otp-verify")}
                className="w-full h-11.5 mt-20 rounded-xl p-[8px_24px] bg-primary text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                Submit
                </button>
         

        </div>
        
      </div>
    </div>
  )
}
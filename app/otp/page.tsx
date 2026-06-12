"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft, LockKeyhole, LockKeyholeOpen } from "lucide-react"

export default function OTPPage() {
  const router = useRouter()

  
    return (
        <div className="min-h-screen bg-linear-to-b from-[#1D1D1D] via-[#232222] via-10% to-[#181717] text-white flex flex-col items-center">
        <div className="w-full max-w-97.5 bg-linear-to-b from-[#1D1D1D] via-[#1e1e1e] via-15% to-[#000000] flex flex-col min-h-screen">

        <div className="sticky top-0 z-50  flex items-center justify-between px-5 py-4 border-b border-[#303030] bg-[#151515]">
          <button onClick={() => router.back()}> 
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-semibold text-white">Reset Password</h1>
          <div className="w-5" />
        </div>


        
        <div className="flex flex-col flex-1 items-center justify-start pt-23 px-5 text-center gap-4">

          {/* Lock Icon */}
          <div className="w-20 h-20 rounded-full bg-primary-dark flex items-center justify-center mb-8">
            <LockKeyhole className="w-8 h-8 text-primary" />
          </div>

          <p className="text-[#ffffff] text-sm font-normal leading-relaxed tracking-normal max-w-53 mt-3">
            Are you sure you want to receive OTP with your mobile number ending with ******110
          </p>

            <button
                onClick={() => router.push("/otp-verify")}
                className="w-full h-11.5 mt-50 rounded-xl p-[8px_24px] bg-primary text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                Request OTP
                </button>
         

        </div>

        </div>
    </div>
    )
}
'use client'
import { ChevronLeft } from "lucide-react";
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react";



export default function PasswordResetPage() {
    const router = useRouter()

const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value

  if (/^[+]?[0-9]*$/.test(value)) {
    e.target.value = value
  } else {
    e.target.value = value.replace(/[^0-9+]/g, "")
  }
}


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

        
        <div className="flex flex-col flex-1 px-5 pt-8">
            <h2 className="font-inter text-[16px] font-bold leading-[1.2] tracking-[-0.02em] text-white mb-1 ml-2">
              Password reset  
            </h2>
            <p className="text-[#888888] font-inter text-[13.5px] font-normal tracking-normal mb-2 mt-2 ml-2">
              Kindly enter the Phone number registered with your account and we will send you an OTP with instructions to reset your password  
            </p>

            <label className="text-[#888888] font-inter text-[13.5px] font-normal tracking-normal mb-2 mt-8">
              Phone Number  
            </label>
            <input
             type="text"
             inputMode="numeric"
             placeholder="+234 0000000001"
            onChange={handlePhoneInput}
            maxLength={11}
             className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] bg-[#222222] text-white placeholder-[#424141] bg outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary mb-8"
          />


          <button
          onClick={() => router.push("/create-password")}
          className="w-full h-11.5 rounded-xl p-[8px_24px] bg-primary text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            Send OTP
          </button>

        </div>


        </div>
    </div>

    )
}
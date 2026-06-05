'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Eye, EyeOff, CheckCircle, EyeClosed } from "lucide-react";

export default function CreatePasswordPage() {

    const router = useRouter()
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const requirements = [
    "Must be only 8 characters",
    "Use a mix of Upper case and lower case",
    "Must be strong",
  ]

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

            <h2 className="font-inter text-[16px] font-bold leading-[1.2] tracking-[-0.02em] text-white mb-1 ml-2">
                Create New Password
            </h2>
            <p className="text-[#888888] font-inter text-[13.5px] font-normal tracking-normal mb-2 mt-2 ml-2">
              Your new password should be different from the last 3 passwords you have previously used  
            </p>

            <label className="text-[#888888] font-inter text-[13.5px] font-normal tracking-normal mb-2 mt-8">
             New Password 
            </label>
            <div className="relative mb-4">
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] pr-10 bg-[#222222] text-white placeholder-[#424141] outline-none transition-all duration-200 hover:border-[#D9E012] focus:border-[#D9E012] focus:ring-1 focus:ring-[#D9E012]"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>


          <label className="text-[#888888] text-xs font-normal tracking-normal mb-2 mt-2">
            Confirm Password
          </label>
          <div className="relative mb-6">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] pr-10 bg-[#222222] text-white placeholder-[#424141] outline-none transition-all duration-200 hover:border-[#D9E012] focus:border-[#D9E012] focus:ring-1 focus:ring-[#D9E012]"
            />
            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ?  <Eye className="w-4 h-4" /> : <EyeClosed /> }
            </button>
          </div>

        <div className="flex flex-col gap-2 mb-8 ml-1">
          {requirements.map((req, index) => (
            <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#888888]" />
                <span className="text-[#888888] text-xs">{req}</span>
            </div>
          ))}
        </div>


    
          <button
            onClick={() => router.push("/reset-success")}
            className="w-full h-11.5 rounded-xl p-[8px_24px] bg-[#D9E012] text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D9E012]/50 mb-6 mt-18"
          >
            Reset Password
          </button>


        </div>
        </div>
      </div> 
    )
}
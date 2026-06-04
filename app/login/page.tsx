"use client"
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link"
import { useState } from "react"
import { RiMenu4Fill } from "react-icons/ri";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [hasError, setHasError] = useState(false)

  return (
    <div className="min-h-screen  bg-linear-to-b from-[#1D1D1D] via-[#1D1D1D] via-5% to-[#000000] text-white flex flex-col">
      <div className="w-full bg-linear-to-b from-[#1D1D1D] via-[#1D1D1D] via-15% to-[#000000]  flex flex-col min-h-screen">
    
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030]">
          <RiMenu4Fill className="w-6 h-6 text-white" />
          <h1 className=" text-[#FFFFFF] text-sm font-inter font-semibold">Login</h1>
          <div className="w-6 h-0.5 " />

        </div>
          <div className="flex flex-col flex-1 px-5 pt-8">
            <h2 className="font-inter text-[16px] font-bold leading-[1.2] tracking-[-0.02em] text-white mb-1 ml-2">Welcome to Korrect Trivia</h2>
            <p className="text-[#888888] font-inter text-xs font-normal tracking-normal mb-8 mt-1 ml-2">
              Kindly Login with your registered phone number
            </p>
            <label className="text-[#888888] font-inter text-xs font-normal tracking-normal mb-2 mt-2">Phone number</label>
            <input 
              type="tel"
              placeholder="+234 9000000001"
              className="flex flex-row w-full max-w-90 h-fit rounded-[10px] border border-[#303030] p-[6px_8px] gap-1 bg-transparent text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-[#D9E012] focus:border-[#D9E012] focus:ring-1 focus:ring-[#D9E012]"
            />
            <label className="text-[#888888] font-inter text-xs font-normal tracking-normal mb-2 mt-4">Password</label>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="flex flex-row w-full max-w-90 h-fit rounded-[10px] border border-[#303030] p-[6px_8px] gap-1 bg-transparent text-white placeholder-zinc-500 outline-none transition-all duration-200 hover:border-[#D9E012] focus:border-[#D9E012] focus:ring-1 focus:ring-[#D9E012]"
              />
              <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
              >
                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              </div>
 

              {hasError && (
                <p className="text-[#FF7366] text-sm mb-2 mt-2">
                  Incorrect Password! Try again or Click forgot password to reset your password
                </p>
              )}

              <div className="flex justify-end mb-6">
                <Link 
                href="/password-reset"
                className="text-[#F6F600] text-[12px] font-semibold leading-relaxed tracking-[0.1px] text-right mt-2"
                >
                  Forgot password?
                </Link>
              </div>

              <button 
                className="flex flex-row items-center justify-center w-88 h-11.5 rounded-xl p-[8px_24px] gap-2 bg-[#D9E012] text-[#1D1D1D] font-inter text-[16px] font-bold tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D9E012]/50"
                onClick={() => setHasError(true)}
              >
                Login
              </button>
          </div>
      </div>
    </div>
  )
  
}
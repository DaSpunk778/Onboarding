"use client"

import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, Replace } from "lucide-react";

export default function CreateAccountPage() {
    const router = useRouter()
    const [agreed, setAgreed] = useState(false)

    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (/^[+]?[0-9]*$/.test(value)) {
      e.target.value = value
    } else {
      e.target.value = value.replace(/[^0-9]/g, "")
    }
  } 

    return (
        <div className="min-h-screen bg-linear-to-b from-[#1D1D1D] via-[#232222] via-10% to-[#181717] text-white flex flex-col items-center">
        <div className="w-full max-w-97.5 bg-linear-to-b from-[#1D1D1D] via-[#1e1e1e] via-15% to-[#000000] flex flex-col min-h-screen">

    
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030] bg-[#151515]">
          <button onClick={() => router.back()}> 
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-semibold text-white">Create Account</h1>
          <div className="w-5" />
        </div>

        <div className="flex flex-col flex-1 px-5 pt-6">

            <h2 className="font-inter text-[16px] mt-4 font-bold leading-[1.2] tracking-[-0.02em] text-white mb-1 ml-2">
                Welcome to Korrect Trivia
            </h2>
            <p className="text-[#888888] font-inter text-[13px] font-normal tracking-normal mb-2 mt-2 ml-2">
              Register with the name that matches your Government ID for easy and smooth verification process 
            </p>

          <label className="text-[#888888] text-[13.5px] mb-1 mt-8">Email</label>
            <input
                type="email"
                placeholder="test@tester.com"
                className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] bg-[#222222] text-white  placeholder-[#424141] outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary mb-4"
            />

            {/*first name and last name fields*/}
            <div className="flex gap-3 mb-4">
                <div className="flex flex-col flex-1">
                <label className="text-[#888888] text-[13.5px] mb-1">First Name</label>
                <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] bg-[#222222] text-white  placeholder-[#424141] outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary"
                />
                </div>
                <div className="flex flex-col flex-1">
                <label className="text-[#888888] text-[13.5px] mb-1">Last Name</label>
                <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] bg-[#222222] text-white   placeholder-[#424141] outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary"
                />
                </div>
          </div>

          <label className="text-[#888888] text-xs mb-1">Phone number</label>
            <input
                type="text"
                inputMode="numeric"
                placeholder="+234 9000000001"
                onChange={handlePhoneInput}
                maxLength={11}
                className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] bg-[#222222] text-white placeholder-[#424141] outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary mb-4"
            />

            <label className="text-[#888888] text-xs mb-1">Date of Birth</label>
          <input
            type="text"
            placeholder="DD/MM/YY"
            className="w-full rounded-[10px] border border-[#383838] p-[6px_8px] bg-[#222222] text-white  placeholder-[#424141] outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary mb-4"
          />

           {/* Terms Checkbox */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setAgreed(!agreed)}
              className={`w-4 h-4 rounded flex items-center justify-center border transition-all duration-200 cursor-pointer shrink-0 ${
                agreed
                  ? " border-[#303030]"
                  : "bg-transparent border-[#303030]"
              }`}
            >
              {agreed && (
                <svg
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 4L3.5 6.5L9 1"
                    stroke="#303030"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
             <span
              className="text-[#303030] text-xs cursor-pointer"
              onClick={() => setAgreed(!agreed)}
            >
              I agree with Korrect Trivia Terms and condition
            </span>
          </div>
        
          <button
            onClick={() => router.push("/create-password-weak")}
            className="w-full h-11.5 rounded-xl p-[8px_24px] bg-primary text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 mb-6 mt-10"
          >
            Continue
          </button>  



        </div>

            </div>
        </div>
    )
}
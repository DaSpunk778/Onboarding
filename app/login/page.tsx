"use client"
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link"
import { useState } from "react"
import { RiMenu4Fill } from "react-icons/ri";
import Image from "next/image";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [hasError, setHasError] = useState(false)

const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  // only allow + at start and numbers 0-9
  if (/^[+]?[0-9]*$/.test(value)) {
    e.target.value = value
  } else {
    e.target.value = value.replace(/[^0-9+]/g, "")
  }
}

  return (
    <div className="min-h-screen  bg-linear-to-b from-[#1D1D1D] via-[#232222] via-10% to-[#181717] text-white flex flex-col">
      <div className="w-full bg-linear-to-b from-[#1D1D1D] via-[#1e1e1e] via-15% to-[#000000]  flex flex-col min-h-screen">
    
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030] bg-[#151515]">
          <RiMenu4Fill className="w-6 h-6 text-white" />
          <h1 className=" text-[#FFFFFF] text-sm font-inter font-semibold">Login</h1>
          <div className="w-6 h-0.5 " />

        </div>
          <div className="flex flex-col flex-1 px-5 pt-8">
            <h2 className="font-inter text-[16px] font-bold leading-[1.2] tracking-[-0.02em] text-white mb-1 ml-2">Welcome to Korrect Trivia</h2>
            <p className="text-[#888888] font-inter text-[13.5px] font-normal tracking-normal mb-8 mt-1 ml-2">
              Kindly Login with your registered phone number
            </p>
            <label className="text-[#888888] font-inter text-[13.5px] font-normal tracking-normal mb-2 mt-2">Phone number</label>
            <input 
              type="text"
              inputMode="numeric"
              placeholder="+234 9000000001"
              onChange={handlePhoneInput}
              maxLength={14}
              className="flex flex-row w-full max-w-90 h-fit rounded-[10px] border border-[#383838] p-[6px_8px] gap-1 bg-[#222222] text-white placeholder-[#424141] outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary"
            />
            <label className="text-[#888888] font-inter text-[13.5px] font-normal tracking-normal mb-2 mt-4">Password</label>
            <div className="relative mb-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="flex flex-row w-full max-w-90 h-fit rounded-[10px] border border-[#383838] p-[6px_8px] gap-1 bg-[#222222] text-white placeholder-[#424141]  outline-none transition-all duration-200 hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              >
                 {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
              </div>
 

              {hasError && (
                <p className="text-danger text-[12px] mb-2 mt-2">
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
                className="flex flex-row items-center justify-center overflow-hidden w-full h-11.5 rounded-xl p-[8px_24px] gap-2 bg-primary text-[#3f3e3e] font-inter text-[14px] font-bold tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 mt-3"
                onClick={() => setHasError(true)}
              >
                Login
              </button>

              <div className="flex items-center gap-3 mb-6 mt-10">
                <div className="flex-1 h-px bg-[#303030]" />
                <span className="text-[#ffffff] text-[12px]">Or Login with</span>
                <div className="flex-1 h-px bg-[#303030]" />
              </div>


           <div className="flex flex-wrap gap-3 justify-center mt-3 ">

              <button className="flex flex-row items-center w-fit h-fit rounded-[100px] border border-solid border-[#484848] p-[4px_8px_4px_4px] gap-1 text-white text-[13px] font-inter font-semibold cursor-pointer">
                <div className="flex items-center justify-center -mt-px -ml-px w-6 h-6 rounded-full border border-solid border-[#F6F2F2] bg-[#1877F2]">
                    <FaFacebookF className="w-4 h-4 text-white cursor-pointer" />
                  </div>
                    Facebook
                </button>

               <button className="flex flex-row items-center w-fit h-fit rounded-[100px] border border-solid border-[#484848] p-[4px_8px_4px_4px] gap-1 text-white text-[13px] font-inter font-semibold cursor-pointer">
                  <div className="flex items-center justify-center -mt-px -ml-px w-6 h-6 rounded-full border border-solid border-[#F6F2F2] bg-white">
                    <FcGoogle className="w-5.25 h-5.25 cursor-pointer" />
                  </div>
                    Google
                </button>

                <button className="flex flex-row items-center w-fit h-fit rounded-[100px] border border-solid border-[#484848] p-[4px_8px_4px_4px] gap-1 text-white text-[13px] font-inter font-semibold cursor-pointer">
                  <div className="flex items-center justify-center -mt-px -ml-px w-6 h-6 rounded-full border border-solid border-[#F6F2F2]">
                    <BsTwitterX className="w-3 h-3 text-[#F6F2F2] cursor-pointer" />
                  </div>
                  Twitter
                </button>
                
                
              </div>
          </div>
      </div>
    </div>
  )
  
}
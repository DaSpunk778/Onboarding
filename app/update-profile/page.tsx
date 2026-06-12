"use client"

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation"
import Image from "next/image"
import React from "react";


export default function UpdateProfilePage() {
  const router = useRouter() 

  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (/^[+]?[0-9]*$/.test(value)) {
      e.target.value = value
    } else {
      e.target.value = value.replace(/[^0-9]/g, "s")
    }
  } 

    return (
        <div className="min-h-screen bg-linear-to-b from-[#1D1D1D] via-[#232222] via-10% to-[#181717] text-white flex flex-col items-center">
        <div className="w-full max-w-97.5 bg-linear-to-b from-[#1D1D1D] via-[#1e1e1e] via-15% to-[#000000] flex flex-col min-h-screen">

        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030] bg-[#151515]">
          <button onClick={() => router.back()}> 
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-semibold text-white">Profile</h1>
          <div className="w-5" />
        </div>

        {/*contents: prof picture and form*/}
         <div className="flex flex-col flex-1 px-5 pt-6">

            <div className="flex flex-col items-center  py-4">
              <div className="w-20 h-20 rounded-full p-0.5 bg-[#20BF55]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#2a2a2a]">
                  <Image
                  src="/ay thinking.jpeg"
                  alt="Avatar"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
                </div>
                </div>  

                <span className="text-white text-[12px] font-inter font-medium mt-2">Choose Avatar</span>
            </div>

             <label className="text-[#888888] text-[13.5px] mb-1">Email</label>
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

        <button
            onClick={() => router.push("/create-account")}
            className="w-full h-11.5 rounded-xl p-[8px_24px] bg-primary text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary/50 mb-6 mt-20"
          >
            Update
          </button>


         </div>

    </div>
    </div>

    )
}

'use client'

import { ChevronLeft, LockKeyholeOpen } from "lucide-react";
import { useRouter } from "next/navigation"

export default function ResetSuccessPage() {

    const router = useRouter()

    return (
        <div className="min-h-screen bg-linear-to-b from-[#1D1D1D] via-[#232222] via-10% to-[#181717] text-white flex flex-col items-center">
        <div className="w-full max-w-97.5 bg-linear-to-b from-[#1D1D1D] via-[#1e1e1e] via-15% to-[#000000] flex flex-col min-h-screen">

        <div className="flex items-center justify-between px-5 py-4 border-b border-[#303030] bg-[#151515]">
          <button onClick={() => router.back()}> 
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <h1 className="text-sm font-semibold text-white">Reset Password</h1>
          <div className="w-5" />
        </div>


        {/* vertical */}
        <div className="flex flex-col flex-1 items-center justify-start pt-38 px-5 text-center gap-4">

            <div className="w-11.25 h-11.25 rounded-full bg-[#1E3211] flex items-center justify-center mb-8">
                <LockKeyholeOpen className="w-5 h-5 text-[#D9E012]" />
            </div>

            <h2 className="font-inter text-[16px] font-semibold leading-[0.3] tracking-[-0.02em] text-[#888888] ml-2 ">
              Password Reset Successful
            </h2>
            <p className="text-[#888888] font-normal text-[13.5px] leading-4.5 tracking-normal text-center ml-2 mb-4">
             Your password has been changed, Kindly Login with your new password
          </p>

             <button
                onClick={() => router.push("/update-profile")}
                className="w-full h-11.5 rounded-xl p-[8px_24px] bg-[#D9E012] text-[#3f3e3e] font-bold text-[14px] tracking-[-0.02em] transition-all duration-200 hover:bg-[#c2ca10] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#D9E012]/50 mt-4"
            >
            Login
          </button>

        </div>


        </div>
    </div>
    )

}
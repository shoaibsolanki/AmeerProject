import React from "react";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black grid grid-cols-1 md:grid-cols-2 items-center justify-center">
      {/* Left (Image) Side */}
      <div className="hidden md:block h-[600px] w-full rounded-l-2xl overflow-hidden shadow-2xl relative">
       <img
    src="/Groupstock.png"
    alt="Astronaut"
    className="absolute inset-0 w-full h-full object-contain scale-95 mx-auto"
    style={{ left: '50%', transform: 'translateX(-50%) scale(0.95)' }}
  />
        {/* Gradient overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
        <div className="relative z-10 flex flex-col h-full justify-start items-center pt-16">
          <h1 className="text-white text-5xl font-bold tracking-widest mb-2 drop-shadow-lg">
            istok<span className="text-yellow-400">X</span>
          </h1>
        </div> */}
      </div>
      {/* Right (Form) Side */}
      <div className="flex flex-col items-center justify-center h-[600px] w-full bg-[#10141E] rounded-r-2xl shadow-2xl px-8">
        <h2 className="text-white text-2xl font-semibold mb-3 text-center">
          Verify with your Email
        </h2>
        <p className="text-gray-400 text-center mb-8 max-w-md">
          We've sent a verification code to your email. This helps us ensure your account security and compliance
        </p>
        {/* Code Input */}
        <div className="flex justify-center space-x-3 mb-6">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-12 h-12 bg-[#1A2332] rounded-lg border border-[#252B3B] text-white text-2xl text-center focus:outline-none focus:border-yellow-400 transition-all"
            />
          ))}
        </div>
        {/* Resend and Button */}
        <button className="text-yellow-400 text-sm mb-8 hover:underline transition">
          Resend code
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-40 h-12 bg-blue-600 rounded-xl text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition"
        >
          Verify Email
        </button>
      </div>
    </div>
  );
};

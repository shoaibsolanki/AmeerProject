import React from "react";
import { useNavigate } from "react-router-dom";
import { VerifyOtp } from "../services/Auth/Authapi";

export default function VerifyEmail({ email }: { email: string }) {
  const navigate = useNavigate();

  const handlverify = async () => {
    try {
      const payload = {
        email: email,
        otp: 123456, // Replace with actual OTP input value
      };
      const response = await VerifyOtp(payload);
      console.log("OTP Verification successful:", response);
      navigate("/Details");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  w-full  px-8">
      <h2 className="text-white text-2xl font-semibold mb-3 text-center">
        Verify with your Email
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        We've sent a verification code to your email. This helps us ensure your
        account security and compliance
      </p>
      {/* Code Input */}
      <div className="flex justify-center space-x-3 mb-6">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            className="md:w-12 w-8 h-12 bg-[#1A2332] rounded-lg border border-[#252B3B] text-white text-2xl text-center focus:outline-none focus:border-yellow-400 transition-all"
          />
        ))}
      </div>
      {/* Resend and Button */}
      <button className="text-yellow-400 text-sm mb-8 hover:underline transition">
        Resend code
      </button>
      <button onClick={handlverify} className="btn-primary">
        Verify Email
      </button>
    </div>
  );
}

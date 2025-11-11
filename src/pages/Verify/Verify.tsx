import React from "react";
import { useNavigate } from "react-router-dom";
import { ResendOtp, VerifyOtp } from "../../services/Auth/Authapi";
import { useAuth } from "../../Context/Auth";
import { useSnackbar } from "notistack";

export default function VerifyEmail({ email }: { email: string }) {
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState<string[]>(Array(6).fill(""));
  const { enqueueSnackbar } = useSnackbar();
  const { setUser } = useAuth();
  const handleOtpChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return; // allow only single digit
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleKeyUp = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      (
        (e.target as HTMLInputElement)
          .previousElementSibling as HTMLInputElement
      )?.focus();
    } else if (/^[0-9]$/.test(e.key) && index < 5) {
      const next = (e.target as HTMLInputElement)
        .nextElementSibling as HTMLInputElement | null;
      next?.focus();
    }
  };

  const handleVerify = async () => {
    try {
      const otpValue = otp.join("");
      const payload = {
        email,
        otp: Number(otpValue),
      };
      const response = await VerifyOtp(payload);
      if (response.success) {
        enqueueSnackbar("Verify Successful", { variant: "success" });
        setUser(response.data);
        navigate("/Details");
      } else {
        enqueueSnackbar(response.message, { variant: "error" });
      }
    } catch (error) {
      console.error("OTP verification failed:", error);
      enqueueSnackbar("Verification Failed", { variant: "error" });
    }
  };

  const handleResendOtp = async () => {
    try {
      const response = await ResendOtp(email);
      console.log("OTP resent successfully:", response);
    } catch (error) {
      console.error("Failed to resend OTP:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full px-8">
      <h2 className="text-white text-2xl font-semibold mb-3 text-center">
        Verify with your Email
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        We've sent a verification code to your email. This helps us ensure your
        account security and compliance.
      </p>

      {/* OTP Input Fields */}
      <div className="flex justify-center space-x-3 mb-6">
        {otp.map((digit, i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(e.target.value, i)}
            onKeyUp={(e) => handleKeyUp(e, i)}
            className="md:w-12 w-8 h-12 bg-[#1A2332] rounded-lg border border-[#252B3B] text-white text-2xl text-center focus:outline-none focus:border-yellow-400 transition-all"
          />
        ))}
      </div>

      <button
        onClick={handleResendOtp}
        className="text-yellow-400 text-sm mb-8 hover:underline transition"
      >
        Resend code
      </button>

      <button
        onClick={handleVerify}
        className="btn-primary disabled:opacity-50"
        disabled={otp.join("").length !== 6}
      >
        Verify Email
      </button>
    </div>
  );
}

import { Mail, User } from "lucide-react";
import React from "react";

const Detailfirstpage = ({ setStep }: { setStep: (step: number) => void }) => {
  return (
    <form className="space-y-5 mt-6">
      <div className="space-y-2">
        <label className="text-sm text-gray-400">Full Name</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
          />
          <User className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm text-gray-400">Email Address</label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            defaultValue="john.s@gmail.com"
            className="w-full bg-[#121212] border border-gray-800 rounded-lg py-3 px-4 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 transition"
          />
          <Mail className="absolute right-3 top-3.5 w-4 h-4 text-gray-500" />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={() => setStep(2)}
          className="btn-primary"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default Detailfirstpage;

import React, { useState } from "react";

type Benefit = {
  title: string;
  subtitle: string;
};

const benefits: Benefit[] = [
  {
    title: "Real-Time Institutional Levels",
    subtitle: "Trade Where Smart Money Acts"
  },
  {
    title: "Opening Price Level",
    subtitle: "Trade Where Smart Money Acts"
  },
  {
    title: "Level-to-Level Precision",
    subtitle: "Trade with the Market’s Hidden GPS"
  },
  {
    title: "Optimized for Intraday & Scalping",
    subtitle: "Precision-Engineered for Short-Term Trading"
  },
  {
    title: "Minimum Risk, Maximum Reward",
    subtitle: "Professional Risk Management Made Simple"
  }
];

export default function PremiumBenefits() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black pb-16 pt-10 px-4">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-xs text-gray-400 space-x-1">
        <span className="inline-block">Home</span>
        <span className="inline-block">/</span>
        <span className="inline-block">Products</span>
        <span className="inline-block">/</span>
        <span className="inline-block text-white font-semibold">
          iStokx Intraday Levels Indicator
        </span>
      </div>
      {/* Benefits Accordions */}
      <div className="max-w-6xl mx-auto">
        {benefits.map((benefit, idx) => (
          <div
            key={benefit.title}
            className="mb-5 last:mb-0 rounded-2xl bg-gradient-to-r from-[#23243a] to-[#1b1b27] overflow-hidden shadow border-0"
          >
            <button
              onClick={() => setOpen(open === idx ? null : idx)}
              className="flex w-full items-center justify-between px-7 py-6 focus:outline-none"
              style={{ minHeight: 74 }}
            >
              <div>
                <div className="text-lg font-semibold text-white leading-tight">
                  {benefit.title}
                </div>
                <div className="text-sm text-gray-300 pt-1">{benefit.subtitle}</div>
              </div>
              <span>
                <svg
                  width={28}
                  height={28}
                  fill="none"
                  className={`transform transition-transform ${
                    open === idx ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M10 12l4 4 4-4"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </button>
            {open === idx && (
              <div className="px-7 pb-7 pt-0 text-base text-gray-300 border-t border-[#23243a]">
                {/* Expand to show details for each benefit if needed */}
                Detailed description for <span className="text-white">{benefit.title}</span> goes here.
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

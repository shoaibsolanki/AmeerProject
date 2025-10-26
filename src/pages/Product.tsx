import React from "react";
import { useNavigate } from "react-router-dom";

type CardType = "premium" | "free";

interface TradeCardProps {
  chartSrc: string;
  type: CardType;
  title: string;
  description: string;
  cta?: (navigate: ReturnType<typeof useNavigate>) => React.ReactNode;
}

const TradeCard: React.FC<TradeCardProps> = ({
  chartSrc,
  type,
  title,
  description,
  cta,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded-xl bg-[#18181b] ${
        type === "premium"
          ? "p-6 flex flex-row items-center gap-6 w-full"
          : "p-0"
      } shadow group relative`}
      style={type === "premium" ? { minHeight: 150 } : undefined}
    >
      {/* Chart image */}
      <img
        src={chartSrc}
        alt="indicator chart"
        className={`rounded-md object-cover ${
          type === "premium"
            ? "w-40 h-24 bg-[#222229] mr-4"
            : "w-full h-32 bg-[#222229] rounded-t-xl"
        }`}
      />

      {/* Card contents */}
      <div
        className={`flex-1 ${
          type === "premium" ? "" : "p-4 flex flex-col"
        } text-white`}
      >
        <div className="flex items-center gap-2 mb-1.5">
          {type === "premium" && (
            <span className="text-xs text-[#ff4867] font-bold">Premium</span>
          )}
          {type === "free" && (
            <span className="text-xs text-[#33e17c] font-semibold">Free</span>
          )}
        </div>
        <h3
          className={`${
            type === "premium"
              ? "font-bold text-base"
              : "font-semibold text-base mt-0"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm text-gray-300 mt-1 ${
            type === "premium" ? "" : "line-clamp-2"
          }`}
        >
          {description}
        </p>
        <div className="mt-6 flex gap-3">
          {cta
            ? cta(navigate)
            : type === "premium"
            ? (
                <>
                  <button className="rounded px-3 py-1.5 text-sm bg-[#232334] text-[#7aaeeb] border border-[#232334] hover:bg-[#25263c]">
                    View Demo
                  </button>
                  <button
                    className="rounded px-4 py-1.5 text-sm bg-[#245ff8] text-white hover:bg-[#4171f7]"
                    onClick={() => navigate("/checkout")}
                  >
                    Upgrade Premium Access
                  </button>
                </>
              )
            : null}
        </div>
      </div>
    </div>
  );
};

const tradeCards = [
  {
    chartSrc: "/Trading.png",
    type: "premium" as CardType,
    title: "iStokx Intraday Levels Indicator",
    description:
      "Experience institutional-grade precision with real-time daily support, resistance, and opening levels that react perfectly with market movement. Fully customizable and built for intraday traders and scalpers and giving structure, clarity, and confidence to take high-probability trades every session.",
    // Example: If you want a custom CTA
    // cta: (navigate: ReturnType<typeof useNavigate>) => (
    //   <>
    //     <button className="rounded px-3 py-1.5 text-sm bg-[#232334] text-[#7aaeeb] border border-[#232334] hover:bg-[#25263c]">
    //       View Demo
    //     </button>
    //     <button
    //       className="rounded px-4 py-1.5 text-sm bg-[#245ff8] text-white hover:bg-[#4171f7]"
    //       onClick={() => navigate("/checkout")}
    //     >
    //       Upgrade Premium Access
    //     </button>
    //   </>
    // ),
  },
];

const freeCards = [
  {
    chartSrc: "/Trading.png",
    type: "free" as CardType,
    title: "Stokx Next CPR + Previous High/Low",
    description:
      "Plan your trades with precision using dynamic CPR and key levels analysis.",
  },
  {
    chartSrc: "/Trading.png",
    type: "free" as CardType,
    title: "Stokx Dynamic Multi MA Pack",
    description:
      "Simplify trend trading with five powerful moving averages — SMA, EMA, WMA, HMA, and VWMA.",
  },
  {
    chartSrc: "/Trading.png",
    type: "free" as CardType,
    title: "Stokx CPR (Daily / Weekly / Monthly)",
    description:
      "Understand market bias like a pro with multi-timeframe CPR indicators.",
  },
];

export default function Products() {
  return (
    <div className="bg-black min-h-screen w-full text-white pb-16 px-0">
      {/* Top section */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-0 pt-8 pb-2">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-bold text-xl md:text-2xl mb-1 tracking-tight">
            Want to Trade Like the Pros?
          </h2>
          <a
            href="/upgrade-premium"
            className="text-[#fbbf24] text-sm font-medium flex items-center"
          >
            Learn More <span className="ml-1">&gt;</span>
          </a>
        </div>
        <div className="text-sm text-gray-400 mb-5">
          Unlock real-time intraday levels used by professional traders for
          precise entries and exits
        </div>
        {/* Premium card */}
        <div className="w-full">
          <TradeCard {...tradeCards[0]} />
        </div>
      </section>
      {/* Free cards section */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-0 pt-10">
        <div className="flex justify-between items-center w-full">
          <h3 className="font-bold text-xl md:text-2xl mb-1 tracking-tight">
            Begin Trading Smarter Today
          </h3>
          <a
            href="#"
            className="text-[#fbbf24] text-sm font-medium flex items-center"
          >
            Learn More <span className="ml-1">&gt;</span>
          </a>
        </div>
        <div className="text-sm text-gray-400 mb-8">
          Access institutional-grade indicators designed to give you an edge free
          forever.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {freeCards.map((c) => (
            <TradeCard {...c} key={c.title} />
          ))}
        </div>
      </section>
    </div>
  );
}

import { Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

type typeCartDrawer = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: typeCartDrawer) {
  if (!open) return null;
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[999] flex">
      {/* 🔥 BACKDROP OVERLAY (Blocks left screen clicks) */}
      <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* 🔥 RIGHT SLIDE CART PANEL */}
      <div className="w-[360px] h-full bg-[#0A0A0A] shadow-xl border-l border-gray-800 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold text-white">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-auto px-5 py-4">
          <p className="text-sm text-gray-400 mb-3">1 item in your cart</p>

          {/* Cart Item Card */}
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-4 relative">
            <Trash2 className="absolute top-3 right-3 text-red-400 hover:text-red-600" />

            <h3 className="text-white font-semibold text-base">
              Stokx Dynamic Multi MA Pack
            </h3>

            <p className="text-gray-400 text-sm mt-1">
              Simplify trend trading with five powerful moving averages — SMA,
              EMA, WMA, HMA, and VWMA — for multi-faceted trend analysis.
            </p>

            {/* Premium Tag */}
            <span className="inline-block bg-[#2c2630] text-[#c99bf7] text-xs px-2 py-0.5 rounded-md mt-3">
              Premium
            </span>

            {/* Price Row */}
            <div className="mt-4 flex items-center justify-between border-t border-[#FFFFFF1A]">
              <p className="text-white font-medium text-lg">
                ₹ 2999 <span className="text-gray-400 text-sm">/yr</span>
              </p>
              <button className="text-yellow-400 text-sm hover:text-yellow-300 flex items-center gap-1">
                View Demo →
              </button>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="px-5 py-4 border-t border-gray-800">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-400 text-sm">Subtotal</span>
            <span className="text-white font-medium text-lg">$49.99</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="btn-primary w-full"
          >
            Proceed to Checkout
          </button>

          <button className="w-full bg-[#030303] rounded-xl border border-[#FFFFFF1A]  text-gray-300 hover:text-white mt-3 py-2">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
}

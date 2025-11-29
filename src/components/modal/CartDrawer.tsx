import { ShoppingBag, Trash2 } from "lucide-react";
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
          <div className="flex gap-3 items-center"> 

            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M13.3332 8.33325C13.3332 9.21731 12.982 10.0652 12.3569 10.6903C11.7317 11.3154 10.8839 11.6666 9.99984 11.6666C9.11578 11.6666 8.26794 11.3154 7.64281 10.6903C7.01769 10.0652 6.6665 9.21731 6.6665 8.33325" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.58594 5.02832H17.4143" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.83333 4.55591C2.61696 4.84441 2.5 5.1953 2.5 5.55591V16.6667C2.5 17.1088 2.67559 17.5327 2.98816 17.8453C3.30072 18.1578 3.72464 18.3334 4.16667 18.3334H15.8333C16.2754 18.3334 16.6993 18.1578 17.0118 17.8453C17.3244 17.5327 17.5 17.1088 17.5 16.6667V5.55591C17.5 5.1953 17.383 4.84441 17.1667 4.55591L15.5 2.33341C15.3448 2.12642 15.1434 1.95842 14.912 1.8427C14.6806 1.72699 14.4254 1.66675 14.1667 1.66675H5.83333C5.57459 1.66675 5.3194 1.72699 5.08798 1.8427C4.85655 1.95842 4.65525 2.12642 4.5 2.33341L2.83333 4.55591Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <h2 className="text-white font-inter text-[16px] font-semibold leading-[24px] tracking-[-0.312px]">
            Your Cart</h2></div> 
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
        <div className="px-5 py-4 border-t border-t-[rgba(255,255,255,0.10)]">
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

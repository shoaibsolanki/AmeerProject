import React from "react";
import { useCart } from "../../Context/CartContext";
import { createNewOrder } from "../../services/Order/Orderapi";
import { useAuth } from "../../Context/Auth";
import { useSnackbar } from "notistack";
import { Lock } from "lucide-react";

const Ordersummary = () => {
  const { products, total, clearCart } = useCart();
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const creatOrder = async () => {
    try {
      const payload = {
        userId: user?._id,
        productIds: products.map((product) => product._id),
      };

      const response = await createNewOrder(payload);
      if (response.success) {
        enqueueSnackbar("Order Created Successful", { variant: "success" });
        clearCart();
        window.open(response.data.link_url, "_blank");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="w-full max-w-sm rounded-2xl bg-[#121322] shadow-[0_20px_45px_rgba(0,0,0,0.5)] border border-[#25263a] px-6 py-5 flex flex-col gap-5 mt-6 md:mt-0 self-start">
      {/* Order heading */}
      <div>
        <div className="text-[13px] tracking-wide text-gray-300 mb-3 font-semibold">
          Order Summary
        </div>

        {/* Products */}
        {products.map((product) => (
          <div
            key={product._id}
            className="flex items-center justify-between mb-1.5 text-[14px]"
          >
            <div className="text-gray-200">{product.name}</div>
            <div className="text-gray-100 font-semibold">
              ₹ {product.productAmount}
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="border-t border-[#26273a] mt-4 pt-3.5 flex items-center justify-between">
          <span className="text-gray-300 text-[13px] font-semibold">
            Total due today
          </span>
          <span className="font-extrabold text-[20px] text-white">
            ₹ {total}
          </span>
        </div>
      </div>

      {/* Secure payment box */}
      <div className="bg-[#1b1f3a] border border-[#2f56d3] rounded-xl px-3.5 py-3 mt-1">
        <div className="flex items-center mb-1.5 gap-2">
         <Lock className="w-4 h-4 text-[#55aaff]" />
          <span className="text-[#55aaff] font-medium text-[13px]">
            Secure Payment
          </span>
        </div>
        <p className="text-[11px] leading-4 text-gray-300">
          Your payment information is encrypted and secure. We accept all major
          credit cards, debit cards, and UPI payments.
        </p>
      </div>

      {/* Complete purchase button */}
      <button
        onClick={creatOrder}
        className="mt-1 h-11 rounded-[8px] bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors text-[14px] font-semibold text-white tracking-wide shadow-[0_10px_25px_rgba(37,99,235,0.6)]"
      >
        Complete Purchase
      </button>

      {/* Terms text */}
      <div className="text-[10.5px] text-gray-400 text-center pt-1 leading-relaxed">
        By completing this purchase you agree to our
        <br />
        <span className="underline cursor-pointer">Terms of Service</span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>
      </div>
    </aside>
  );
};

export default Ordersummary;

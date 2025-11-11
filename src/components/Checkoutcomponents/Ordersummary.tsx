import React from "react";
import { useCart } from "../../Context/CartContext";
import { createNewOrder } from "../../services/Order/Orderapi";
import { useAuth } from "../../Context/Auth";
import { useSnackbar } from "notistack";

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
    <aside className="w-full max-w-sm bg-linear-to-b from-[#23243A] to-[#171726] shadow-md rounded-xl border border-[#25263a] p-6 flex flex-col gap-5 mt-6 md:mt-0 self-start">
      <div>
        <div className="text-sm text-gray-400 mb-2 font-bold">
          Order Summary
        </div>

        {/* List each product */}
        {products.map((product) => (
          <div
            key={product._id}
            className="flex justify-between mb-1 text-[15px]"
          >
            <div className="text-gray-200">{product.name}</div>
            <div className="text-gray-100 font-semibold">
              ₹ {product.productAmount}
            </div>
          </div>
        ))}

        {/* Total */}
        <div className="border-t border-[#23232a] mt-3 pt-3 flex justify-between">
          <span className="text-gray-300 text-sm font-semibold">
            Total due today
          </span>
          <span className="font-extrabold text-lg text-white">₹ {total}</span>
        </div>
      </div>

      <div className="bg-[#232852] border border-[#3166d8] rounded-lg px-3 py-3 mt-1">
        <div className="flex items-center mb-1 gap-2">
          <svg width={20} height={20} fill="none">
            <rect
              x="2.5"
              y="4.5"
              width="15"
              height="11"
              rx="2"
              stroke="#55aaff"
              strokeWidth="1.5"
            />
            <rect x="7" y="9" width="6" height="2.5" rx="1.25" fill="#55aaff" />
          </svg>
          <span className="text-[#55aaff] font-medium text-sm">
            Secure Payment
          </span>
        </div>
        <div className="text-xs text-gray-300">
          Your payment information is encrypted and secure. We accept all major
          credit cards, debit cards, and UPI payments.
        </div>
      </div>

      <button onClick={creatOrder} className="btn-primary cursor-pointer">
        Complete Purchase
      </button>

      <div className="text-[10.5px] text-gray-400 text-center pt-1">
        By completing this purchase you agree to our
        <br />
        <span className="underline cursor-pointer">
          Terms of Service
        </span> and{" "}
        <span className="underline cursor-pointer">Privacy Policy</span>
      </div>
    </aside>
  );
};

export default Ordersummary;

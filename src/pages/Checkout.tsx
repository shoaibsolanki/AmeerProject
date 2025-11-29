import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Ordersummary from "../components/Checkoutcomponents/Ordersummary";
import { IndianRupee, Trash2 } from "lucide-react";
import { useCart } from "../Context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { products, total, removeProduct, clearCart, refreshCart } = useCart();

  useEffect(() => {
    refreshCart();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10">
        {/* Left: Cart/Table */}
        <section className="flex-1">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer text-xs text-gray-400 mb-4 flex items-center"
          >
            <svg width={18} height={18} className="mr-1" fill="none">
              <path
                d="M10 14l-4-4 4-4"
                stroke="#a3a3a3"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Back
          </button>
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-between">
            Check Out
            {/* <button
              onClick={clearCart}
              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
              title="Clear Cart"
            >
              Clear Cart
            </button> */}
          </h2>
          <p className="text-gray-400 mb-6 font-inter font-medium text-[18px] leading-[24px] tracking-[0]">
            There’s no charges during your free trial. We’ll only use this info
            to process your plan payment if you decide to continue after the
            trial ends.
          </p>

          <div className="overflow-x-auto ">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#22222a] uppercase text-xs text-white font-bold">
                  <th className="py-3 pl-6 pr-4">Product</th>
                  <th className="py-3 px-4">Paid/Free</th>
                  <th className="py-3 px-4">Validity</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 pr-6 pl-2"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id} className="border-b border-[#23232a]">
                    <td className="py-4 pl-6 pr-4 font-medium">
                      {product.name}
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={
                          product.isPaid
                            ? "text-[#fab557] font-bold"
                            : "text-[#33e17c] font-bold"
                        }
                      >
                        {product.isPaid ? "Paid" : "Free"}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      {product.subscriptionType
                        ? product.subscriptionType.charAt(0).toUpperCase() +
                          product.subscriptionType.slice(1)
                        : "Lifetime"}
                    </td>
                    <td className="py-4 px-4 flex items-center">
                      {" "}
                      <IndianRupee size={14} /> {product.productAmount}
                    </td>
                    <td
                      className="py-4 pr-6 pl-2 cursor-pointer text-red-400 hover:text-red-500"
                      onClick={() => removeProduct(product._id)}
                      title="Remove from cart"
                    >
                      <Trash2 />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          <div className="flex justify-between py-4 px-6 text-base border-t border-[#23232a] border-b-[0.2px] ">
  <span className="text-gray-100 font-semibold">Total</span>
  <span className="text-white font-bold pr-0 md:pr-48">
    ₹ {total}
  </span>
</div>

          </div>
        </section>

        {/* Right: Payment/Order Summary */}
        <Ordersummary />
      </div>
    </div>
  );
}

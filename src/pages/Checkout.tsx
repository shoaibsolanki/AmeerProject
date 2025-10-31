import React from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 flex justify-center">
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10">
        {/* Left: Cart/Table */}
        <section className="flex-1">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer text-xs text-gray-400 mb-4 flex items-center"
          >
            {/* Back icon (left arrow) */}
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
          <h2 className="text-2xl font-bold mb-2">Check Out</h2>
          <p className="text-gray-400 mb-6 text-sm max-w-lg">
            There’s no charges during your free trial. We’ll only use this info
            to process your plan payment if you decide to continue after the
            trial ends.
          </p>

          <div className="overflow-x-auto rounded-xl border border-[#23232a] bg-[#16161b]">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#22222a] uppercase text-xs text-gray-400 font-bold">
                  <th className="py-3 pl-6 pr-4">Product</th>
                  <th className="py-3 px-4">Paid/Free</th>
                  <th className="py-3 px-4">Validity</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 pr-6 pl-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#23232a]">
                  <td className="py-4 pl-6 pr-4 font-medium">
                    iStokx Intraday Levels Indicator
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[#fab557] font-bold">Paid</span>
                  </td>
                  <td className="py-4 px-4">30 Days</td>
                  <td className="py-4 px-4">₹ 599</td>
                  <td className="py-4 pr-6 pl-2 cursor-pointer text-gray-400 hover:text-red-500">
                    {/* Trash icon */}
                    <svg width={18} height={18} fill="none">
                      <rect
                        x="5"
                        y="7"
                        width="8"
                        height="7"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      />
                      <path
                        d="M7 9v3M11 9v3"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 7h10"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                      />
                      <rect
                        x="7"
                        y="3"
                        width="4"
                        height="2"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth={1.2}
                      />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 pl-6 pr-4 font-medium">
                    iStokx Intraday Levels Indicator
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-[#33e17c] font-bold">Free</span>
                  </td>
                  <td className="py-4 px-4">Lifetime</td>
                  <td className="py-4 px-4">₹ 0</td>
                  <td className="py-4 pr-6 pl-2 cursor-pointer text-gray-400 hover:text-red-500">
                    {/* Trash icon */}
                    <svg width={18} height={18} fill="none">
                      <rect
                        x="5"
                        y="7"
                        width="8"
                        height="7"
                        rx="1.5"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      />
                      <path
                        d="M7 9v3M11 9v3"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 7h10"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                      />
                      <rect
                        x="7"
                        y="3"
                        width="4"
                        height="2"
                        rx="1"
                        stroke="currentColor"
                        strokeWidth={1.2}
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end py-4 pr-6 text-base border-t border-[#23232a]">
              <span className="text-gray-100 font-semibold">Total</span>
              <span className="ml-16 text-white font-bold">₹ 2500</span>
            </div>
          </div>
        </section>

        {/* Right: Payment/Order Summary */}
        <aside className="w-full max-w-sm bg-linear-to-b from-[#23243A] to-[#171726] shadow-md rounded-xl border border-[#25263a] p-6 flex flex-col gap-5 mt-6 md:mt-0 self-start">
          <div>
            <div className="text-sm text-gray-400 mb-2 font-bold">
              Order Summary
            </div>
            <div className="flex justify-between mb-1 text-[15px]">
              <div className="text-gray-200">
                iStokx Intraday Levels Indicator
              </div>
              <div className="text-gray-100 font-semibold">₹ 2500</div>
            </div>
            <div className="flex justify-between mb-2 text-[15px]">
              <div className="text-gray-300">Stokx Dynamic Multi MA Pack</div>
              <div className="text-gray-100 font-semibold">₹ 0</div>
            </div>
            <div className="border-t border-[#23232a] mt-3 pt-3 flex justify-between">
              <span className="text-gray-300 text-sm font-semibold">
                Total due today
              </span>
              <span className="font-extrabold text-lg text-white">₹ 2500</span>
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
                <rect
                  x="7"
                  y="9"
                  width="6"
                  height="2.5"
                  rx="1.25"
                  fill="#55aaff"
                />
              </svg>
              <span className="text-[#55aaff] font-medium text-sm">
                Secure Payment
              </span>
            </div>
            <div className="text-xs text-gray-300">
              Your payment information is encrypted and secure. We accept all
              major credit cards, debit cards, and UPI payments.
            </div>
          </div>
          <button className="mt-1 py-2 rounded-lg font-semibold bg-[#245ff8] text-white text-[17px] w-full transition hover:bg-[#1c4ed8]">
            Complete Purchase
          </button>
          <div className="text-[10.5px] text-gray-400 text-center pt-1">
            By completing this purchase you agree to our
            <br />
            <span className="underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

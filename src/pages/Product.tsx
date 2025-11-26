import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../services/Product/Productinterface";
import { GetProducts } from "../services/Product/Productapi";
import { AddtoCart } from "../services/Cart/Cartapi";
import { useAuth } from "../Context/Auth";
import { Gem, IndianRupee } from "lucide-react";
import { useSnackbar } from "notistack";
import { useCart } from "../Context/CartContext";

// type CardType = "premium" | "free";

// interface TradeCardProps {
//   chartSrc: string;
//   type: CardType;
//   title: string;
//   description: string;
//   cta?: (navigate: ReturnType<typeof useNavigate>) => React.ReactNode;
// }

const TradeCard: React.FC<
  Product & {
    addToCart: (productId: string) => Promise<void>;
    billingType: string;
    setBillingType: (val: string) => void;
  }
> = ({
  productAmount,
  isPremium,
  name: title,
  description,
  _id: productId,
  addToCart,
  billingType,
  setBillingType,
}) => {
  return (
    <div
      className={`rounded-xl bg-[#0A0A0A] shadow group ${
        isPremium
          ? 'flex h-[208px] p-4 items-start gap-4 rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#0A0A0A]'
          : 'flex w-[384px] p-4 flex-col  gap-4 rounded-[16px] bg-[#0A0A0A]'
      }`}
    >
      {/* Top Right Toggle for Premium */}
      {isPremium && (
        <div className="absolute top-4 right-4 z-20">
          <ToggelButton active={billingType} setActive={setBillingType} />
        </div>
      )}

      {/* Product Image */}
      <img
        alt="indicator chart"
        src="/Trading.png"
        className={
          isPremium
            ? "w-[269px] h-[176px] rounded-[8px] mr-4 object-cover bg-[#222229]"
            : "w-full h-[176px] self-stretch rounded-[8px] "
        }
      />

      {/* Card Content */}
      {isPremium ? (
        <div className="flex-1 text-white">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex items-center gap-1">
              {/* Premium Badge */}
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M15 5.10221L7.5 13.7325L0 5.10221L7.5 4.07104L15 5.10221Z" fill="#CE0045"/>
                <path d="M15 5.10221L7.5 13.7325V4.07104L15 5.10221Z" fill="#A00031"/>
                <path d="M11.2647 3.18403L10.3768 5.10198L7.5 3.38639L4.62322 5.10198L3.75 3.18403V1.26611H11.25L11.2647 3.18403Z" fill="#CE0045"/>
                <path d="M11.2647 3.18403L10.3768 5.10198L7.5 3.38639V1.26611H11.25L11.2647 3.18403Z" fill="#A00031"/>
                <path d="M10.3768 5.10198H4.62329L7.50007 1.26611L10.3768 5.10198Z" fill="#FE7E52"/>
                <path d="M10.3768 5.10198H7.5V1.26611L10.3768 5.10198Z" fill="#F53241"/>
                <path d="M3.75 1.26611L0 5.10192H4.62316L3.75 1.26611Z" fill="#FE7E52"/>
                <path d="M10.3767 5.10192H14.9999L11.2499 1.26611L10.3767 5.10192Z" fill="#F53241"/>
                <path d="M10.3768 5.10229L7.50007 13.7326L4.62329 5.10229H10.3768Z" fill="#F53241"/>
                <path d="M10.3768 5.10229L7.5 13.7326V5.10229H10.3768Z" fill="#CE0045"/>
              </svg>
              <span className="text-xs text-[#ff4867] font-bold ml-1">Premium</span>
            </div>
          </div>
          <h3 className="text-[20px] font-bold leading-normal">{title}</h3>
          <p className="text-[#76757A] text-sm font-medium mt-1 leading-[20px]">
            {/* {description} */}
            Experience institutional-grade precision with real-time daily support, resistance, and opening levels that react perfectly with market movement. Fully customizable and built for intraday traders and scalpers and giving structure, clarity, and confidence to take high-probability trades every session.
          </p>
          <div className="flex justify-between items-center self-stretch">
          <div className="flex items-center text-white font-semibold text-[20px] leading-normal mt-4">
            ₹ {productAmount}
            <span className="text-gray-400 text-[15px] ml-2">/mo</span>
          </div>
          <div className="mt-6 flex gap-3 justify-end">
            <button className="border border-[#D9D9D9] rounded-[8px] flex px-[24px] py-[6px] justify-center items-center gap-[10px]">
              View Demo
            </button>
            <button
              className="flex h-[35px] px-[24px] py-[10px] justify-center items-center gap-[10px] rounded-[8px] bg-[#2563FF]"
              onClick={() => addToCart(productId)}
            >
              Upgrade Premium Access
            </button>
          </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-1 px-5 pb-5">
          <span className=" bg-gradient-to-r from-[#08B7FC] to-[#0050C0] bg-clip-text text-transparent font-inter text-[12px] font-semibold leading-normal">Free</span>
          <h3 className="text-white font-semibold text-lg mt-2">
            {title}
          </h3>
          <p className="text-sm text-gray-300 mt-2 leading-relaxed">
            {description}
          </p>
          <button
            className="mt-8 w-full  btn-primary"
            onClick={() => addToCart(productId)}
          >
            Add Product
          </button>
        </div>
      )}
    </div>
  );
};


interface TypeToggelButton {
  active: string;
  setActive: (value: string) => void;
}

const ToggelButton: React.FC<TypeToggelButton> = ({ active, setActive }) => {
  return (
    <div className="flex items-center bg-[#1A1A1A] border-2 border-[#FFFFFF1A] rounded-full p-1 w-[160px]">
      {/* MONTHLY */}
      <button
        onClick={() => setActive("monthly")}
        className={`flex-1 text-center py-1 rounded-full text-sm transition-all
          ${active === "monthly" ? "bg-[#FBA003] text-white" : "text-white"}`}
      >
        Monthly
      </button>

      {/* YEARLY */}
      <button
        onClick={() => setActive("yearly")}
        className={`flex-1 text-center py-1 rounded-full text-sm transition-all
          ${active === "yearly" ? "bg-[#FBA003] text-white" : "text-white"}`}
      >
        Yearly
      </button>
    </div>
  );
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const { refreshCart } = useCart();

  // NEW → toggle state
  const [billingType, setBillingType] = useState("monthly");

  const addToCart = async (productId: string) => {
    try {
      if (!user) {
        throw new Error("User not authenticated");
      }
      const response = await AddtoCart(user?._id, productId);

      if (response.success) {
        enqueueSnackbar("Product Added In Cart", { variant: "success" });
        refreshCart();
      } else {
        enqueueSnackbar(response.message, { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Failed To Add In Cart", { variant: "error" });
    }
  };

  const GetAllProduct = async () => {
    try {
      const response = await GetProducts();
      setProducts(response.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    GetAllProduct();
  }, []);

  return (
    <div className="bg-black min-h-screen w-full text-white pb-16 px-0">
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

        <div className="w-full">
          {products
            .filter((p) => p.isPremium === true)
            .map((p) => (
              <TradeCard
                {...p}
                addToCart={addToCart}
                billingType={billingType}
                setBillingType={setBillingType}
                key={p._id}
              />
            ))}
        </div>
      </section>

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
          Access institutional-grade indicators designed to give you an edge
          free forever.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {products
            .filter((p) => p.isPremium === false)
            .map((c) => (
              <TradeCard
                {...c}
                addToCart={addToCart}
                billingType={billingType}
                setBillingType={setBillingType}
                key={c._id}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

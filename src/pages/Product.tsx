import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Product } from "../services/Product/Productinterface";
import { GetProducts } from "../services/Product/Productapi";
import { AddtoCart } from "../services/Cart/Cartapi";
import { useAuth } from "../Context/Auth";
import { IndianRupee } from "lucide-react";
import { useSnackbar } from "notistack";
import { useCart } from "../Context/CartContext";

type CardType = "premium" | "free";

interface TradeCardProps {
  chartSrc: string;
  type: CardType;
  title: string;
  description: string;
  cta?: (navigate: ReturnType<typeof useNavigate>) => React.ReactNode;
}

const TradeCard: React.FC<
  Product & { addToCart: (productId: string) => Promise<void> }
> = ({
  // chartSrc,
  productAmount,
  isPremium,
  name: title,
  description,
  _id: productId,
  addToCart,
}) => {
  return (
    <div
      className={`rounded-xl bg-[#18181b] ${
        isPremium ? "p-6 flex flex-row items-center gap-6 w-full" : "p-0"
      } shadow group relative`}
      style={isPremium ? { minHeight: 150 } : undefined}
    >
      {/* Chart image */}
      <img
        // src={chartSrc}
        alt="indicator chart"
        className={`rounded-md object-cover ${
          isPremium
            ? "w-40 h-24 bg-[#222229] mr-4"
            : "w-full h-32 bg-[#222229] rounded-t-xl"
        }`}
      />

      {/* Card contents */}
      <div
        className={`flex-1 ${isPremium ? "" : "p-4 flex flex-col"} text-white`}
      >
        <div className="flex items-center gap-2 mb-1.5">
          {isPremium && (
            <span className="text-xs text-[#ff4867] font-bold">Premium</span>
          )}
          {!isPremium && (
            <span className="text-xs text-[#33e17c] font-semibold">Free</span>
          )}
        </div>
        <h3
          className={`${
            isPremium ? "font-bold text-base" : "font-semibold text-base mt-0"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm text-gray-300 mt-1 ${
            isPremium ? "" : "line-clamp-2"
          }`}
        >
          {description}
        </p>
        <div className="flex items-center">
          {/* <p> */}
          <IndianRupee size={14} /> {productAmount}
          {/* </p> */}
        </div>
        <div className="mt-6 flex gap-3 justify-end">
          {isPremium ? (
            <>
              <button className="rounded px-3 py-1.5 text-sm bg-[#232334] text-[#7aaeeb] border border-[#232334] hover:bg-[#25263c]">
                View Demo
              </button>
              <button
                className="btn-primary"
                onClick={() => addToCart(productId)}
              >
                Upgrade Premium Access
              </button>
            </>
          ) : (
            <>
              <button
                className="btn-primary"
                onClick={() => addToCart(productId)}
              >
                Add To Cart
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const { refreshCart } = useCart();
  const addToCart = async (productId: string) => {
    try {
      if (!user) {
        throw new Error("User not authenticated");
      }
      const response = await AddtoCart(user?._id, productId);
      console.log("Product added to cart:", response);
      if (response.success) {
        enqueueSnackbar("Product Added In Cart", { variant: "success" });
        refreshCart();
      } else {
        enqueueSnackbar(response.message, { variant: "error" });
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      enqueueSnackbar("Faild To Add In Cart", { variant: "error" });
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
    // Fetch products from API if needed
    GetAllProduct();
  }, []);

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
          {products
            .filter((p) => p.isPremium === true)
            .map((p) => (
              <TradeCard addToCart={addToCart} {...p} key={p.name} />
            ))}
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
          Access institutional-grade indicators designed to give you an edge
          free forever.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {products
            .filter((p) => p.isPremium === false)
            .map((c) => (
              <TradeCard addToCart={addToCart} {...c} key={c.name} />
            ))}
        </div>
      </section>
    </div>
  );
}

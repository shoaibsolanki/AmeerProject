import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useAuth } from "./Auth";
import { ClearCart, GetTocart, RemoveFromCart } from "../services/Cart/Cartapi";
import { useSnackbar } from "notistack";

interface Product {
  _id: string;
  name: string;
  isPaid: boolean;
  subscriptionType?: string;
  productAmount: number;
}

interface CartContextType {
  products: Product[];
  total: number;
  removeProduct: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  refreshCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  const fetchCart = async () => {
    try {
      if (user?._id) {
        const response = await GetTocart(user._id);
        const fetchedProducts = response.cart.products;
        setProducts(fetchedProducts);
        const calculatedTotal = fetchedProducts.reduce(
          (sum: number, product: Product) => sum + product.productAmount,
          0
        );
        setTotal(calculatedTotal);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      setProducts([]);
      setTotal(0);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [user]);

  const removeProduct = async (productId: string) => {
    try {
      if (!user?._id) return;
      const res = await RemoveFromCart(user._id, productId);
      if (res.success) {
        const updatedProducts = products.filter((p) => p._id !== productId);
        setProducts(updatedProducts);
        const updatedTotal = updatedProducts.reduce(
          (sum, p) => sum + p.productAmount,
          0
        );
        setTotal(updatedTotal);
        enqueueSnackbar("Product Removed From Cart");
      } else {
        enqueueSnackbar("Failed to remove product from cart");
      }
    } catch (error) {
      enqueueSnackbar("Failed to remove product from cart");
      console.error("Error removing product:", error);
    }
  };

  const clearCart = async () => {
    try {
      if (!user?._id) return;
      const res = await ClearCart(user._id);
      if (res.success) {
        setProducts([]);
        setTotal(0);
        enqueueSnackbar("Clear Cart Successful");
        // navigate("/products");
      } else {
        enqueueSnackbar("Faild to Clear Cart");
      }
    } catch (error) {
      console.error("Error clearing cart:", error);
      enqueueSnackbar("Faild to Clear Cart");
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        removeProduct,
        clearCart,
        refreshCart: fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

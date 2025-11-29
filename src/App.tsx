import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detailpage from "./pages/Detailpage";
import Announcements from "./pages/Announcement";
import Product from "./pages/Product";
import PremiumBenefits from "./pages/PremiumBenefits";
import Checkout from "./pages/Checkout";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/Protectedroute";
import { CartProvider } from "./Context/CartContext"; // import CartProvider
import AdminRoute from "./admin/AdminRoute";
import Dashboard from "./admin/pages/Dashboard";
import { useEffect, useState } from "react";
import FullLoader from "./components/FullLoader";
export default function App() {
   const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    // yahan pe jo bhi initial work hai (auth check, user fetch, etc.) karo
    const init = async () => {
      // await fetchUser();
      // minimum 1–1.5 sec delay for smooth splash (optional)
      await new Promise((res) => setTimeout(res, 1500));
      setAppLoading(false);
    };
    init();
  }, []);

  if (appLoading) {
    return (<FullLoader />);
  }
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Wrap protected routes here */}
            <Route element={<ProtectedRoute />}>
              <Route index element={<Home />} />
              <Route path="Details" element={<Detailpage />} />
              <Route path="announcements" element={<Announcements />} />
              <Route path="products" element={<Product />} />
              <Route path="upgrade-premium" element={<PremiumBenefits />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
            <Route path="admin" element={<AdminRoute />}>
              <Route index element={<Dashboard />} />
              {/* <Route path="users" element={<UserManagement />} /> */}
              {/* Add more admin routes here */}
            </Route>
            {/* Public route */}
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

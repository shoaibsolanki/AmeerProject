import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detailpage from "./pages/Detailpage";
import Announcements from "./pages/Announcement";
import Product from "./pages/Product";
import PremiumBenefits from "./pages/PremiumBenefits";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Details" element={<Detailpage />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="products" element={<Product />} />
          <Route path="upgrade-premium" element={<PremiumBenefits />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Router>
  );
}

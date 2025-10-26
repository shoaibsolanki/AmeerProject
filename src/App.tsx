import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Detailpage from "./pages/Detailpage";
import Announcements from "./pages/Announcement";
// import Signup from "./components/Signup";
// import VerifyEmail from "./components/verify";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="Details" element={<Detailpage />} />
          <Route path="announcements" element={<Announcements />} />

          {/* <Route path="signup" element={<Signup />} />
          <Route path="verify" element={<VerifyEmail />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

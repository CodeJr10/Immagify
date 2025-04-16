import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import { AppContext } from "./context/AppContext";
import BuyCredit from "./pages/BuyCredit";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Result from "./pages/Result";
import { ToastContainer } from "react-toastify";

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b frm-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

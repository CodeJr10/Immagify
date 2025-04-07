import { Route, Routes } from "react-router-dom";

import BuyCredit from "./pages/BuyCredit";
import Footer from "./components/footer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import React from "react";
import Result from "./pages/Result";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b frm-teal-50 to-orange-50">
      <Navbar />
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

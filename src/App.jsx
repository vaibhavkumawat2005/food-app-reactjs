import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/placeorder/Placeorder";
import Footer from "./components/Footer/Footer";
import LoginPopUp from "./components/loginPop/LoginPopUp";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </AuthProvider>
  );
};

export default App;

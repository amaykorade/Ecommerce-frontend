// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import ProductDetail from "./components/ProductDetail/ProductDetail.js";
import PageNotFound from "./components/PageNoteFound/PageNotFound.js";
import Cart from "./components/Cart/Cart.js";
import ProductListing from "./components/ProductListing/ProductListing.js";
import About from "./components/About/About.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import Payment from "./components/Payment/Payment.js";
import Login from "./components/Admin/Login.js";
import Signup from "./components/Admin/Signup.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
import { useDispatch } from "react-redux";
import { setCredentials } from "./features/user/userSlice.js";
// import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const user = {};
      dispatch(setCredentials({ user, token }));
    }
  })

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/:prodId" element={<ProductDetail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          } />
          <Route path="/product" element={<ProductListing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

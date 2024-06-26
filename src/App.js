// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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
import AdminRoute from "./components/PrivateRoute/PrivateAdminRoute.js";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUser } from "./features/user/userSlice.js";
import Analytics from "./components/Admin/pages/Analytics.js";
import ProductCard from "./components/ProductCard/ProductCard.js";

// Admin
import Login from "./components/Admin/Login.js";
import Signup from "./components/Admin/Signup.js";
import Products from "./components/Admin/pages/Project.js";
import ProductForm from "./components/Admin/pages/ProductForm.js";
import Users from "./components/Admin/pages/User.js";
import UserOrders from "./components/Orders/UserOrders.js";


// import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  // const location = useLocation();

  // Function to determine if the current path is an admin page
  // const isAdminPage = location.pathname.startsWith("/admin");

  return (
    // <div className="App">
    //   <Router>
    //     <Header />
    //     <Routes>
    //       <Route path="/user/login" element={<Login />} />
    //       <Route path="/user/signup" element={<Signup />} />
    //       <Route path="/" element={<Home />} />
    //       <Route path="/:prodId" element={<ProductDetail />} />
    //       <Route path="/home" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<ContactUs />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/products" element={<ProductListing />} />
    //       <Route path="/payment" element={<Payment />} />
    //       <Route path="/product-form" element={<ProductForm />} />
    //       <Route path="/admin" element={<Analytics />} />
    //       <Route path="/admin/users" element={<Users />} />
    //       <Route path="*" element={<PageNotFound />} />
    //     </Routes>
    //     <Footer />
    //   </Router>
    // </div>


    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Function to determine if the current path is an admin page
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* {!isAdminPage} */}
      {!isAdminPage && <Header />}
      <main>
        <Routes>
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/:prodId" element={<ProductDetail />} />
          <Route path="/productcard" element={<ProductCard />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/orders" element={<UserOrders />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/admin" element={<Analytics />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/product-form" element={<ProductForm />} />
          <Route path="/admin/product" element={<Products />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
      {/* {!isAdminPage} */}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;

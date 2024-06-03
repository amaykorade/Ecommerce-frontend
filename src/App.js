import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"
// import './App.scss';
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import ProductDetail from "./components/ProductDetail/ProductDetail.js";
import PageNotFound from "./components/PageNoteFound/PageNotFound.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:prodId" element={<ProductDetail />} />
          <Route element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

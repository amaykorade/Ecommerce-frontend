import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncProducts } from "../../../features/products/productSlice";

function Sidebar() {


  return (
    <>
      <div className="Sidebar">
        <h3> MusicShopify </h3>
        <ul className="Listname">
          <li className="list list-option-selected">
            <Link to="/admin" >ANALYTICS</Link>
          </li>
          <li className="list">
            <Link to="/admin/users">USERS</Link>
          </li>
          <li className="list">
            <Link to="/admin/product-form">PRODUCTS FORM</Link>
          </li>
          <li className="list">
            <Link to="/admin/product">PRODUCT MANAGEMENT </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
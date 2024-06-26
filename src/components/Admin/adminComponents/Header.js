import React from "react";
// import { styled } from "styled-components";
import { AiOutlineReload } from "react-icons/ai";

import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/user/userSlice";
import { Navigate, useNavigate } from "react-router-dom";

const Header = ({ title, pagename }) => {

  const navigate = useNavigate();
const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/user/login');
  };

  return (
    <>
      <div className="page-content">
        <button type="button" id="btn" onClick={handleLogout} > 
          Logout
        </button>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <div className="header-subsection">
          <p>{pagename}</p>
          <AiOutlineReload className="reload-icon" />
        </div>
      </div>
      <hr className="header-section-line" />
    </>
  );
};

export default Header;

// const Style = styled.header`
//   position: relative;
//   .page-content {
//     /* height: 205px; */
//   }
//   .page-content .header-subsection {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     font-size: 20px;
//     color: #53c5cd;
//     font-family: "Lato", sans-serif;
//     text-align: left;
//     margin: 0px 85px 0px 35px ;
//   }
//   .reload-icon {
//     font-size: large; 
//     cursor: pointer;
//   }
// `;
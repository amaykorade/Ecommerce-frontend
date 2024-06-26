import React, { useRef, useEffect, useState } from "react";

import "./Analytics.css";
import Header from "../adminComponents/Header.js";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import Sidebar from "../adminComponents/Sidebar.js";

function Analytics() {

  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const toggleUsercard = () => {
    setOpen(!open);
  };
  const toggleProjectcard = () => {
    setExpanded(!expanded);
  };

  // useEffect(()=>{
  //   document.body.addEventListener('click',()=>{
  //     setOpen(false);
  //     setExpanded(false);
  //   })
  // },[])

  // console.log(open);
  // console.log(expanded)

  return (
    <div className="analytics-div-section">
      <Sidebar />
      <div className="admin-pannel-section">
        <Header title="ADMIN PANEL" pagename="ANALYTICS" />
        <section className="analytics-container">

          {/* No. ofUsers Section  */}
          <div className="dropdown-container1">
            <h2> Number of users</h2>
            <h1>15000</h1>
            {open && (
              <div className="users-info-section">
                <hr />
                <div className="registered-users">
                  <label>Registered Users : </label>
                  <p>15000</p>
                </div>
                <div className="registered-users" >
                  <label>Purchased Products :</label>
                  <p>5000</p>
                </div>
                <div className="learn-more-section">
                  {open ? (<> show less<MdKeyboardArrowUp className="analy-i" onClick={toggleUsercard} /> </>) : ''}
                </div>
              </div>
            )}
            <span >
              <div className="learn-more-section">
                {open ? '' : (<>Learn More<MdKeyboardArrowDown className="analy-i" onClick={toggleUsercard} /></>)}
              </div>
            </span>
          </div>

          {/* No. of Project Section  */}
          <div className="dropdown-container2">
            <h2>Number of products</h2>
            <h1>170</h1>
            {expanded && (
              <div className="project-info-section">
                <hr />
                <div className="twod-design-info">
                  <span>Category 1</span>
                  <p>50</p>
                </div>
                <div className="threed-design-info">
                  <span>Category 2</span>
                  <p>100</p>
                </div>
                <div className="combo-design-info">
                  <span>Category 3 </span>
                  <p>70</p>
                </div>
                <div className="learn-more-section">
                  {expanded ? (<> show less<MdKeyboardArrowUp className="analy-i" onClick={toggleProjectcard} /> </>) : (<>Learn More<MdKeyboardArrowDown className="analy-i" onClick={toggleProjectcard} /></>)}
                </div>
              </div>
            )}
            <span >
              <div className="learn-more-section">
                {expanded ? '' : (<>Learn More<MdKeyboardArrowDown className="analy-i" onClick={toggleProjectcard} /></>)}
              </div>
            </span>
          </div>


          <div className="dropdown-container3">
            <h2>Cash Inflow</h2>
            <h1>4000 ₹</h1>
            <p>Cash Inflow : All Time</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Analytics;
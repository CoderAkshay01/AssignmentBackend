import React from "react";
import Navbar from "../navbar/Navbar";
import "./LandingPage.css";

const LandingPage = ({children}) => {
  return (
    <div className="maincontainer">
      <div className="nav">
        <Navbar />
      </div>
      <div className="cardContainer">
       {children}
      </div>
    </div>
  );
};

export default LandingPage;

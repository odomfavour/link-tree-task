import React from "react";
import logo from "../../images/I4G.png";
import zuri from "../../images/Zuri.Internship_Logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <img src={zuri} alt="" />
        </div>
        <p>HNG Internship 9 Frontend Task</p>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

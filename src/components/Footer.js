import React from "react";
import smallLogo from "../logos/small-logo.png";

const Footer = () => (
  <footer className="Footer" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", height: "10vh" }}>
    <img src={smallLogo} className="Splish-logo" alt="logo" />
    <div>
      <p>Cortney Somethig - Managing Partner</p>
      <p>splishsplash@gmail.com</p>
    </div>
    <img src={smallLogo} className="Splish-logo" alt="logo" />
  </footer>
);

export default Footer;

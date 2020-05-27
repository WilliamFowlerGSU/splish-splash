import React from "react";
import smallLogo from "../logos/small-logo.png";

const Footer = () => (
  <footer className="Footer">
    <img src={smallLogo} className="Splish-logo" alt="logo" />
    <p>Splish Splash Laundromat</p>
    <p>2932 Canton Rd, Marietta, GA 30066</p>
    <p>(770)421-1819</p>
    <img src={smallLogo} className="Splish-logo" alt="logo" />
  </footer>
);

export default Footer;

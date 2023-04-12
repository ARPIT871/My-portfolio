import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from "@mui/icons-material/Twitter";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://github.com/ARPIT871"> <GitHubIcon /></Link>
        <Link to="https://twitter.com/arpitrajput871"><TwitterIcon /></Link>
        <Link to="https://www.linkedin.com/in/arpit-rajput-7420b1217"><LinkedInIcon /></Link>




      </div>
      <p> &copy; 2022 arpitportfolio.com</p>
    </div>
  );
}

export default Footer;

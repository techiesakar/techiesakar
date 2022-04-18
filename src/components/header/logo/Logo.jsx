import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="site-branding">
      <Link to="/" className="custom-logo-link">
        {props.BrandLogo ? (
          <img className="w-8" src={props.BrandLogo} alt={props.imageAlt} />
        ) : (
          <h3>Sakar Aryal</h3>
        )}
      </Link>
    </div>
  );
};

export default Logo;

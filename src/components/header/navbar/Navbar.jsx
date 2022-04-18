import { NavLink } from "react-router-dom";
import React from "react";

const Navbar = (props) => {
  const styles = {
    className: "menu-item",
  };
  const links = [
    {
      className: styles.className,
      to: "/",
      name: "Home",
    },
    {
      className: styles.className,
      to: "/about",
      name: "About",
    },
    {
      className: styles.className,
      to: "/contact",
      name: "Contact",
    },
    {
      className: styles.className,
      to: "/blog",
      name: "Blog",
    },
    {
      className: styles.className,
      to: "/tools",
      name: "Tools",
    },
  ];

  return (
    <>
      <nav id="siteNavigation" className="site-nav"> 
        <ul className="primary-menu">
          {links.map((link, index) => (
            <li key={index} className={`${link.className}`}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active underlined"
                    : "nav-link underlined"
                }
              >
               
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

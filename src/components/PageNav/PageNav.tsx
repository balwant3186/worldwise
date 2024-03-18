import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

import classes from "./PageNav.module.css";

type PageNavProps = {
  children?: React.ReactNode;
};

const PageNav: React.FC<PageNavProps> = () => {
  return (
    <nav className={classes.nav}>
      <Logo />

      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={classes.ctaLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default PageNav;

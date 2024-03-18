import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./AppNav.module.css";

type AppNavProps = {
  children?: React.ReactNode;
};

const AppNav: React.FC<AppNavProps> = () => {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default AppNav;

import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

import React from "react";

type LogoProps = {
  children?: React.ReactNode;
};

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link to="/">
      <img src="/logo.png" alt="WorldWise logo" className={classes.logo} />
    </Link>
  );
};
export default Logo;

import React from "react";

import classes from "./Footer.module.scss";
type FooterProps = {
  children?: React.ReactNode;
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>
        &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
};
export default Footer;

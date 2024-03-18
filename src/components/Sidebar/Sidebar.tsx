import React from "react";

import classes from "./Sidebar.module.css";
import Logo from "../Logo/Logo";
import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

type SidebarProps = {
  children?: React.ReactNode;
};

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className={classes.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
};
export default Sidebar;

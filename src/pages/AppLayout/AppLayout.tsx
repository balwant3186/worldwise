import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import classes from "./AppLayout.module.scss";
import Map from "../../components/Map/Map";
import User from "../../components/User/User";

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <div className={classes.app}>
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};
export default AppLayout;

import React from "react";
import AppNav from "../../components/AppNav/AppNav";

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <div>
      <AppNav />
      <p>App</p>
    </div>
  );
};
export default AppLayout;

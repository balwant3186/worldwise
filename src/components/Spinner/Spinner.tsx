import classes from "./Spinner.module.css";

import React from "react";

type SpinnerProps = {
  children?: React.ReactNode;
};

const Spinner: React.FC<SpinnerProps> = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}></div>
    </div>
  );
};
export default Spinner;

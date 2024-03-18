import Spinner from "../Spinner/Spinner";
import classes from "./SpinnerFullPage.module.css";

import React from "react";

type SpinnerFullPageProps = {
  children?: React.ReactNode;
};

const SpinnerFullPage: React.FC<SpinnerFullPageProps> = () => {
  return (
    <div className={classes.spinnerFullpage}>
      <Spinner />
    </div>
  );
};
export default SpinnerFullPage;

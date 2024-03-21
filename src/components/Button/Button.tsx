import React, { MouseEvent } from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  type: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<ButtonProps> = ({ type, children, onClick }) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${classes[type]}`}>
      {children}
    </button>
  );
};
export default Button;

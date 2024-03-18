import classes from "./Message.module.css";

import React from "react";

type MessageProps = {
  message: string;
};

const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <p className={classes.message}>
      <span role="img">👋</span> {message}
    </p>
  );
};
export default Message;

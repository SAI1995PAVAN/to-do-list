import React from "react";
import "./Message.css";

const Message = (props) => {
  const { alertMsg, message } = props;
  return (
    <p className={alertMsg === "added" ? `message add` : `message not-added`}>
      {message}
    </p>
  );
};

export default Message;

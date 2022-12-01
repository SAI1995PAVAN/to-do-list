import React, { useState } from "react";

const UseStatee = () => {
  const [text, setText] = useState("hello");

  const handleButton = () => {
    text === "hello" ? setText("hello world") : setText("hello");
  };
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={handleButton}>Click</button>
    </div>
  );
};

export default UseStatee;

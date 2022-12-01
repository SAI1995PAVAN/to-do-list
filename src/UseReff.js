import React from "react";
import { useRef } from "react";

const UseReff = () => {
  const examRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    examRef.current = examRef.current + 1;
    console.log(examRef.current);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex" }}>
        <input type="text" ref={examRef} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UseReff;

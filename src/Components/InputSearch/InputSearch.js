import React from "react";
import "./InputSearch.css";

const InputSearch = (props) => {
  const { input, handleInputChange,handleSubmit,edit } = props;
  return (
    <article className="input-search">
      <form className="input-form" onSubmit={handleSubmit} >
        <input
          className="input"
          type="text"
          placeholder="e.g Bread"
          onChange={handleInputChange}
          value={input}
        />
        <button className="submit-button">{edit ? `Edit` : `Submit`}</button>
      </form>
    </article>
  );
};

export default InputSearch;

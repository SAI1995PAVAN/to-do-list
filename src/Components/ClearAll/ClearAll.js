import React from "react";
import "./ClearAll.css";

const ClearAll = (props) => {
  const { itemsList, handleClearAll } = props;
  return (
    <article className={itemsList.length > 0 ? `clear-all` : `no-display`}>
      <button onClick={handleClearAll}>Clear Items</button>
    </article>
  );
};

export default ClearAll;

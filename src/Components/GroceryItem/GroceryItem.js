import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import "./GroceryItem.css";

const GroceryItem = (props) => {


  const { item,handleEdit,handleDelete} = props;
  return (
    <div className="item-details">
      <p className="item-name">{item}</p>
      <div className="icons">
        <button className="icon">
          <FaPen color="#0BDA51" size={12} onClick={()=>handleEdit(item) }/>
        </button>
        <button className="icon">
          <FaTrash color="#D22B2B" size={12} onClick={()=>handleDelete(item) }/>
        </button>
      </div>
    </div>
  );
};

export default GroceryItem;

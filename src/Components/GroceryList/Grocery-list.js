import React from "react";
import GroceryItem from "../GroceryItem/GroceryItem";
import "./GroceryList.css";

const GroceryList = (props) => {
  const { itemsList,handleEdit,handleDelete } = props;

  
  return (
    <article className="items-list">
      {itemsList.map((item, index) => {
        return <GroceryItem item={item} key={index} handleEdit={handleEdit} handleDelete={handleDelete}/>;
      })}
    </article>
  );
};

export default GroceryList;

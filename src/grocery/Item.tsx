import React, { useState } from "react";

interface Props{    
    onAdd : ({}) => void;
}

const Item = ({onAdd}:Props) => {

  const [groceryItem, setGroceryItem] = useState({
    name: "",
    quantity: 0,
    amount: 0,
  });

  return (
    <>
      <form>
        <label htmlFor="name"> Item </label>
        <input
          name="name"
          value={groceryItem.name}
          onChange={(e) =>
            setGroceryItem({ ...groceryItem, name: e.target.value })
          }
        />{" "}
        <br />
        <label htmlFor="quantity"> How Many </label>
        <input
          name="quantity"
          value={groceryItem.quantity}
          onChange={(e) =>
            setGroceryItem({
              ...groceryItem,
              quantity: parseInt(e.target.value),
            })
          }
        />
        <br />
        <label htmlFor="amount"> How Much </label>
        <input
          name="amount"
          value={groceryItem.amount}
          onChange={(e) =>
            setGroceryItem({ ...groceryItem, amount: parseInt(e.target.value) })
          }
        />
        <br />
        <button onClick={()=>onAdd(groceryItem)}>Add</button>
      </form>
    </>
  );
};

export default Item;

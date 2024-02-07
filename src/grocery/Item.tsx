import React, { useRef, useState } from "react";

interface GroceryObject{
  name:String;
  quantity: Number;
  amount: Number;
  group:String;
}
interface Props{    
    onAdd : ({}:GroceryObject) => void;
}

const Item = ({onAdd}:Props) => {
  // using useRef
  // const nameRef = useRef<HTMLInputElement>(null);
  const [groceryItem, setGroceryItem] = useState({
    name: "",
    quantity: '',
    amount: '',
    group:""
  });

  return (
    <>a
      <form onSubmit={(e)=> {
          e.preventDefault();
          onAdd(groceryItem);

          // using useRef video 52 'accessing input field' ang title
          // console.log(nameRef.current?.value);
          
        }}>
        <label htmlFor="name"> Item </label>
        <input          
          name="name"
          value={groceryItem.name}
          onChange={(e) =>
            setGroceryItem({ ...groceryItem, name: e.target.value })
          }
          // using useRef
          // ref={nameRef}
          // value={nameRef.current?.valuea}
        />
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
        />aa
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
        <label htmlFor="dropdown">Select Group:</label>
        <select id="dropdown" 
          onChange={(e) =>
            setGroceryItem({ ...groceryItem, group: e.target.value })
          }
        >
          <option value="">Select...</option>
          <option value="Weapons">Weapons</option>
          <option value="Food">Food</option>
          <option value="Others">Others</option>
        </select>
        <br/>
        <button 
        // onClick={()=>onAdd(groceryItem)}
        >Add</button>
      </form>
    </>
  );
};

export default Item;

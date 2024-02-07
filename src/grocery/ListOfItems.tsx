import React, { useState } from "react";
import Item from "./Item";

const ListOfItems = () => {

    const [list, setList] = useState([{ itemName: 'a', quantity: 5, amount: 20 }]);
    const onAdd = (groceryItem:{}) => setList([...list,{itemName:groceryItem.name, quantity:groceryItem.quantity, amount:groceryItem.amount}]);
  
  return (
    <>
    <Item onSubmit={onAdd}/>
      <table>
        <thead> 
          <tr>
            <th>name</th>
            <th>quantity</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td key={index + item.itemName}>{item.itemName}</td>
              <td key={index + item.quantity}>{item.quantity}</td>
              <td key={index + item.amount}>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListOfItems;

import React, { useState } from "react";
import Item from "./Item";

const ListOfItems = () => {

  const [list, setList] = useState([{ itemName: 'a', quantity: 5, amount: 20 }]);
  const onAdd = (item) => setList([...list,{itemName:item.name, quantity:item.quantity, amount:item.amount}]);  
  
  return (
    <>
    <Item onAdd = {()=>onAdd}/>
      <table className="w-full whitespace-nowrap">
        <thead> 
          <tr className="focus:outline-none h-16 border border-gray-100 rounded">
            <th>name</th>
            <th>quantity</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} className="focus:outline-none h-16 border border-gray-100 rounded">            
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

import { MouseEvent, useState } from "react";

import ListOfItems from "./grocery/ListOfItems";
import Item from "./grocery/Item";

function App() { 

  const [list, setList] = useState([{ itemName: '', quantity: '', amount: '', group:'' }]);  

  const onAdd = (item) => setList([...list,{itemName:item.name, quantity:item.quantity, amount:item.amount, group:item.group}]);    
  
  return (
    <div className="App">
       
        <div>
          <Item onAdd = {onAdd}/>
          <ListOfItems list={list} handleDelete={(selectIndex)=> setList(list.filter((anItem, index)=> index !==selectIndex))}/>
        </div>
    </div>
  )
}

export default App

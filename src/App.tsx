import { MouseEvent, useState } from "react";

import ListOfItems from "./grocery/ListOfItems";
import Item from "./grocery/Item";
import Increment from "./component/Increment";
import Item2 from "./grocery/Item2";

function App() { 

  const [list, setList] = useState([{ itemName: '', quantity: '', amount: '', group:'' }]);  

  const onAdd = (item) => setList([...list,{itemName:item.itemName, quantity:item.quantity, amount:item.amount, group:item.group}]);    
  
  return (
    <div className="App">
       
        <div>
          {/* <Item onAdd = {onAdd}/> */}
          <Item2 onAdd ={onAdd}/>
          <ListOfItems list={list} handleDelete={(selectIndex)=> setList(list.filter((anItem, index)=> index !==selectIndex))}/>
        </div>
        
    </div>
  )
}

export default App

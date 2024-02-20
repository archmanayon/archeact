import { MouseEvent, useState } from "react";

import ListOfItems from "./grocery/ListOfItems";
import Item from "./grocery/Item";
import Increment from "./component/Increment";
import Item2 from "./grocery/Item2";
import { FieldValues } from "react-hook-form";

function App() {
  const [list, setList] = useState([
    { itemName: "", quantity: 0, price: 0, totalAmount:0, group: "" },
  ]);

  const [category, SetCategory]= useState(["Weapon", "Food", "others"]);

  const onAdd = (item: FieldValues) =>
    setList([
      ...list,
      {
        itemName: item.itemName,
        quantity: item.quantity,
        price: Number(item.price),
        totalAmount: Number(item.price) * Number(item.quantity),
        group: item.group,
      },
    ]);

  return (
    <div className="App">
      <div>
        {/* <Item onAdd = {onAdd}/> */}
        <Item2 category={category} onAdd={onAdd}/>
        <ListOfItems
          category={category}
          list={list.filter((anItem, index) => index !== 0)}
          handleDelete={(selectIndex) =>
            setList(list.filter((anItem, index) => index !== selectIndex))
          }
        />
      </div>
    </div>
  );
}

export default App;

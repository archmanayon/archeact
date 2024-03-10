import { MouseEvent, useState } from "react";

import ListOfItems from "./grocery/ListOfItems";
import Item from "./grocery/Item";
import Increment from "./component/Increment";
import Item2 from "./grocery/Item2";
import { FieldValues } from "react-hook-form";

function App() {
  const [list, setList] = useState([
    { id: 0, itemName: "", quantity: 0, price: 0, totalAmount: 0, group: "" },
  ]);

  const [category, SetCategory] = useState(["Weapon", "Food", "others"]);

  const onAdd = (item: FieldValues) =>
    setList([
      ...list,
      {
        id: list.length,
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
        <Item2 category={category} onAdd={onAdd} />
        <ListOfItems
          category={category}
          list={list.filter((item) => item.id !== 0)}
          handleDelete={(selectId) =>
            setList(list.filter((item) => item.id !== selectId))
          }
        />
      </div>
    </div>
  );
}

export default App;

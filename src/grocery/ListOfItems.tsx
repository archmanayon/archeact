import { useState } from "react";
import AmountAdjust from "./AmountAdjust";
import Group from "./Group";

interface Props {
  list: { itemName: string; quantity: number; price: number; totalAmount: number; group: string }[];

  handleDelete?: (selectIndex: number) => void;
}
const ListOfItems = ({ list, handleDelete }: Props) => {
  const [dropSelect, setDropSelect] = useState("");  
  const filteredList = list.filter((selectedList) =>
    dropSelect !== "" ? (selectedList.group === dropSelect) : (selectedList.group !== dropSelect)
  );

  const sum = filteredList.reduce((total, item) => total + Number(item.totalAmount), 0);
 
  return (
    <>
      <table className="w-full whitespace-nowrap border-collapse border border-slate-500">
        <thead>
          <tr className="focus:outline-none h-16 border border-gray-100 rounded">
            <th className="border border-slate-600">name</th>
            <th className="border border-slate-600">quantity</th>
            <th className="border border-slate-600">price</th>
            <th className="border border-slate-600">Amount</th>
            <th className="border border-slate-600">
              group
              <Group
                onSelected={(e) => {
                  setDropSelect(e.target.value);
                }}
              />{" "}
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredList
            .map((item, index) => (
              <tr
                key={index}
                className="focus:outline-none h-16 border border-gray-100 rounded"
              >
                <td className="border border-slate-800">{item.itemName}</td>
                <td className="border border-slate-800">
                  {item.quantity.toString()}
                </td>
                <td className="border border-slate-800">
                  <AmountAdjust orig={item.price} />
                </td>
                <td className="border border-slate-800">{item.totalAmount}</td>
                <td className="border border-slate-800">{item.group}</td>
                <td className="border border-slate-800">
                  <button onClick={() => handleDelete? handleDelete(index): null}>DELETE</button>
                </td>
              </tr>
            ))}
          <tr>
            <td></td><td></td>
            <td>total</td>
            <td>{sum}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListOfItems;

import { useState } from "react";
import AmountAdjust from "./AmountAdjust";
import Group from "./Group";

interface Props {
  list: { itemName: string; quantity: number; amount: number; group: string }[];

  handleDelete?: (selectIndex: number) => void;
}
const ListOfItems = ({ list, handleDelete }: Props) => {
  const [dropSelect, setDropSelect] = useState("");  
  const filterList = list.filter((entry) =>
    dropSelect !== "" ? entry.group === dropSelect : entry.group !== dropSelect
  );

  const sum = filterList.reduce((total, item) => total + Number(item.amount), 0);
 
  return (
    <>
      <table className="w-full whitespace-nowrap border-collapse border border-slate-500">
        <thead>
          <tr className="focus:outline-none h-16 border border-gray-100 rounded">
            <th className="border border-slate-600">name</th>
            <th className="border border-slate-600">quantity</th>
            <th className="border border-slate-600">amount</th>
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
          {filterList
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
                  <AmountAdjust orig={item.amount} />
                </td>
                <td className="border border-slate-800">{item.group}</td>
                <td className="border border-slate-800">
                  <button onClick={() => handleDelete? handleDelete(index): null}>DELETE</button>
                </td>
              </tr>
            ))}
          <tr>
            <td></td>
            <td>total</td>
            <td>{sum}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ListOfItems;

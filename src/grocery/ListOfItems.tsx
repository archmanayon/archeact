import { useState } from "react";
import AmountAdjust from "./AmountAdjust";
import Group from "./Group";

interface Props {
  list: { itemName: string; quantity: number; amount: number; group: string }[];
  handleDelete?: (selectIndex: number) => void;
}
const ListOfItems = ({ list, handleDelete }: Props) => {
  const [dropSelect, setDropSelect] = useState("");
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
              <Group onSelected={(e) => setDropSelect(e.target.value)} />{" "}
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {list
            .filter((anItem, index) => index !== 0)
            .filter((entry)=> entry.group === (dropSelect !== "" ? dropSelect: ""))
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
                  <button onClick={() => handleDelete(index)}>DELETE</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListOfItems;

import { useState } from "react";
import AmountAdjust from "./AmountAdjust";
import Group from "./Group";

interface Props {
  category: string[];
  list: {
    id: number;
    itemName: string;
    quantity: number;
    price: number;
    totalAmount: number;
    group: string;
  }[];

  handleDelete?: (selectId: number) => void;
}
const ListOfItems = ({ category, list, handleDelete }: Props) => {
  const [dropSelect, setDropSelect] = useState("");
  // 01 first way to filter based on selected category
  // const filteredList = list.filter((eachItem) =>
  //   dropSelect !== ""
  //     ? eachItem.group === dropSelect
  //     : eachItem.group !== dropSelect
  // );

  // 02 second way to filter based on selected category
  const filteredList = dropSelect
    ? list.filter((eachItem) => eachItem.group === dropSelect)
    : list;

  // const sum = filteredList.reduce((total, item) => total + Number(item.totalAmount),0);
  const sum = filteredList
    .reduce((total, item) => total + Number(item.totalAmount), 0)
    .toFixed(2);

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
                category={category}
                onSelected={(e) => {
                  setDropSelect(e.target.value);
                }}
              />{" "}
            </th>
            <th />
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item) => (
            <tr
              key={item.id}
              className="focus:outline-none h-16 border border-gray-100 rounded"
            >
              <td className="border border-slate-800">{item.itemName}</td>
              <td className="border border-slate-800">
                {item.quantity.toString()}
              </td>
              <td className="border border-slate-800">
                {/* updating price not yet working */}
                {/* <AmountAdjust orig={item.price} /> */}
                {item.price}
              </td>
              <td className="border border-slate-800">{item.totalAmount}</td>
              <td className="border border-slate-800">{item.group}</td>
              <td className="border border-slate-800">
                <button
                  onClick={() => (handleDelete ? handleDelete(item.id) : null)}
                  // onClick={() => console.log(item.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}

          <tr>
            <td></td>
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

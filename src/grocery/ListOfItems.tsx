interface Props {
  list: [
    {
      itemName: String;
      quantity: Number;
      amount: Number;
      group: String;
    }
  ];
  handleDelete?:(selectIndex:Number)=>void;
}
const ListOfItems = ({ list, handleDelete }: Props) => {
  
  return (
    <>
      <table className="w-full whitespace-nowrap border-collapse border border-slate-500">
        <thead>
          <tr className="focus:outline-none h-16 border border-gray-100 rounded">
            <th className="border border-slate-600">name</th>
            <th className="border border-slate-600">quantity</th>
            <th className="border border-slate-600">amount</th>
            <th className="border border-slate-600">group</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {list
            .filter((anItem, index) => index !== 0)
            .map((item, index) => (            
              <tr
                key={index}
                className="focus:outline-none h-16 border border-gray-100 rounded"
              >
                <td className="border border-slate-800">{item.itemName}</td>
                <td className="border border-slate-800">{item.quantity.toString()}</td>
                <td className="border border-slate-800">{item.amount.toString()}</td>
                <td className="border border-slate-800">{item.group}</td>
                <td className="border border-slate-800" ><button onClick={()=>handleDelete(index)} >DELETE</button></td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListOfItems;

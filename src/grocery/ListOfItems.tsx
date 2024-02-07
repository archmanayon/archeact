interface Props {
  list:[{
    itemName: String;
    quantity: Number;
    amount: Number;
    group: String;
  }]
}
const ListOfItems = ({list}: Props) => {

  return (
    <>
    
      <table className="w-full whitespace-nowrap">
        <thead> 
          <tr className="focus:outline-none h-16 border border-gray-100 rounded">
            <th>name</th>
            <th>quantity</th>
            <th>amount</th>
            <th>group</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index} className="focus:outline-none h-16 border border-gray-100 rounded">            
              <td >{item.itemName}</td>
              <td >{(item.quantity.toString())}</td>
              <td >{item.amount.toString()}</td>
              <td >{item.group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListOfItems;

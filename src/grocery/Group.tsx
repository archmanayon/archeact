import { useState } from "react"
interface Props{
  onSelected:(e:React.ChangeEvent<HTMLSelectElement>)=>void;
}


const Group = ({onSelected}:Props) => {
  
  return (
    <div>
      <select        
        onChange={(e)=>onSelected(e)}
      >
        <option value="">All</option>
        <option value="Weapons">Weapons</option>
        <option value="Food">Food</option>
        <option value="Others">Others</option>
      </select>
    </div>
  )
}

export default Group
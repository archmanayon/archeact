import { useState } from "react"
interface Props{
  category : string[];
  onSelected:(e:React.ChangeEvent<HTMLSelectElement>)=>void;
}


const Group = ({category, onSelected}:Props) => {
  
  return (
    <div>
      <select        
        onChange={(e)=>onSelected(e)}
      >
        <option value="">All</option>
        {category.map((categ)=> <option key={categ} value={categ}> {categ} </option>)}
      </select>
    </div>
  )
}

export default Group
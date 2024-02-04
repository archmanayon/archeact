import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface Props{
    cartItems: string[];
    onRemove:(index:Number)=>void;
    onAdd_toCard:(submit:String)=>void;
   
}
export const ShopingCart = ({cartItems, onRemove, onAdd_toCard}:Props) => {
    const [onTypeAdd, setOnTypeAdd] = useState("");
  return (
    <>
        <ul>

            {cartItems.map((item,index)=>                
                
                <li key={index+item}>{index + " " + item}

                    <button onClick={()=> onRemove(index)}>remove</button>

                </li>                
            )}
            
        </ul>
                
        
        <form>
            <input onChange={(e:ChangeEvent)=>setOnTypeAdd(e.target.value)} value={onTypeAdd}></input>            
        </form>
        <button type="submit" onSubmit={()=> onAdd_toCard(...onTypeAdd,)}>add to cart</button>
    </>
  )
}

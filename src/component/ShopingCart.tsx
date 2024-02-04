import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface Props{
    cartItems: string[];
    onRemove:(index:Number)=>void;
    onInputSubmit:(submit:String)=>void;
   
}
export const ShopingCart = ({cartItems, onRemove, onInputSubmit}:Props) => {
    const [fromInput, setFromInput] = useState("");
  return (
    <>
        <form>

            <input id="input_id" onChange={(e)=>setFromInput(e.target.value)} value={fromInput}></input>            
            
        </form>

        <button onClick={()=> {onInputSubmit(fromInput); setFromInput("")}}>add to cart</button>

        <ul>

            {cartItems.map((item,index)=>                
                
                <li key={index+item}>{index + " " + item}

                    <button onClick={()=> onRemove(index)}>remove</button>

                </li>                
            )}
            
        </ul>
                
        
       
        
        
    </>
  )
}

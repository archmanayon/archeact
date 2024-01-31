import { useState } from "react";

interface Props{    
    colors: string[];
    index_color:number;
    selectIndex: (color:string,i:number)=>void;

}

const TrialButton = ({colors, index_color, selectIndex}:Props) => {

    const selectedIndex = "primary";

  return (
    
    <>
        {colors.map((color:string, index:number)=>
        
        <button key={color} value={color}
 
            onClick={()=> selectIndex(color, index)}

            className={index == index_color ? 'btn btn-' + selectedIndex : "btn"}
        > 
            <> {color} </>
            
        </button>)}
    </> 
 
  )
}

export default TrialButton
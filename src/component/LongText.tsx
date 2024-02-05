import { ReactNode, useState } from "react"

interface Props{
    children:String;
}

const LongText = ({children}:Props) => {
  
  const [lessText, setLessText]=useState(true);
  
  return (
    <div>          
        <p>{lessText ? children.substring(0,15) : children}
        <button onClick={()=> setLessText(!lessText)}> {lessText ?". . .read more" : "show less . . ."}</button>
        </p>
    </div>
  )
}


export default LongText
import { ReactNode, useState } from "react"

interface Props{
    children:String;
}

const LongText = ({children}:Props) => {
  
  const [lessText, setLessText]=useState(true);
  const paraButton = children.length > 10 ? 
    <button onClick={()=> setLessText(!lessText)}> {lessText ?'. . .read more' :'show less'}</button> : "" ;
  
  return (
    <div>          
        <p>{lessText ? children.substring(0,15): children}
        
          {paraButton}

        </p>
    </div>
  )
}


export default LongText
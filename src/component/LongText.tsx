import { ReactNode } from "react"

interface Props{
    children:ReactNode;
    lessText:Boolean;
    textLength:Number;
    handleLength:()=>void;
}
const LongText = ({children, textLength, lessText, handleLength}:Props) => {
  return (
    <div>
        <>{textLength}</>
        <p>{children}
        <button onClick={()=>handleLength()}> {lessText ?"read more . . ." : "show less . . ."}</button>
        </p>
    </div>
  )
}

export default LongText
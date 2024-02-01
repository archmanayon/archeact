
interface Props{
    cartItems: string[];
    onRemove:(index:Number)=>void;
}
export const ShopingCart = ({cartItems, onRemove}:Props) => {
  return (
    <>
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

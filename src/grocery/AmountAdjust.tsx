import { useState } from "react";
import { useForm } from "react-hook-form";

interface Props{
    orig:Number;
}

const AmountAdjust = ({orig}:Props) => {  
  const {register, handleSubmit, formState : {errors, isValid}} = useForm();

  return (
    <>
        <form>
          {/* <label htmlFor="amountName">{Number(orig)}</label> */}
            <input 
                type="number" 
                {...register("amountName")}
                // name="amountName" 
                // onChange={(e)=>{
                //   setPrice(Number(e.target.value));  
                                 
                // }}
                // value={Number(orig.toFixed(2))}
                value={Number(orig)}
            />
        </form>
        {console.log(register)}
    </>
  )
}

export default AmountAdjust
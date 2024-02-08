interface Props{
    orig:Number;
}

const AmountAdjust = ({orig}:Props) => {
  return (
    <>
        <form>
            <input 
                type="number" 
                name="amountName" 
                onChange={(e)=>console.log(e.target.value)}
                value={orig}
            />
        </form>
    </>
  )
}

export default AmountAdjust
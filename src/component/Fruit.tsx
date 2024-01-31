import { useState } from "react"

const Fruit = () => {
    const [fruit, setFruit] = useState({
        name:["Apple"],
        citrus:['orange','lemon']
    });
  return (
    <div>

        {fruit.name}<br/>
        {fruit.citrus.map((acid,index)=> <p key={index}>{acid}</p> )}
        
        <button onClick={()=> setFruit({...fruit, citrus:[...fruit.citrus,'pomelo']})}
        >
            Add citrus
        </button><br/>
        <button onClick={()=>setFruit({...fruit,name:[...fruit.name,"banana"]})}
        >
            Add Fruit
        </button>

    </div>
  )
}

export default Fruit
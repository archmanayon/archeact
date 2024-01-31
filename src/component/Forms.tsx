import { ChangeEventHandler } from "react";

import { useState } from "react"

// interface Event_s{
//     i: React.ChangeEvent<HTMLInputElement>;
//     bttn: React.MouseEvent<HTMLButtonElement>;
// }


export default function Forms(){
    const [name, setName] = useState({first:"", last:""});

    const [fullName, setFullName] = useState("");

    const handleFirst = (i: React.ChangeEvent<HTMLInputElement>)=>setName({...name, first:i.target.value});

    const handleLast = (i: React.ChangeEvent<HTMLInputElement>)=>setName({...name, last:i.target.value});

    const handleSubmit = (bttn: React.MouseEvent<HTMLButtonElement>) => {bttn.preventDefault();
        setFullName(name.last+", "+name.first);
        console.log(name);
    };
       
    return <>

        <p>"form sample"</p>
        <p>{fullName}</p>
        
        <form>

            first<input id="name" onChange={handleFirst} type="text" value={name.first}/>
            last <input id="last" onChange={handleLast} type="text" value={name.last}/>
            <button id="sub" value="" onClick={(handleSubmit)}>submit</button>
            
        </form>
       
    </>

};
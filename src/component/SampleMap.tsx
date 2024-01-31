import { useState } from "react";

export default function SampleMap({colors, object}){

    const [target, setTarget] = useState("usestate");
    
    const handleClick = (e) => {
        console.log(e.target.innerHTML);
        setTarget(e.target.innerHTML);
        
    };
    
    return <>
        {colors.map((COLOR)=><li key={COLOR}>
            <button onClick={handleClick}>
                {COLOR}
            </button>
        </li>)}
        <p>{target}</p>
        
        <p> OBJECTS </p>
        <>{object.school}</>
        <>{object.dept}</>
        <p>object array = female</p>
        <>{object.no_person.female}</>
        <p>object array = male</p>
        <>{object.no_person.male}</>
        <p>object array = sex</p>
        <>{object.no_person.sex}</>
    </>

}
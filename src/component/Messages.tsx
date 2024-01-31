
export default function Messages({name, message, emoji}){

    

    return <>
        <ul>
            {/* {colors.map((color, index) => <li key={color} onClick={(e)=> console.log(e.target)} > {color+index} </li>)} */}
            <p>{name} {message}</p>
            <p>{emoji}</p>

        </ul>
    </>
}
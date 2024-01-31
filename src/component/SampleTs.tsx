import { MouseEvent, ReactNode } from "react";

interface Props{
    children: ReactNode;
    selectItem : (item:MouseEvent) => void; 
}
export default function SampleTs({children, selectItem}: Props){
    return<>

    
    <button type="button" className="btn btn-primary" value="archie" onClick={(e)=>selectItem(e)}
    >
        {children}

    </button>

    <p>{children}</p>

    </>
}
import { MouseEvent, useState } from "react";
import Forms from "./component/Forms";
import Hello from "./component/Hello"
import Messages from "./component/Messages"
import SampleMap from "./component/SampleMap";
import SampleTs from "./component/SampleTs";
import TrialButton from "./component/TrialButton";
import ShowColor from "./component/ShowColor";
import Increment from "./component/Increment";
import Fruit from "./component/Fruit";
import Heart from "./component/Heart";
import { ShopingCart } from "./component/ShopingCart";
import NavCount from "./component/NavCount";
import LongText from "./component/LongText";
// archie
// from usc hello



function App() { 

  const colors = ["red", "blue", "pink"]; 
  const obj_ = {
    school : "usc",
    dept : "hrmo",
    no_person : {male:"benjie", female:"olga", sex:"male"}
  }

  const selectItem =(item:MouseEvent)=>{console.log(item);}
  

  const [index_color, setIndex_color] = useState(-1);
  const [show_c, setShow_c] = useState(false);
  const [singleColor, setSingleColor] = useState('');

  // add cart items
  const [ cartItems, setCartItems ] =   useState(["product-A", "product-B", "product-C"]);

  //long paragraph 
  const paragText = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
  const [lessText, setLessText]=useState(true);

  return (
    <div className="App">

      <>
        {/* <Hello/>  

        <Messages name="fortel" message="hi there" emoji=":D"/>
        
        <h1>Displaying Maps</h1>
        <SampleMap colors={colors} object={obj_}/> */}

        {/* <Forms /> */}

        {/* <SampleTs selectItem={selectItem}>
          Hello <span>world</span>
        </SampleTs> */}

        {/* <TrialButton colors={colors} selectIndex=
          {
            (color, index)=>{
              setIndex_color(index);            
              setShow_c(!show_c);
              setSingleColor(color);
            }

          } index_color={index_color}
        /> */}

        <br/>

          {/* {
            show_c && 
            <ShowColor >
              {singleColor}
              <button type="button" className="btn-close" aria-label="Close"
                onClick={()=> setShow_c(false)}>
              </button>
            </ShowColor>
          } */}

        {/* <Increment/> */}

        {/* <Fruit/> */}

        {/* <Heart/> */}
      </>

      {/* <NavCount countItems={cartItems.length} />
      <ShopingCart cartItems={cartItems} onRemove={(selectedIndex)=> 
        setCartItems(cartItems.filter((item,index)=> index!==selectedIndex))}
        onInputSubmit={(submit)=>setCartItems([...cartItems,submit])}
      /> */}

      <LongText textLength={paragText.length} lessText={lessText} handleLength={()=> setLessText(!lessText)} >
          {lessText ? paragText.substring(0,15) : paragText}
      </LongText>

    </div>
  )
}

export default App

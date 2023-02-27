import React, { useState } from "react";
import Button from "./Button"
import { useContext } from "react";
import Cartvalue from "./Cartvalue";
import {Jsom} from "./Variable"
function Cartpage(props){
    const jsom=useContext(Jsom);
    
    const price1=Number(jsom.list[0].price.slice(0,3))
    const price2=Number(jsom.list[1].price.slice(0,3))
    const price3=Number(jsom.list[2].price.slice(0,3))
   let boo=true;
    if(jsom.a.length===0)
    {boo=false;}
    else 
    {boo=true;}
    
    const crtclose=(e)=>{
     
       props.cartpage();
    }
    const crtorder=(e)=>{
      
       jsom.isvalidcrtpageorder();
       jsom.crtpg_ord();
    }
    
    
 return(
    <div className={boo?'absolute top-[10%] left-[60%] bg-amber-200 p-3 rounded-md  z-2':'absolute top-[10%] left-[85%] bg-amber-200 p-3 rounded-md  z-2'} >
        { jsom.a.map(a=><Cartvalue itemname={jsom.list[a].itemname} price={jsom.list[a].price} num={jsom.list[a].num} id={jsom.list[a].id}/>)}
        {boo&&<div><span  className="text-blue-800 font-extrabold">total-price  <span>--{price1*jsom.list[0].num+price2*jsom.list[1].num+price3*jsom.list[2].num}rs</span>  </span>
             <span className=""><Button name={"order"} cartpageorderclick={crtorder}  /></span>
        <span><Button name={"close"} cartpagecloseclick={crtclose}/></span>
        </div>}
        {!boo&&<div className="text-gray-900 ">Your cart is empty</div>}
    </div>
 )
};
export default Cartpage;
import React, {useState,useContext,useEffect}from "react";
import Button from './Button';
import {Jsom} from "./Variable";
import Home from "../Home";
export default function Cartvalue(props){
    let jsom=useContext(Jsom);
    
    const [a,setA]=useState(props.num)
   const[barr,setBarr]=useState(0);
   const b=false;
    const crtplus=()=>{
     
     jsom.crtpageupdateplus(props.id)
     

    }
    const crtminus=(e)=>{
            
     jsom.crtpageupdateminus(props.id)
    }
    return(
        
        <div className="grid grid-cols-3 gap-3 ">
           <span className="text-blue-800 font-semibold">{props.itemname}</span>
           
        <div>   <span className="text-green-300">{props.price}</span>  
               <span className="text-green-800">*{props.num}</span> </div>
          
          <div><span><Button name={"+"} cartvalueplusclick={crtplus}/></span>
            <span><Button name={"-"} cartvalueminusclick={crtminus}/></span></div>  
        </div>
        
        
    )
}
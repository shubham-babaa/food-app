import React,{useState,useContext} from "react";
import Button from "./Button";
import Order from "./Order";
import { Jsom } from "./Variable";
import { Navigate, useNavigate } from "react-router-dom";

function Cart(props){
  const navigate=useNavigate();
  const jsom=useContext(Jsom);
  // const [iscrtorder,setIscrtorder]=useState(false);
  
  const order=(e)=>{
    props.crtorder();
   
    

  }
  const additem=(e)=>{
    
    props.additem(props.id)
  }

    return(<>
        {<div className=" grid grid-cols-2 text-slate-50  mx-80  text-center bg-slate-500 rounded-sm px-[1rem] ">
    
           <div className="bg-slate-500 py-2 mr-50 text-2xl grid grid-cols-2 grid-gap-[200%]"><span className="">{props.itemname}</span>
           <span>{props.price}</span>
           
            </div> 
            <div className="grid grid-cols-2 gap-x-px">
            <span ><Button name={"Add-item"} cartclick={additem}/></span>
              <span> <Button name={"Order"}  cartorderclick={order} /></span>
                </div>
        </div>}
        { jsom.crtpgord && <Order itemname={props.itemname} price={props.price}/>}
        
        </>
    )
};
export default Cart;
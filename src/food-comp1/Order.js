import React, { useState,Component,useContext } from "react";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
   import {Jsom} from "./Variable";
import ReactDOM from "react-dom";
import Ord from './Ord'

 function Order(props){
  const jsom=useContext(Jsom);
const boolt=jsom.crtpgord;

    const bkclick=()=>{
        jsom.crtpgbk_ord();
    }
    return(<>
    { boolt && ReactDOM.createPortal(<Ord itemname={props.itemname} bkclick={bkclick} price={props.price}/>
     ,document.querySelector('.orderpage'))}
     </>
    )
}
export default Order;
import React,{createContext,useState} from "react";
// const [iscrtorder,setIscrtorder]=useState(false);

  
const Jsom=createContext({
  

    num:0,
 list: [ {itemname:'panner-butter', price:"250Rs", id:0, key:0},
  {itemname:"panner-butter-tikka", price:"350Rs", id:1, key:1},
  {itemname:"sahi-panner-butter", price:"450Rs", id:2, key:2},],
  iscrtorder:false,
})
const crtpage=createContext({
  a:[

  ]
})


export  {Jsom,crtpage};
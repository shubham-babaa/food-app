import React, { Component, useContext, useEffect, useState } from "react";
import kkl from "./kkl.jpeg"
import kkl1 from "./footer.jpg"
import Button from './food-comp1/Button';
import { Jsom } from "./food-comp1/Variable";
import Cart from "./food-comp1/Cart";
import ReactDOM from "react-dom";
import Cartpage from "./food-comp1/Cartpage";


function Home(props) {
   const [num, setNum] = useState(0);
   
   const [iscartclick, setIscartclick] = useState(false);
   const [a, setA] = useState([])
   const [b, setB] = useState(0)
   const [c, setC] = useState(0)
   const [d, setD] = useState(0)
   const [iscrtorder, setIscrtorder] = useState(false);
   const[iscrtorderclick,setIscrtorderclick]=useState(false);
   const[crtpgord,setCrtpgord]=useState(false)
   let list = [{ itemname: 'panner-butter', price: "250Rs", id: 0, key: 0, num: b },
   { itemname: "panner-butter-tikka", price: "350Rs", id: 1, key: 1, num: c },
   { itemname: "sahi-panner-butter", price: "450Rs", id: 2, key: 2, num: d }];

   let i = 0;
   const cartclick = () => {
      if (!iscartclick)
         setIscartclick(true);
      else setIscartclick(false);
   }
   useEffect(() => {
      setNum(a.length);
   }, [a])
   const additemclick = (id) => {
      let C = 0;
      for (const k of a) {
         if (k == id)
            C++;
      }
      if (C == 0)
         setA((prev, i) => [...prev, id]);
      if (id == 0)
         setB(b + 1)
      else if (id == 1)
         setC(c + 1);
      else if (id == 2)
         setD(d + 1);

   }
   const isvalidset = () => {
      setIscartclick(false)

   }
   const crtorder = () => {
      if (!iscrtorder) {
         setIscrtorder(true)
         setIscartclick(false)
      }
      if(!crtpgord)
      {   setIscartclick(false)
         setCrtpgord(true);}
      // else setCrtpgord(false);
   }
   const crtpageupdateplus = (id) => {
      if (id == 0)
         setB(b + 1)
      else if (id == 1)
         setC(c + 1);
      else if (id == 2)
         setD(d + 1);
   }
   const crtpageupdateminus = (id) => {
      if (id == 0 && b > 0)
         setB(b - 1)
      else if (id == 1 && c > 0)
         setC(c - 1);
      else if (id == 2 && d > 0)
         setD(d - 1);
   }
   const isvalidcrtpageorder=()=>{
setIscrtorderclick(true);
   }
   const crtpg_ord=()=>{
  
      if(!crtpgord)
      {   
         setCrtpgord(true);}
         setIscartclick(false)
     
   }
   const crtpgbk_ord=()=>{
      setCrtpgord(false);
   }
   return (
      <Jsom.Provider value={{
         list: list,
         a: a,
         b: c,
         c: b,
         d: d,
         crtpgord:crtpgord,
         iscrtorderclick:iscrtorderclick,
         crtpageupdateplus: crtpageupdateplus,
         crtpageupdateminus: crtpageupdateminus,
         isvalidcrtpageorder:isvalidcrtpageorder,
        crtpg_ord:crtpg_ord,
        crtpgbk_ord:crtpgbk_ord,
        
      }} >

         {/* //page 2..................................................................................................................................... */}
         <div >{iscartclick && ReactDOM.createPortal(<Cartpage cartpage={isvalidset}  crtpg_ord={crtpg_ord}/>, document.querySelector('.cartpage'))}</div>
         {/* //page1.................................................................... */}
         <div className={!(crtpgord || iscartclick)?"bg-neutral-800":"bg-blue-100  " }>
            <nav className="bg-gray-900 py-4 flex justify-between  ">

               <span className={"text-xl text-gray-50 ml-7 border-y-2 rounded-sm shadow-sm shadow-blue-700 jkl  "}>Food-app</span>
               <span className="text-zinc-50 text-xl rounded-md border-b-2 px-3 mr-7 hover:border-solid hover:border-b-2
                " >  <a href="#" className="text-zinc-50 text-xl rounded-md border-b-2 px-3 mr-7 hover:border-solid hover:border-b-2
                 hover:rounded-b-none
               " onClick={cartclick}>
                     cart </a>
                  <span> {num}</span>
               </span>
            </nav>

            <img src={kkl} className="  shadow-x shadow-zinc-50 rounded-b-2xl h-[40vh] w-[100vw] border-b-rose-50 border mb-[3%] rotate-[50deg,50deg]" />



         {  list.map(val => <Cart itemname={val.itemname} price={val.price} key={val.key} id={val.id} additem={additemclick} crtorder={crtorder}  />)}

            {/* {iscrtorder&&<Order itemname={props.itemname} />} */}

            <footer className=" shadow-red-800 shadow-inner mt-10 bg-gray-800 bg-footer-texture bg-no-repeat bg-[length:1500px_300px] h-[40vh] overflow-hidden rounded-md border-gray-50 from-gray-500">

               <div className="grid grid-cols-3 text-white p-20 h-[40vh] font-extrabold  bg-slate-900 bg-opacity-70
">
                  <div><h1>Copyright</h1>
                     <div className="text-gray-600 font-semibold mt-3">Create Privacy Policy, Terms & Conditions and other legal agreements in a few minutes. Free to use, free to download.</div>
                  </div>
                  <div><h1 className="font-extrabold">Contact</h1>
                     <div className="font-semibold text-gray-500">+91 6265******</div>
                     <div className="font-semibold text-gray-500"><span className="text-blue-400">Gmail</span>: food-app@gamil.com</div>
                  </div>
                  <div><h1> About</h1>
                     <div className="text-gray-600 font-semibold">Get started with free personalised support. Create your custom ad plan with a Google Ads Expert.

                        1800 572 8310
                        *
                        Mon–Fri, 9:00am–6:00pm IST

                     </div>
                  </div>
               </div>

            </footer>
         </div>

      </Jsom.Provider>

   )
};
export default Home
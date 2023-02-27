import React, { useState, Component, useContext, useEffect } from "react";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";
import { Jsom } from './Variable'
// import { Component } from "react";
const Ord = (props) => {
    const [isva, setIsva] = useState(false);
    const Navigate = useNavigate();
    const jsom = useContext(Jsom);
    useEffect(() => {
        console.log(isva)
    }, [isva])
    const ord_cli = () => {
        if (!isva)
            setIsva(true);
        else setIsva(false);

    }
    const bk_click = () => {
        props.bkclick()

        //  jsom.a.forEach(i =>console.log(jsom.list[i].itemname) )
    }
    return (<>
           <div className=" bg-cyan-900 mx-[25%] rounded-lg mt-[10%] w-[50%] overflow-hidden  absolute top-[20%] bg-opacity-[100%] " >
             <div className="text-xl text-gray-50 border-y-2 rounded-lg mb-5 shadow-sm shadow-blue-700 jkl text-center p-5 ">Food-app</div>
            
                {  !isva && <div className="pl-[20%] grid grid-col-2 text-stone-100">
                    <label>User-Name</label>
                    <input type="text" placeholder="your-full-name" className="w-[40%] text-gray-600" ></input><br />
                    <lavel>Mobile</lavel>
                    <input typr="tell" placeholder="+91" className="w-[40%] text-gray-600"  ></input><br />
                    <div className=" ml-[20%]"><Button name={"submit"} orderclick={ord_cli} /></div>
                </div>}
                {isva && <div className="bg-gray-800 text-center  rounded-lg p-11 mx-[30%] overflow-hidden "><h1 className="text-center text-green-300">your order is confirm <br />
            have a nice day<br /></h1>
            <Button name={"back"} onbackclick={bk_click} />
        </div>}
        </div>

       
        
    </>
    )
};
export default Ord;
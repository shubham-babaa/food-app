import React from 'react';
function Button(props){
    const ord=(e)=>{
       
        if(props.cartclick)
        props.cartclick(e);
        else if(props.cartorderclick)
        props.cartorderclick(e)
        else if(props.cartpageorderclick)
        props.cartpageorderclick(e)
        else if(props.cartpagecloseclick)
        props.cartpagecloseclick(e)
        else if(props.cartvalueplusclick)
        props.cartvalueplusclick(e)
        else if(props.cartvalueminusclick)
        props.cartvalueminusclick(e)
        else if(props.onbackclick)
        props.onbackclick();
        else if(props.orderclick)
        props.orderclick();
    }
    return(
    <button className="text-gray-100 border-2 border-slate-900 bg-slate-900 text-center py-1 px-3 rounded-sm m-2 shadow-lg shadow-zinc-600 hover:border-2 hover:border-white hover:border-opacity-50" onClick={ord} >{props.name}</button>
    )
};
export default Button;
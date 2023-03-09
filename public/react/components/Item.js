import React from "react"
export function Item(props){
    return(
        <>
            <h1>{props.itemObj.title}</h1>
            <p>Description {props.itemObj.description}</p>
            <p>Category: {props.itemObj.category}</p>
            <p>Price: £{props.itemObj.price}</p>
            <img src={props.itemObj.image} alt={props.itemObj.title}/>
            <button onClick = { function(){ props.setItem() } }>Back To HomePage</button>
            
        </>
    )
}
import React from "react"
import apiURL from "../api"

export function Item(props){ 
    async function remove(){
        await fetch(`${apiURL}/items/${props.itemObj.id}`, {
            method: "delete"
        })
        props.setItem(false)
    }
    
    return(
    <>
        <h1> {props.itemObj.title} </h1>
        <p id="desc"> Description {props.itemObj.description} </p>
        <p id="cat"> Category: {props.itemObj.category} </p>
        <p> Price: £{props.itemObj.price} </p>
        < img src={props.itemObj.image} alt={props.itemObj.title} />
        < button onClick = { function(){ props.setItem() } } > Back To Home Page </button>
        <button onClick={function() {props.setEditItem(props.itemObj.id); props.setItem(false)}}>Edit Item</button>
        <button onClick={remove}>Remove Item</button>
    </>
)}
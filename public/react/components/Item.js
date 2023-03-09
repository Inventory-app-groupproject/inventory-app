import React from "react"
export function Item(props){
    return (
      <>
        <h1>{props.item.title}</h1>
        <p>Description {props.item.description}</p>
        <p>Category: {props.item.category}</p>
        <p>Price: £{props.item.price}</p>
        <img src={props.item.image} alt={props.item.title} />
        <button
          onClick={function () {
            props.setItem();
          }}
        >
          Back To HomePage
        </button>
      </>
    );
}
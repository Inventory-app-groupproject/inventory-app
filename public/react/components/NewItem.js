import React from "react";
import apiURL from '../api';

export function NewItem(props) {
    async function onSubmit(event) {
        event.preventDefault();
        await fetch(event.target.action, {
            method: event.target.method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: event.target.title.value,
                description: event.target.description.value,
                category: event.target.category.value,
                price: event.target.price.value,
            })
        });
        props.setIsNewItem(false);
    }

    return(
        <form action={`${apiURL}/items`} method="post" onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input id="title" name="title" type={"text"}></input>
            
            <label htmlFor="description">Description</label>
            <input id="description" name="description" type={"text"}></input>
            
            <label htmlFor="category">Category</label>
            <input id="category" name="category" type={"text"}></input>
            
            <label htmlFor="price">Price</label>
            <input id="price" name="price" type={"number"}></input>

            <button>Submit</button>
        </form>
    )
}
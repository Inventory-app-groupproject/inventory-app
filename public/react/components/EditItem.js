import React from 'react'
import apiURL from '../api'

export function EditItem(props) {
    async function onSubmit(event){
        event.preventDefault()
        console.log("hello")
        await fetch(event.target.action, {
            method: "put",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: event.target.title.value,
                description: event.target.description.value,
                category: event.target.category.value,
                price: event.target.price.value,
            })
        })
        props.setEditItem(false)
        
    }
    return(
        <form action={`${apiURL}/items/${props.id}`} onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <input  id="title" name="title" type={"text"}></input>
            
            <label htmlFor="description">Description</label>
            <input  id="description" name="description" type={"text"}></input>
            
            <label htmlFor="category">Category</label>
            <input  id="category" name="category" type={"text"}></input>
            
            <label  htmlFor="price">Price</label>
            <input id="price" name="price" type={"number"}></input>

            <button>Submit</button>
        </form>
    )
}

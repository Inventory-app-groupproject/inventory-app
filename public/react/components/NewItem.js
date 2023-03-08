import React from "react";

export function NewItem() {
    return(
        <>
            <form>
                <label for="title">Title</label>
                <input id="title" type={"text"}></input>
                
                <label for="desc">Description</label>
                <input id="desc" type={"text"}></input>
                
                <label for="cat">Category</label>
                <input id="cat" type={"text"}></input>
                
                <label for="price">Price</label>
                <input id="price" type={"number"}></input>
            </form>
        </>
    )
}
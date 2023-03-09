// Gets a list off all items stored in the db 
import React from 'react';
import apiURL from '../api';
/* export const Sauce = (props) => {
<<<<<<< HEAD
=======

>>>>>>> c2f6989d0a9906cb44a24e281890c8be1e01c13b
  return <>
    <h3>{props.sauce.name}</h3>
    <img src={props.sauce.image} alt={props.sauce.name} />
  </>
} */ 

export const Items = function (props){
  async function fetchItems(){
    try{
      const response = await fetch(apiURL + "/items/" + props.itemObj.id)
      const data = await response.json()
      props.setItem(data)
    }
    catch(error){
      console.log(error)
    }
  }

  // async function createItem(){
  //   try{
  //       const response = await fetch(apiURL + "/items")
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }

  return <section onClick={fetchItems}>
    <h4 className='title'>Product Name: {props.itemObj.title}</h4>
    <p className='text'>Description: {props.itemObj.description}</p>
    <p className='text'>Price: £{props.itemObj.price}</p>
    <p className='text'>Category: {props.itemObj.category}</p>
    <img src={props.itemObj.image} alt={props.itemObj.name} />
  </section>
}
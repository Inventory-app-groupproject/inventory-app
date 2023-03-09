import React, { useState, useEffect } from 'react';
import {ItemsList} from './ItemsList';
import { Item } from './Item';
import { NewItem } from './NewItem';


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = function() {
	const [items, setItems] = useState([]);
	const [item, setItem] = useState()
	const [isNewItem, setIsNewItem] = useState(false);

	
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();
			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	{/* </main>// async function addItem(){
		try{
			const response = await fetch(`${apiURL}/items/additem`)
			const data = await response.json()
			setNewItem(data)
		}
		catch(error){
			console.log(error)
		}
	} */}

// import {ItemList} from "./ItemList.js";
// import {FormComponent} from "./FormComponent.js"

// function App() {
// const [isForm, setIsForm] = useState(false);

//    return(
//       <main>
//          {!isForm ? <ItemList /> : <FormComponent />}
//          <button onClick={() => setIsForm(!isForm)}>Show Form</button>
//       </main>
//    )
// }

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<>
			<h1 id = "page-title">Department Store - All Your Home Requirements All In One Place</h1>
			<main className={!item ? "home" : "singleitem"}>
				{!item ? <ItemsList items = {items} setItem = {setItem}/> : <Item itemObj = {item} setItem = {setItem}/>} 
				{!isNewItem ? <ItemsList setItem = {setItem([])} /> : <NewItem /> }
				<button onClick={() => setIsNewItem(!isNewItem)}>Show Form</button>
			</main>
		</>	
	)
}
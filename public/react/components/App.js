import React, { useState, useEffect } from 'react';
import {ItemsList} from './ItemsList';
import { Item } from './Item';
import { NewItem } from './NewItem';
import {EditItem} from "./EditItem"


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = function() {
	const [items, setItems] = useState([]);
	const [item, setItem] = useState(); // undefined
	const [isNewItem, setIsNewItem] = useState(false);
<<<<<<< HEAD
	const [editItem, setEditItem] = useState(false)
=======

	
	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();
			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const deleteItem = (index) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setItems(newItems);
	  };

	
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
>>>>>>> c4d95f4ab3bd505da6c131953902ee9632c5092e

	useEffect(() => {
		async function fetchItems(){
			try {
				const response = await fetch(`${apiURL}/items`);
				const itemData = await response.json();
				setItems(itemData);
			} catch (err) {
				console.log("Oh no an error! ", err)
			}
		}

		

		fetchItems();
	}, [isNewItem, editItem, item]);

	const heading = <h1 id = "page-title">Department Store - All Your Home Requirements All In One Place</h1>;

	if (items.length === 0) {
		return (
			<>
				{heading}
				<p>Loading...</p>
			</>
		);
	}

	// single item view
	if (item) {
		return (
			<>
				{heading}
				<main className={!item ? "home" : "singleitem"}>
					<Item itemObj = {item} setItem = {setItem} setEditItem = {setEditItem} className="singleitem"/>
					{/* <EditItem setEditItem={setEditItem}/> */}
				</main>
			</>
		);
	}

	if (isNewItem) {
		return (
			<>
				{heading}
				<NewItem setIsNewItem={setIsNewItem} />
			</>
		);
	}

	if(editItem){
		return(
			<>
				{heading}
				<main>
					<EditItem id = {editItem} setEditItem={setEditItem}/>
				</main>
			</>
		)
	}

	return (
		<>
			{heading}
			<main className={!item ? "home" : "singleitem"}>
				<ItemsList items = {items} setItem = {setItem} setEditItem = {setItem}/>
				<button onClick={() => setIsNewItem(true)}>Add Item</button>
			</main>
		</>	
	)
}
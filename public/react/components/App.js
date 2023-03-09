import React, { useState, useEffect } from 'react';
import {ItemsList} from './ItemsList';
import { Item } from './Item';
import { NewItem } from './NewItem';


// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = function() {
	const [items, setItems] = useState([]);
	const [item, setItem] = useState(); // undefined
	const [isNewItem, setIsNewItem] = useState(false);

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
	}, [isNewItem]);

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
					<Item itemObj = {item} setItem = {setItem} className="singleitem"/>
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

	return (
		<>
			{heading}
			<main className={!item ? "home" : "singleitem"}>
				<ItemsList items = {items} setItem = {setItem}/>
				<button onClick={() => setIsNewItem(true)}>Add Item</button>
			</main>
		</>	
	)
}
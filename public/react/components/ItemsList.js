import React from 'react';
import {Items} from './Items';

export const ItemsList = function({items, setItem}){
	return <>
		{
			items.map(function(arrItem, index){
				return <Items itemObj={arrItem} key={index} setItem={setItem} />
			})
		}
	</>
} 
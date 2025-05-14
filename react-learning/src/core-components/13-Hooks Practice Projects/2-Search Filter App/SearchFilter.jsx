import React, { useState, useEffect } from "react";

const SearchFilter = () => {
	const [items, setItems] = useState([
		"Apple",
		"Banana",
		"Cherry",
		"Date",
		"Elderberry",
		"Fig",
		"Grapefruit",
		"Honeydew",
	]);
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredItems, setFilteredItems] = useState(items);
	useEffect(() => {
		const filtered = items.filter((item) =>
			item.toLowerCase().includes(searchTerm.toLowerCase())
		);
		setFilteredItems(filtered);
	}, [searchTerm, items]);
	return (
		<>
			<h1>SearchFilter</h1>
			<input
				type='text'
				placeholder='Search...'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			<ul>
				{filteredItems.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</>
	);
};

export default SearchFilter;

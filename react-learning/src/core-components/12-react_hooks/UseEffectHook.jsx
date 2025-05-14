import React, { useEffect, useState } from "react";

const UseEffectHook = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Gunal K");
	const [age, setAge] = useState(25);
	useEffect(() => {
		setTimeout(() => {
			setCount((prevCount) => prevCount + 1);
		}, 2000);
	}, [name, age]); // This will run when name or age changes
	return (
		<>
			<h1>UseEffectHook</h1>
			<h3>I've rendered {count} times!</h3>
		</>
	);
};

export default UseEffectHook;

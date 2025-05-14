import React, { useState } from "react";

const UseStateHook = () => {
	// const counter = useState(0)[0]
	// const setCounter = useState(0)[1]
	// const color = "Red"
	// const changeColor = () => {
	// color = "Blue"
	// }
	const [color, setColor] = useState("Red");

	// const [mybrand,setMybrand] = useState("Car")
	// const [model,setModel] = useState("BMW")
	// const [year,setYear] = useState(2023)
	// const [carColor,setCarColor] = useState("Blue")
	const [car, setCarColor] = useState({
		mybrand: "Car",
		model: "BMW",
		year: 2023,
		carColor: "Red",
	});
	const changeCarColor = () => {
		// setCarColor("Blue")
		setCarColor({
			...car,
			carColor: "Blue",
		});
	};
	const handlClick = () => {
		// setCounter(counter+4)
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
		setCount((prevCount) => prevCount + 1);
	};

	const [count, setCount] = useState(0);
	return (
		<>
			<h1>UseStateHook</h1>
			<h3>My Fav Color is {color}!</h3>
			<button onClick={() => setColor("Blue")}>Blue</button>
			<br />
			<br />
			<h3>My {car.mybrand}</h3>
			<h4>
				It is {car.carColor} {car.model} from {car.year}
			</h4>
			<button onClick={changeCarColor}>Blue</button>
			<h3>Count {count}</h3>
			<button onClick={() => setCount(count + 1)}>Increase</button>{" "}
			<button onClick={() => setCount(0)}>Reset</button>{" "}
			<button onClick={handlClick}>Increase By 4 (prev)</button>
		</>
	);
};

export default UseStateHook;

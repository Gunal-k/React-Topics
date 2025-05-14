import React, { useReducer, useState } from "react";

const UseReducerHook = () => {
	const initialState = { count: 0 };
	const reducer = (state, action) => {
		switch (action.type) {
			case "increase": {
				return { count: state.count + 1 };
			}
			case "decrease": {
				return { count: state.count - 1 };
			}
			case "input": {
				return { count: action.payload };
			}
			default: {
				return state;
			}
		}
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	// const [count,setCount] = useState(0)
	return (
		<>
			<h1>UseReducer Hook</h1>
			<h2>{state.count}</h2>
			<button onClick={() => dispatch({ type: "increase" })}>+1</button>
			<button onClick={() => dispatch({ type: "decrease" })}>-1</button>
			<br />
			<input
				value={state.count}
				onFocus={(e) => e.target.select()}
				onChange={(e) =>
					dispatch({ type: "input", payload: Number(e.target.value) })
				}
				type='number'
			/>
		</>
	);
};

export default UseReducerHook;

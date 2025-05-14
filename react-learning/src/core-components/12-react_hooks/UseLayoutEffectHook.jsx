import React, { useLayoutEffect, useEffect } from "react";

const UseLayoutEffectHook = () => {
	useEffect(() => {
		console.log("Message from useEffect");
	}, []);

	useLayoutEffect(() => {
		console.log("Message from useLayoutEffect");
	}, []);
	return (
		<>
			<h1>UseLayoutEffect Hook</h1>
			{Array(40000)
				.fill("")
				.map((item, index) => (
					<li key={index}>{Math.pow(Math.random(), 10)}</li>
				))}
		</>
	);
};

export default UseLayoutEffectHook;

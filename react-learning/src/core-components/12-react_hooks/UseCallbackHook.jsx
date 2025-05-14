import React, { useState, useCallback } from "react";
import Header from '../02-components/header'

const UseCallbackHook = () => {
    const [count,setCount] = useState(0)

    const newFn = useCallback(()=>{},[])
	return (
		<>
            <Header newFn = {newFn}/>
			<h1>UseCallback Hook</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(prev => prev+1)}>Click Here</button>
		</>
	);
};

export default UseCallbackHook;

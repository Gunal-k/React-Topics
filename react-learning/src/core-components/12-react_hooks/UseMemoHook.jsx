import React,{useState,useMemo} from "react";

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const cubeNum = (num) => {
        console.log("Calculating cube...");
        return Math.pow(num, 3);
    }
    const result = useMemo(()=> { return cubeNum(number)}, [number]);
	return (
		<>
			<h1>UseMemoHook</h1>
            <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <h2>Cube of {number} is : {result}</h2>
            <button onClick={()=>setCount(count+1)}>Counter++</button>
            <h2>Counter: {count}</h2>
		</>
	);
};

export default UseMemoHook;

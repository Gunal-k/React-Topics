import React, { useState, useRef,useEffect } from "react";

const UseRefHook = () => {
    const[value, setValue] = useState(0);
    const count = useRef(0);
    useEffect(()=>{
        count.current = count.current + 1;
    });

    const elem = useRef();
    return (
		<>
			<h1>UseRef Hook</h1>
            <button onClick={()=>setValue(prev =>prev-1)}>-1</button>
            <h3>{value}</h3>
            <button onClick={()=>setValue(prev =>prev+1)}>+1</button>
            <h3>Render Count: {count.current}</h3>

            <h3>Useref to access DOM Element</h3>
            <input type="text" ref={elem} />
            <button onClick={() => elem.current.focus()}>Focus</button>
            <button onClick={() => elem.current.value = ""}>Clear</button>
		</>
	);
};

export default UseRefHook;
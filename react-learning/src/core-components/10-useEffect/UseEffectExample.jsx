import React, {useState,useEffect} from "react";  

const UseEffectExample = () => {
  
    const [count,setCount] = useState(0);
    const [color,setColor] = useState("red");
    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count]);

    function addCount() {
        setCount(c => c + 1);
    }
    function subtract() {
        setCount(c => c - 1);
    }
    function changeColor() {
        setColor(c => c === "red" ? "blue" : "red");
        document.body.style.backgroundColor = color;
    }

    return (
    <>
        <p>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtract}>Add</button><br />
        <button onClick={changeColor}>Changecolor</button>
    </>
  )
}

export default UseEffectExample
import { useState } from "react";

export default function StateExample() {
  const [count, setCount] = useState(0); // Declare a state variable called count and a function to update it
  console.log("State Example Rendered"); // Log to the console when the component is rendered
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h1>State Example</h1>
      <h3>Counter {count}</h3>
      <button className="bg-color" onClick={handleClick}>
        Increment
      </button>
    </>
  );
}

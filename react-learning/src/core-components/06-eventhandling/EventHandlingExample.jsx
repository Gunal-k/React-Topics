import {useState} from "react";

const EventHandlingExample = () => {
    const [message, setMessage] = useState("");
  const handleChange = (event) => {

    setMessage(event.target.value); // Update the message state when the button is clicked
  }
  return (
    <>
      <h1>Event Handling Example</h1>
      <input type="text" onChange={handleChange} placeholder="Enter Message" />
      <p>{message}</p>
    </>
  );
};

export default EventHandlingExample;
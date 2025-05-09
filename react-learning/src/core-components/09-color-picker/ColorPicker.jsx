import React, { useState } from "react";
import "./ColorPicker.css";

export default function ColorPicker() {
  const [color, setColor] = useState("#000000");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
          <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
}

import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      console.log("Form submitted");
      // Call the addTask function passed as a prop
      // to add the new task to the list
      addTask(value);
      setValue("");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Add a Task..."
      />
      <button type="submit" className="add-task-btn">
        Add
      </button>
    </form>
  );
};

export default TaskForm;

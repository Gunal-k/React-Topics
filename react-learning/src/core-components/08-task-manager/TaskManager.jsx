import { useState } from "react";
import TaskForm from "./TaskForm";
import "./TaskManager.css";
import TaskList from "./TaskList";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    const newTask = { id: Date.now(), task, completed: false };
    setTasks([...tasks, newTask]);
  };
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <>
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
      <p>Tasks: {tasks.length}</p>
    </>
  );
};

export default TaskManager;

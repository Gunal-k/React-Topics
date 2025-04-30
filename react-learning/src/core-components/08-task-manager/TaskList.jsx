import React from "react";

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <>
      <ul className="task-list-container">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-list ${task["completed"] ? "completed" : ""}`}
          >
            <span
              className={task["completed"] && "strike"}
              onClick={() => toggleTask(task.id)}
            >
              {task.task}
            </span>
            <span onClick={() => deleteTask(task.id)} className="delete">
              X
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;

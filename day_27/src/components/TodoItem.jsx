import React from "react";

const TodoItem = ({ task, handleDelete, handleChange }) => {
  const { id, title, completed } = task;
  return (
    <>
      <div id={id} className="task-wrapper">
        <div className="task-title">{title}</div>
        <div className="task-actions">
          <input
            type="checkbox"
            className="todo-cbx"
            name="todo-cbx"
            defaultChecked={completed}
            onClick={(e) => {
              let newTask = { ...task, completed: e.target.checked };
              handleChange(newTask);
            }}
          />
          <div className="button" onClick={() => handleDelete(id)}>
            Delete
          </div>
        </div>
      </div>
      <div className="seperator"></div>
    </>
  );
};

export default TodoItem;

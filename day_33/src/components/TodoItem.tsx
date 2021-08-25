import React from "react";

export interface TodoItemType {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoItemProps {
  task: TodoItemType;
  handleDelete: (id: number) => void;
  handleChange: (newTask: TodoItemType) => void;
}

const TodoItem = ({ task, handleDelete, handleChange }: TodoItemProps) => {
  const { id, title, completed }: TodoItemType = task;

  return (
    <>
      <div id={id + ""} className="task-wrapper">
        <div className="task-title">{title}</div>
        <div className="task-actions">
          <input
            type="checkbox"
            className="todo-cbx"
            name="todo-cbx"
            defaultChecked={completed}
            onClick={(e: any) => {
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

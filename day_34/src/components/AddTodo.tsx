import React, { useState } from "react";
import { addTodo } from "../store/slices/TodoSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { TodoItemType } from "./TodoItem";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const todos = useAppSelector((state) => state.todos);
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleNewTodoChange = (e: any) => setNewTodo(e.target.value);
  const handleSubmit = () => {
    if (newTodo === "") {
      alert("Give a Title!");
      return;
    }
    let task: TodoItemType = {
      id: Math.floor(999 * todos.length * Math.random()),
      title: newTodo,
      completed: false,
    };
    //setTodos([...todos, task]);
    dispatch(addTodo(task));
    setNewTodo("");
  };
  return (
    <div className="add-todo-div">
      <input
        value={newTodo}
        onChange={handleNewTodoChange}
        type="text"
        className={`add-todo-input ${theme ? "input-dark" : ""}`}
        placeholder="Add a Todo..."
      />
      <div className="button" onClick={handleSubmit}>
        Add
      </div>
    </div>
  );
};

export default AddTodo;

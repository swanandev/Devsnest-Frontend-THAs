import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, fetchTodos } from "../store/actions/todoActions";

const AddTodo = (props) => {
  const [todoTitle, setTodoTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const getTodos = () => dispatch(fetchTodos(5));

  const handleChange = (e) => setTodoTitle(e.target.value);

  const handleSubmit = () => {
    if (todoTitle === "") {
      alert("Give a Title!");
      return;
    }
    let task = {
      id: Math.floor(999 * todos.length * Math.random()),
      title: todoTitle,
      completed: false,
    };
    dispatch(addTodo(task));
    setTodoTitle("");
  };
  return (
    <div className="add-todo-div">
      <input
        value={todoTitle}
        onChange={handleChange}
        type="text"
        className="add-todo-input"
        placeholder="Add a Todo..."
      />
      <div className="button" onClick={handleSubmit}>
        Add
      </div>
      <div className="button" onClick={getTodos}>
        Get Todos
      </div>
    </div>
  );
};

export default AddTodo;

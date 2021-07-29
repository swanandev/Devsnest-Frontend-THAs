import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  updateTodo,
  clearTodos,
} from "../store/actions/todoActions";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleChange = (task) => dispatch(updateTodo(task));
  const handleDelete = (id) => dispatch(deleteTodo(id));
  const handleClear = () => dispatch(clearTodos());

  return (
    <div className="todo-list">
      {todos.map((el, inx) => (
        <TodoItem
          task={el}
          handleChange={handleChange}
          handleDelete={handleDelete}
          key={inx}
        />
      ))}
      {todos.length ? (
        <div onClick={handleClear} className="button">
          Clear
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TodoList;

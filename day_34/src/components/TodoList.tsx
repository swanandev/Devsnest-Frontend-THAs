import React, { useState } from "react";
import { clearTodos, deleteTodo, updateTodo } from "../store/slices/TodoSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import TodoItem, { TodoItemType } from "./TodoItem";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const theme = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();

  const handleUpdateTodo = (task: TodoItemType) => {
    let nT: TodoItemType[] = todos.filter(
      (el: TodoItemType) => el.id !== task.id
    );
    dispatch(updateTodo([...nT, task]));
  };

  const handleDelete = (id: number) => dispatch(deleteTodo(id));

  const handleClear = () => dispatch(clearTodos());

  return (
    <div className="todo-list">
      {todos.map((el: TodoItemType, inx: number) => (
        <TodoItem
          task={el}
          handleChange={handleUpdateTodo}
          handleDelete={handleDelete}
          key={inx}
          theme={theme}
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

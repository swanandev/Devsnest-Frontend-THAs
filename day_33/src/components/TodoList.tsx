import React, { useState } from "react";
import TodoItem, { TodoItemType } from "./TodoItem";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [todos, setTodos] = useState<TodoItemType[]>([]);

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
    setTodos([...todos, task]);
    setNewTodo("");
  };

  const handleUpdateTodo = (task: TodoItemType) =>
    setTodos((oldTodos: TodoItemType[]) => {
      let nT: TodoItemType[] = oldTodos.filter(
        (el: TodoItemType) => el.id !== task.id
      );
      return [...nT, task];
    });
  const handleDelete = (id: number) =>
    setTodos((oldTodos) => todos.filter((el: TodoItemType) => el.id !== id));
  const handleClear = () => setTodos([]);

  return (
    <>
      <div className="add-todo-div">
        <input
          value={newTodo}
          onChange={handleNewTodoChange}
          type="text"
          className="add-todo-input"
          placeholder="Add a Todo..."
        />
        <div className="button" onClick={handleSubmit}>
          Add
        </div>
      </div>
      <div className="todo-list">
        {todos.map((el, inx) => (
          <TodoItem
            task={el}
            handleChange={handleUpdateTodo}
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
    </>
  );
};

export default TodoList;

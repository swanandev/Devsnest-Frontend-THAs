import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";
import { useAppSelector } from "./store/store";

function App() {
  const theme = useAppSelector((state) => state.theme);
  return (
    <div className={`App ${theme ? "dark" : ""}`}>
      <header className={`App-header ${theme ? "dark-header" : ""}`}>
        <h2>ToDo List</h2>
        <ThemeToggle />
      </header>
      <div className="content">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

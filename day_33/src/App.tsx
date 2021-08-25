import React, { useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContext from "./components/ThemeContext";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <header className="App-header">
          <div></div>
          <h2>To Do List</h2>
          <ThemeToggle />
        </header>
        <div className="content">
          <TodoList />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

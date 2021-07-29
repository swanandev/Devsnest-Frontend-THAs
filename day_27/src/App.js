import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Da ToDo List!</h2>
      </header>
      <div className="content">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;

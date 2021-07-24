import UserData from "./components/UserData"
import UserForm from "./components/UserForm"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Demo</h2>
      </header>
      <div className="content">
        <UserForm />
        <UserData />
      </div>
    </div>
  );
}

export default App;

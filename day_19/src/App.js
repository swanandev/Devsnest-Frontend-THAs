
import CounterContainer from "./components/CounterContainer";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h2>Multi-Counter</h2>
      </header>
      <div className="content">
        <CounterContainer />  
      </div>
    </div>
  );
}

export default App;

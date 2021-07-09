
import ChessBoard from "./components/ChessBoard"

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h2>ChessBoard!</h2>
      </header>
      <div className="content">
        <ChessBoard />
      </div>
    </div>
  );
}

export default App;

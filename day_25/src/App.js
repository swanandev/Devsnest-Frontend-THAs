import BSGrid from "./components/BSGrid";
import TWGrid from "./components/TWGrid";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Bootstrap & Tailwind Demo!</h2>
      </header>
      <div className="content">
        <BSGrid/>
        <TWGrid />
      </div>
    </div>
  );
}

export default App;
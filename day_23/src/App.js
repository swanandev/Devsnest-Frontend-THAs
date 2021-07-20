import Container from "./components/Container"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Custom Hooks</h2>
        </header>
          <Switch>
            <Route exact path="/Devsnest-Frontend-THAs/day_23/build" component={Container} />
          </Switch>
      </div>

    </Router>
  );
}

export default App;

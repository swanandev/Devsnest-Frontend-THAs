
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import About from './components/About'
import Profile from './components/Profile'

import {AuthProvider} from './store/store'

import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function App() {
  return (
    <AuthProvider>
      <Router basename='/Devsnest-Frontend-THAs/day_24/build/'>
        <div className="App">
          <header className="App-header">
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/about'>About</Link>
            <Link className='link' to='/profile'>Profile</Link>
            <Link className='link' to='/dashboard'>Dashboard</Link>
          </header>
            <div className="content">
              <Route path="/about" component={About} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/profile" component={Profile} />
              <Route exact path='/' component={Home} /> 
            </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

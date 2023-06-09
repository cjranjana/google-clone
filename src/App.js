import React from 'react';
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import SearchPage from './SearchPage';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/search'>
           <SearchPage></SearchPage>
          </Route>
          <Route path='/'>
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

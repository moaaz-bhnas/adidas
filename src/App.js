import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <main>
          {/* <route path="/" exact component={Home} /> */}
        </main>
      </div>
    </Router>
  );
}

export default App;

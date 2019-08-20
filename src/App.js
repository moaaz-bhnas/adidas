import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Results from './Pages/Results/Results';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Menu />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Results} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

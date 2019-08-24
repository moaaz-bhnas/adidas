import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Results from './Pages/Results/Results';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SingleCategory from './Pages/SingleCategory/SingleCategory';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Menu />
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Results} />
        <Route path="/product" component={SingleProduct} />
        <Route path="/category" component={SingleCategory} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

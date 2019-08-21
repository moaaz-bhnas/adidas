import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Results.scss';
import product1 from '../../img/category-1.png';
import product2 from '../../img/category-2.png';
import Result from '../../Components/ResultsSection/ResultSection';

const query = 'Apparel';
const products = [
  { id: 0, name: 'Arsenal Away Jersey', gender: 'men', category: 'Clothing', price: '150', type: 'Shirts', sport: 'Football', size: 's', brand: 'Badge of Sports', new: true, img: product1, preview_imgs: Array(3).fill(product1) },
  { id: 1, name: 'Ultraboost Uncaged Shoes', gender: 'kids', category: 'Shoes', price: '350', discount: 25, type: 'Shoes', sport: 'Running', size: 'm', brand: 'Originals', img: product2, preview_imgs: Array(3).fill(product2) }
];

class Results extends Component {
  state = {}

  goBack = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }
  
  render() {
    return (
      <main className="resultsPage">
        {/* Thriller */}
        <p className="thriller">
          <i aria-hidden="true" className="fas fa-truck" /> Free shippings and free returns
        </p>

        {/* Breadcrumb */}
        <nav className="breadcrumbBar" aria-label="Breadcrumb">
          <div className="container">
            <a 
              href="#" 
              className="breadcrumbBar__backLink"
              onClick={this.goBack}
            > 
              <i className="fas fa-arrow-left" aria-hidden="true" /> <span className="text-underline ml-2">Back</span>
            </a>

            <ol className="list breadcrumbList">
              <li className="breadcrumbBar__item">
                <Link className="breadcrumbBar__link" to="/">Home</Link>
              </li>
              <li className="breadcrumbBar__item" aria-current="page">{query}</li>
            </ol>
          </div>
        </nav>

        <Result products={products} query={query} />
      </main>
    );
  }
}

export default Results;
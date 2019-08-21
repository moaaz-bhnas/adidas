import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SingleProduct.scss';

const product = {
  name: 'Ultraboost 19 Shoes'
}

class SingleProduct extends Component {
  state = {  }
  render() {
    return (
      <main className="productPage">
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
              <li className="breadcrumbBar__item">Products</li>
              <li className="breadcrumbBar__item" aria-current="page">{product.name}</li>
            </ol>
          </div>
        </nav>
      </main>
    );
  }
}

export default SingleProduct;
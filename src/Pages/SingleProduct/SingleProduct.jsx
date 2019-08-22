import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SingleProduct.scss';
import productImg from '../../img/product.png';
import Gallery from '../../Components/Gallery/Gallery';

const product = {
  name: 'Ultraboost 19 Shoes',
  imgs: [
    productImg,
    'https://via.placeholder.com/800.png',
    'https://via.placeholder.com/800x700.png',
    'https://via.placeholder.com/800x750.png',
    'https://via.placeholder.com/700x800.png',
    'https://via.placeholder.com/750x800.png',
    'https://via.placeholder.com/750.png',
    'https://via.placeholder.com/700x750.png',
    'https://via.placeholder.com/810x740.png',
    'https://via.placeholder.com/820.png'
  ],
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
      
        <Gallery imgs={product.imgs} />
      </main>
    );
  }
}

export default SingleProduct;
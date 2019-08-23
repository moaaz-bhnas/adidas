import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './SingleProduct.scss';
import productImg from '../../img/product.png';
import productImg2 from '../../img/product2.png';
import Gallery from '../../Components/Gallery/Gallery';
import ProductInfo from '../../Components/ProductInfo/ProductInfo';
import color1 from '../../img/color-1.png';
import color2 from '../../img/color-2.png';
import coordinate from '../../img/coordinate.png'
// import test1 from '../../img/test.png';
// import test2 from '../../img/test2.png';
import Coordinates from '../../Components/Coordinates/Coordinates';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';

const product = {
  name: 'Ultraboost 19 Shoes',
  imgs: [
    productImg,
    productImg2,
    // test1,
    // test2,
    'https://via.placeholder.com/800.png',
    'https://via.placeholder.com/800x700.png',
    'https://via.placeholder.com/800x750.png',
    'https://via.placeholder.com/700x800.png',
    'https://via.placeholder.com/750x800.png',
    'https://via.placeholder.com/750.png',
    'https://via.placeholder.com/700x750.png',
    'https://via.placeholder.com/810x740.png'
  ],
  starsNum: 4,
  reviews: [
    {
      starsNum: 5,
      summary: 'Supreme trainers',
      details: 'Super comfortable. Fits to the feed so snuggly. Massive improvements over previous models.'
    },
    {
      starsNum: 4,
      summary: 'good quality',
      details: 'It\'s a great product, but I really didn\'t like the colors. It looks better in the photo ..'
    },
    {
      starsNum: 5,
      summary: 'More comfortable than 4.0',
      details: 'More boost which increases comfort. Primeknet hugs around feet better than the old ultra boost.'
    }
  ],
  price: 1775,
  discount: 25,
  promotionalDiscount: false,
  colors: [
    { name: 'core black',  img: color1 },
    { name: 'grey six',  img: color2 }
  ],
  sizes: [ 's', 'm' ],
  gender: 'men',
  sport: 'running',
  coordinates: [
    { img: coordinate, price: 800 },
    { img: coordinate, price: 800 },
    { img: coordinate, price: 800 }
  ],
  description: 'Shoes with endless energy for long city runs.',
  specs: {
    gender: 'men',
    category: 'shoes',
    sport: 'running'
  }
}

class SingleProduct extends Component {
  state = {  }
  
  goBack = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  render() {
    return (
      <main className="productPage">
        <article>
          <h2 className="sr-only">{product.name} product</h2>

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
        
          <section className="galleryAndInfo">
            <h3 className="sr-only">Product Gallery and Info</h3>

            <Gallery imgs={product.imgs} />
            <ProductInfo product={product} />
            <Coordinates coordinates={product.coordinates} />
          </section>

          <ProductDetails product={product} />
        </article>
      </main>
    );
  }
}

export default SingleProduct;
import React, { memo, useState } from 'react';
import './ProductInfo.scss';

const ProductInfo = (props) => {
  const { product } = props;

  const price = product.discount 
  ? product.price - (product.price * 25 / 100)
  : product.price;

  /* --- quantity */
  const [ quantity, setQuantity ] = useState(1);

  return (
    <div className="productInfo">
      <div className="container">
        <div className="d-flex">
          {/* rating */}
          <ul className="productInfo__rating">
            {
              Array(product.starsNum).fill(null).map((el, index) => (
                <li className="productInfo__starItem" key={index}>
                  <i className="fas fa-star productInfo__star" role="img" aria-label="star" />
                </li>
              ))
            }
          </ul>

          {/* reviews */}
          <a href="#" className="productInfo__reviewsLink">
            Read all {product.reviews.length} reviews
          </a>
        </div>

        {/* category */}
        <div className="productInfo__category">
          {`${product.gender}'s ${product.sport}`}
        </div>

        {/* name */}
        <h2 className="productInfo__name">{product.name}</h2>

        {/* prices */}
        <p className="productInfo__prices">
          <span className={`productInfo__newPrice${product.discount ? ' discount' : null}`}>EGP {price}</span>
          { product.discount && <span className="productInfo__oldPrice"> - EGP {product.price}</span> }
        </p>

        {/* promotional discount state */}
        {
          !product.promotionalDiscount &&
          <p className="productInfo__promotionalDiscountState">
            The product is excluded from all promotional discounts and offers.
          </p>
        }

        {/* available colors */}
        <h3 className="productInfo__colorsTitle">Available Colors</h3>

        <ul className="productInfo__colorsNamesList">
          {
            product.colors.map((color) => (
              <li className="productInfo__colorName" key={color.name}>{color.name}</li>
            ))
          }
        </ul>

        <ul className="productInfo__colorsImgsList">
          {
            product.colors.map((color) => (
              <li className="productInfo__colorImgContainer" key={color.name}>
                <img src={color.img} alt={`${color.name} ${product.name}`} className="productInfo__colorImg"/>
              </li>
            ))
          }
        </ul>

        {/* size & quantity */}
        <button 
          className="productInfo__sizeChartBtn"
          aria-pressed=""
          aria-expanded=""
        >
          <i className="fas fa-ruler-combined mr-2" aria-hidden="true" /> 
          <span className="text-underline">Size Chart</span> 
        </button>

        <div className="d-flex">
          <select aria-label="select size" className="form-control productInfo__sizeSelect">
            <option>Select Size</option>
            {
              product.sizes.map((size) => (
                <option>{size}</option>
              ))
            }
          </select>

          <input 
            type="number" 
            min="1" 
            className="form-control productInfo__quantityInput" 
            value={quantity} 
            onChange={(event) => setQuantity(event.target.value)}
          />
        </div> {/* flex container */}

        {/* add to bag & like */}
        <div className="d-flex">
          <button className="productInfo__addBtn">Add to bag</button>

          <button className="productInfo__likeBtn" aria-label="like">
            <i className="fas fa-heart fa-lg" aria-hidden="true" />
          </button>
        </div>
        <p className="mt-3">
          <i aria-hidden="true" className="fas fa-truck" /> Free shippings and free returns
        </p>
      </div>
    </div>
  );
}

export default memo(ProductInfo);
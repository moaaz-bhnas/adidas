import React, { memo } from 'react'
import './ProductTemplate.scss';
import LinesEllipsis from 'react-lines-ellipsis';

const ProductTemplate = (props) => {
  const { product } = props;
  const price = product.discount 
  ? product.price - (product.price * 25 / 100)
  : product.price;
                                  

  return (
    <div className="product">
      <button className="product__btn">
        <div className="product__imgContainer">
          <img src={product.img} alt="" className="product__img"/>
        </div>
      </button>
      <p className="product__sport">{product.sport}</p>
      <h3 className="product__name">{product.name}</h3>
      <p className="productPrices">
        <span className={`productPrices__new${product.discount ? ' sale' : ''}`}>EGP {price}</span>
        {
          product.discount &&
          <s className="productPrices__old">EGP {product.price}</s>
        }
      </p>
      <div className="product__badges">
        {
          product.new &&
          <p className="product__badge product__badge_new">new</p>
        }
        {
          product.discount &&
          <p className="product__badge product__badge_sale">sale</p>
        }
      </div>{/* badges */}
    </div>
  );
}

export default memo(ProductTemplate);
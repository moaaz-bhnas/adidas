import React, { memo } from 'react'
import './ProductTemplate.scss';
import LinesEllipsis from 'react-lines-ellipsis';

const ProductTemplate = (props) => {
  const { product } = props; 
  const { price } = product;

  return (
    <div className="product">
      <div className="product__imgContainer">
        <img src={product.img} alt="" className="product__img"/>
      </div>
      <p className="product__category">{product.category}</p>
      <h3 className="product__name">{product.name}</h3>
      <p className="productPrices">
        <span className="productPrices__new" style={{ color: price.old ? '#FF0101' : null }}>EGP {price.new}</span>
        {
          price.old &&
          <s className="productPrices__old">EGP {price.old}</s>
        }
      </p>
    </div>
  );
}

export default memo(ProductTemplate);
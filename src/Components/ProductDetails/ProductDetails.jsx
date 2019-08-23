import React, { memo, useState, useCallback } from 'react';
import './ProductDetails.scss';

const ProductDetails = (props) => {
  const { product } = props;

  /* --- visible panel */
  const panels = [ 'highlights', 'description', 'specifications' ];
  const [ activePanel, setActivePanel ] = useState('description');
  const _setActivePanel = useCallback((event, panel) => {
    event.preventDefault();
    setActivePanel(panel);
  });

  /* panels */
  const highlights = (
    <div className="productHighlights">
      <h4 className="productHighlights__title">Highlights</h4>
    </div>
  );
  const description = (
    <div className="productDescription">
      <div className="productDescription__textContainer">
        <h4 className="productDescription__title">{product.name}</h4>
        <p className="productDescription__desc">{product.desc}</p>
      </div>
      <img src={product.imgs[1]} alt={`${product.name} product`} className="productDescription__img"/>
    </div>
  );
  const specs = (
    <ul className="productSpecs">
      {
        Object.keys(product.specs).map((key) => (
          <li className="productSpec" key={key}>
            {key}: {product.specs[key]}
          </li>
        ))
      }
    </ul>
  );

  return (
    <section className="productDetails">
      <div className="container">
        <h3 className="productDetails__title">Product Details</h3>

        <nav className="productDetails__nav" aria-label="product details navigation">
          <ul className="productDetails__navList">
            {
              panels.map((panel) => (
                <li className="productDetails__navItem" key={panel}>
                  <a 
                    href="#" 
                    className={`productDetails__navLink${panel === activePanel ? ' active' : ''}`}
                    onClick={(event) => _setActivePanel(event, panel)}
                  >
                    {panel}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default memo(ProductDetails);
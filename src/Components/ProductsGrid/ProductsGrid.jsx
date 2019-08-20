import React, { Component } from 'react';
import './ProductsGrid.scss';
import ProductTemplate from '../ProductsList/ProductTemplate';

class ProductsGrid extends Component {
  state = {  }
  render() {
    const { products } = this.props;

    return (
      <ul className="list productsGrid" id="productsGrid">
        {
          products.map((product) => (
            <li className="productContainer" key={product.id}>
              <ProductTemplate product={product} />
            </li>
          ))
        }
      </ul>
    );
  }
}

export default ProductsGrid;
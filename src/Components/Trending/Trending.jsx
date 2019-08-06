import React, { memo } from 'react'
import './Trending.scss';
import ProductsList from '../ProductsList/ProductsList';

const Trending = (props) => {
  const { products } = props;

  return (
    <section className="trending">
      <div className="container">
        <h2 className="trending__title">What's Trending</h2>
        <ProductsList products={products} />
      </div>
    </section>
  );
}

export default memo(Trending);
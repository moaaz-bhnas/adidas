import React from 'react';
import './RatingsAndReviews.scss';
import Ratings from './Ratings';
import Reviews from './Reviews';

const RatingsAndReviews = (props) => {
  const { product } = props;

  return (
    <section className="ratingsAndReviews container">
      <h3 className="ratingsAndReviews__title">Ratings &amp; Reviews</h3>

      <div className="ratingsAndReviews__container">
        {/* ratings (left) bar */}
        <Ratings product={product} />
      
        {/* review (right) bar */}
        <Reviews reviews={product.reviews} />
      </div>
    </section>
  );
}

export default RatingsAndReviews;
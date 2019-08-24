import React, { useCallback } from 'react';
import Stars from '../ProductInfo/Stars';
import RatignBreakdown from './RatignBreakdown';
import './Ratings.scss';

const Ratings = (props) => {
  const { product } = props;
  const { starsNum, reviews } = product;

  const calculateRating = useCallback((reviews) => {
    const ratingsSum = reviews.reduce(((accumulator, review) => accumulator + review.starsNum), 0);
    const rating = (ratingsSum / (reviews.length * 5) * 5).toFixed(1);
    return rating;
  }, []);

  const rating = calculateRating(reviews);

  return (
    <div className="ratings">
      {/* summary */}
      <div className="ratings__summary">
        {/* rating number */}
        <p className="ratings__ratingInNumber">{rating}</p>

        <div>
          {/* rating stars */}
          <Stars rating={starsNum} />
          {/* reviews number */}
          <p className="ratings__reviewsNum">{reviews.length} Reviews</p>
        </div>
      </div>
    
      {/* breakdown */}
      <RatignBreakdown reviews={reviews} />
    </div>
  );
}

export default Ratings;
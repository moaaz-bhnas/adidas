import React from 'react';
import './RatignBreakdown.scss';
import BreakdownItem from './BreakdownItem';

const RatignBreakdown = (props) => {
  const { reviews } = props;

  const ratings = [5, 4, 3, 2, 1];
  const existingRatings = ratings.filter((rating) => (
    reviews.some((review) => rating === review.starsNum)
  ));

  return (
    <div className="ratingBreakdown">
      <h4 className="ratingBreakdown__title">Rating Breakdown</h4>

      <ul className="ratingBreakdown__list">
        {
          existingRatings.map((rating) => (
            <BreakdownItem key={rating} rating={rating} reviews={reviews} />
          ))
        }
      </ul>
    </div>
  );
}

export default RatignBreakdown;
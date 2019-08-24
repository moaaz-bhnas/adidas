import React, { memo } from 'react'
import './BreakdownItem.scss';

const BreakdownItem = (props) => {
  const { rating, reviews } = props;
  const ratingReviews = reviews.filter((review) => review.starsNum === rating);

  return (
    <li className="ratingBreakdownItem">
      {/* reviews toggler btn */}
      <button className="ratingBreakdownItem__btn">{rating} Stars</button>

      {/* graph */}
      <div className="ratingBreakdownItem__graph">
        <div 
          className="ratingBreakdownItem__proportion" 
          style={{ width: `${ratingReviews.length / reviews.length * 100}%` }}
        />
      </div>

      {/* reviews number */}
      <p className="ratingBreakdownItem__reviewsNum">{ratingReviews.length}</p>
    </li>
  );
}

export default memo(BreakdownItem);
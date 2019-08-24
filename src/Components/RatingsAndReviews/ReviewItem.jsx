import React, { memo } from 'react';
import './ReviewItem.scss';
import Stars from '../ProductInfo/Stars';

const ReviewItem = (props) => {
  const { review } = props;

  return (
    <li className="review">
      <Stars rating={review.starsNum} />

      {/* review title */}
      <h4 className="review__title">{review.title}</h4>

      {/* review paragraph */}
      <p className="review__paragraph">{review.paragraph}</p>
    </li>
  );
}

export default memo(ReviewItem);
import React from 'react';
import ReviewItem from './ReviewItem';
import './ReviewsList.scss';

const ReviewsList = (props) => {
  const { reviews } = props;

  return (
    <ul className="reviewsList">
      {
        reviews.map((review, index) => (
          <ReviewItem review={review} key={index} />
        ))
      }
    </ul>
  );
}

export default ReviewsList;
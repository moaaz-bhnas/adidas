import React, { memo } from 'react';
import './Stars.scss';

const Stars = (props) => {
  const { rating } = props;

  return (
    <ul className={`ratingStars num-${rating}`}>
      {
        Array(5).fill(null).map((el, index) => (
          <li className="ratingStars__starItem" key={index}>
            <i className="fas fa-star ratingStars__star" role="img" aria-label="star" />
          </li>
        ))
      }
    </ul>
  );
}

export default memo(Stars);
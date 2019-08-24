import React, { useState, useCallback } from 'react';
import './Reviews.scss';
import ReviewsList from './ReviewsList';

const Reviews = (props) => {
  const { reviews } = props;
  
  /* active category */
  const categories = [ 'relevant', 'helpful', 'newest' ];

  const [ activeCategory, setActiveCategory ] = useState('helpful');

  const _setActiveCategory = useCallback((event, category) => {
    event.preventDefault();
    setActiveCategory(category);
  });

  const visibleReviews = reviews.filter((review) => review.category === activeCategory);

  return (
    <div className="reviews">
      <nav className="reviews__nav" aria-label="reviews navigation">
        <p className="mb-2 text-uppercase w-100">Sort on</p>
        <ul className="reviews__navList">
          {
            categories.map((category) => (
              <li className="reviews__navItem" key={category}>
                <a 
                  href="#" 
                  className={`reviews__navLink${category === activeCategory ? ' active' : ''}`}
                  onClick={(event) => _setActiveCategory(event, category)}
                >
                  {category}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    
      <ReviewsList reviews={visibleReviews} />
    </div>
  );
}

export default Reviews;
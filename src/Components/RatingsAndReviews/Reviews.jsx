import React, { PureComponent } from 'react';
import './Reviews.scss';
import ReviewsList from './ReviewsList';

const categories = [ 'relevant', 'helpful', 'newest' ];

class Reviews extends PureComponent {
  state = {  
    activeCategory: 'helpful'
  }

  setActiveCategory = (event, category) => {
    event.preventDefault();
    this.setState({ activeCategory: category });
  };

  render() {
    const { reviews } = this.props;
    const { activeCategory } = this.state;
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
                    onClick={(event) => this.setActiveCategory(event, category)}
                  >
                    {category}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      
        <ReviewsList reviews={visibleReviews} />

        <div className="reviews__btns">
          <button className="reviews__loadBtn">
            Load More <i className="fas fa-arrow-right" aria-hidden="true" />
          </button>

          <button className="reviews__writeReviewBtn">Write a Review</button>
        </div>
      </div>
    );
  }
}

export default Reviews;
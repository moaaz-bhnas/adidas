import React, { PureComponent, createRef, useState, useRef, useCallback, useEffect } from 'react';
import 'element-scroll-polyfill';
import './Gallery.scss';

class Gallery extends PureComponent {
  state = {  
    thumbnailsNumber: 3,
    activeIndex: 0,
    arrowsVisibility: { up: null, down: null, left: null, right: null }
  }

  thumbnailsListRef = createRef();
  firstThumbnailRef = createRef();
  lastThumbnailRef  = createRef();

  /* active index */
  setActiveIndex = (index) => {
    this.setState({ activeIndex: index });
  }

  /* items number */
  setThumbnailsNumber = () => {
    const thumbnailsNumber = 
    (window.innerWidth < 450) ? 3
    : (window.innerWidth < 576) ? 4
    : (window.innerWidth < 680) ? 5
    : (window.innerWidth < 1200) ? 6
    : 5;

    this.setState({ thumbnailsNumber });
  }

  /* arrows visibility */
  setArrowsVisibility = () => {
    const thumbnailsListPosition = this.thumbnailsListRef.current.getBoundingClientRect();
    const firstThumbnailPosition = this.firstThumbnailRef.current.getBoundingClientRect();
    const lastThumbnailPosition  = this.lastThumbnailRef.current.getBoundingClientRect();

    this.setState({
      arrowsVisibility: {
        up   : firstThumbnailPosition.top   !== thumbnailsListPosition.top,
        down : lastThumbnailPosition.bottom !== thumbnailsListPosition.bottom,
        left : firstThumbnailPosition.left  !== thumbnailsListPosition.left,
        right: lastThumbnailPosition.right  !== thumbnailsListPosition.right
      }
    });
  }

  /* scroll functionality */
  scrollY = (direction) => {
    const { scrollTop } = this.thumbnailsListRef.current;

    this.thumbnailsListRef.current.scroll({
      top: scrollTop + (direction === 'down' ? 88 : -88),
      behavior: 'smooth'
    });
  };

  scrollX = (direction) => {
    const { scrollLeft } = this.thumbnailsListRef.current;

    this.thumbnailsListRef.current.scroll({
      left: scrollLeft + (direction === 'right' ? 88 : -88),
      behavior: 'smooth'
    });
  }

  setThumbnailsNumberAndArrowsVisibility = () => {
    this.setThumbnailsNumber();
    this.setArrowsVisibility();
  }

  componentDidMount() {
    this.setThumbnailsNumberAndArrowsVisibility();
    window.addEventListener('resize', this.setThumbnailsNumberAndArrowsVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setThumbnailsNumberAndArrowsVisibility);
  }

  render() {
    const { imgs } = this.props;
    const { thumbnailsNumber, activeIndex, arrowsVisibility } = this.state;
    const arrowsVisible = imgs.length > thumbnailsNumber;

    return (
      <div className="gallery">
        <img src={imgs[activeIndex]} alt="" className="gallery__activeImg"/>

        <div className="gallery__container">
          {/* top arrow */}
          {
            (arrowsVisible && arrowsVisibility.up) &&
            <button 
              className="gallery__arrowBtn gallery__arrowBtn_direction_up"
              aria-label="previous img"
              onClick={() => this.scrollY('up')}
            >
              <i className="fas fa-chevron-up" aria-hidden="true" />
            </button>
          }
          {
            (arrowsVisible && arrowsVisibility.left) &&
            <button 
              className="gallery__arrowBtn gallery__arrowBtn_direction_left"
              aria-label="previous img"
              onClick={() => this.scrollX('left')}
            >
              <i className="fas fa-chevron-left" aria-hidden="true" />
            </button>
          }

          {/* list */}
          <div 
            className="gallery__listContainer"
            ref={this.thumbnailsListRef}
            onScroll={this.setArrowsVisibility}
          >          
            <ul 
              className="gallery__list" 
            >
              {
                imgs.map((img, index, arr) => (
                  <li 
                    className="gallery__item" 
                    key={index}
                    ref={
                      (index === 0) 
                      ? this.firstThumbnailRef 
                      : (index === arr.length-1) 
                      ? this.lastThumbnailRef
                      : null
                    }
                  >
                    <button 
                      className="gallery__imgBtn"
                      aria-pressed={index === activeIndex ? true : false}
                      onClick={() => this.setActiveIndex(index)}
                    >
                      <img src={img} alt="" className="gallery__img"/>
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>
        
          {/* down arrow */}
          {
            (arrowsVisible && arrowsVisibility.down) &&
            <button 
              className="gallery__arrowBtn gallery__arrowBtn_direction_down"
              aria-label="next img"
              onClick={() => this.scrollY('down')}
            >
              <i className="fas fa-chevron-down" aria-hidden="true" />
            </button>
          }
          {
            (arrowsVisible && arrowsVisibility.right) &&
            <button 
              className="gallery__arrowBtn gallery__arrowBtn_direction_right"
              aria-label="next img"
              onClick={() => this.scrollX('right')}
            >
              <i className="fas fa-chevron-right" aria-hidden="true" />
            </button>
          }
        </div>
      </div>
    );
  }
}

export default Gallery;


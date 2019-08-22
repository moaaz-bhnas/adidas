import React, { useState, useRef, useCallback } from 'react';
import 'element-scroll-polyfill';
import './Gallery.scss';

const Gallery = (props) => {
  const { imgs } = props;

  // active image
  const [ activeIndex, setActiveIndex ] = useState(0);

  // arrows visibility
  const arrowsVisible = imgs.length > 4;

  // up arrow visibility
  const galleryList = useRef();
  const firstGalleryItem = useRef();
  const [ upArrowVisible, setUpArrowVisible ] = useState(false);
  const _setUpArrowVisible = useCallback(() => {
    const galleryTopPosition = galleryList.current.getBoundingClientRect().top;
    const firstItemTopPosition = firstGalleryItem.current.getBoundingClientRect().top;
    setUpArrowVisible(galleryTopPosition !== firstItemTopPosition);
  }, []);

  // down arrow visibility
  const lastGalleryItem = useRef();
  const [ downArrowVisible, setDownArrowVisible ] = useState(true);
  const _setDownArrowVisible = useCallback(() => {
    const galleryBottomPosition = galleryList.current.getBoundingClientRect().bottom;
    const lastItemBottomPosition = lastGalleryItem.current.getBoundingClientRect().bottom;
    setDownArrowVisible(galleryBottomPosition !== lastItemBottomPosition);
  }, []);

  // scroll buttons
  const [ scrollValue, setScrollValue ] = useState(0);

  const _setScrollValue = useCallback(() => {
    setScrollValue(galleryList.current.scrollTop);
  }, []);

  const scrollDown = useCallback(() => {
    galleryList.current.scroll({
      top: scrollValue + 88,
      behavior: 'smooth'
    });
    // setScrollValue(scrollValue + 88);
  }, [ scrollValue ]);

  const scrollUp = useCallback(() => {
    galleryList.current.scroll({
      top: scrollValue - 88,
      behavior: 'smooth'
    });
    // setScrollValue(scrollValue - 88);
  }, [ scrollValue ]);

  return (
    <div className="gallery">
      <img src={imgs[activeIndex]} alt="" className="gallery__activeImg"/>

      <div className="gallery__container">
        {/* top arrow */}
        {
          (arrowsVisible && upArrowVisible) &&
          <button 
            className="gallery__arrowBtn gallery__arrowBtn_direction_up"
            aria-label="previous img"
            onClick={scrollUp}
          >
            <i className="fas fa-chevron-up" aria-hidden="true" />
          </button>
        }

        {/* list */}
        <div 
          className="gallery__listContainer"
          ref={galleryList}
          onScroll={() => {
            _setScrollValue();
            _setUpArrowVisible();
            _setDownArrowVisible();
          }}
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
                    ? firstGalleryItem 
                    : (index === arr.length-1) 
                    ? lastGalleryItem
                    : null
                  }
                >
                  <button 
                    className="gallery__imgBtn"
                    aria-pressed={index === activeIndex ? true : false}
                    onClick={() => setActiveIndex(index)}
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
          (arrowsVisible && downArrowVisible) &&
          <button 
            className="gallery__arrowBtn gallery__arrowBtn_direction_down"
            aria-label="next img"
            onClick={scrollDown}
          >
            <i className="fas fa-chevron-down" aria-hidden="true" />
          </button>
        }
      </div>
    </div>
  );
}

export default Gallery;
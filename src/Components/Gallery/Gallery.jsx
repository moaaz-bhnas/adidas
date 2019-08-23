import React, { useState, useRef, useCallback, useEffect } from 'react';
import 'element-scroll-polyfill';
import './Gallery.scss';

const Gallery = (props) => {
  const { imgs } = props;

  /* --- items number */
  const [ itemsNumber, setItemsNumber ] = useState(3);

  /* --- active image */
  const [ activeIndex, setActiveIndex ] = useState(0);

  /* --- arrows visibility */
  const arrowsVisible = imgs.length > itemsNumber;

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

  // left arrow visibility
  const [ leftArrowVisible, setLeftArrowVisible ] = useState(false);
  const _setLeftArrowVisible = useCallback(() => {
    const galleryLeftPosition = galleryList.current.getBoundingClientRect().left;
    const firstItemLeftPosition = firstGalleryItem.current.getBoundingClientRect().left;
    setLeftArrowVisible(galleryLeftPosition !== firstItemLeftPosition);
  }, []);

  // right arrow visibility
  const [ rightArrowVisible, setRightArrowVisible ] = useState(true);
  const _setRightArrowVisible = useCallback(() => {
    const galleryRightPosition = galleryList.current.getBoundingClientRect().right;
    const lastItemRightPosition = lastGalleryItem.current.getBoundingClientRect().right;
    setRightArrowVisible(galleryRightPosition !== lastItemRightPosition);
  }, []);

  /* --- scroll functionality */
  // y axis
  const [ yScrollValue, setYScrollValue ] = useState(0);

  const _setYScrollValue = useCallback(() => {
    setYScrollValue(galleryList.current.scrollTop);
  }, []);

  const scrollDown = useCallback(() => {
    galleryList.current.scroll({
      top: yScrollValue + 88,
      behavior: 'smooth'
    });
  }, [ yScrollValue ]);

  const scrollUp = useCallback(() => {
    galleryList.current.scroll({
      top: yScrollValue - 88,
      behavior: 'smooth'
    });
  }, [ yScrollValue ]);

  // x axis
  const [ xScrollValue, setXScrollValue ] = useState(0);

  const _setXScrollValue = useCallback(() => {
    setXScrollValue(galleryList.current.scrollLeft);
  }, []);

  const scrollRight = useCallback(() => {
    galleryList.current.scroll({
      left: xScrollValue + 88,
      behavior: 'smooth'
    });
  }, [ xScrollValue ]);

  const scrollLeft = useCallback(() => {
    galleryList.current.scroll({
      left: xScrollValue - 88,
      behavior: 'smooth'
    });
  }, [ xScrollValue ]);

  /* Set scroll values and check arrows visibility */
  const setScrollValuesAndCheckArrowsVisibility = useCallback(() => {
    _setYScrollValue();
    _setUpArrowVisible();
    _setDownArrowVisible();
    _setXScrollValue();
    _setLeftArrowVisible();
    _setRightArrowVisible();
  }, []);

  const setItemsNumberAndArrowsVisibility = useCallback(() => {
    setScrollValuesAndCheckArrowsVisibility();

    const itemsNumber = 
    (window.innerWidth < 450) ? 3
    : (window.innerWidth < 576) ? 4
    : (window.innerWidth < 680) ? 5
    : 6
    setItemsNumber(itemsNumber);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setItemsNumberAndArrowsVisibility);
    return () => {
      window.removeEventListener('resize', setItemsNumberAndArrowsVisibility);
    }
  }, [ upArrowVisible, leftArrowVisible, downArrowVisible, rightArrowVisible ]);

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
        {
          (arrowsVisible && leftArrowVisible) &&
          <button 
            className="gallery__arrowBtn gallery__arrowBtn_direction_left"
            aria-label="previous img"
            onClick={scrollLeft}
          >
            <i className="fas fa-chevron-left" aria-hidden="true" />
          </button>
        }

        {/* list */}
        <div 
          className="gallery__listContainer"
          ref={galleryList}
          onScroll={setScrollValuesAndCheckArrowsVisibility}
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
        {
          (arrowsVisible && rightArrowVisible) &&
          <button 
            className="gallery__arrowBtn gallery__arrowBtn_direction_right"
            aria-label="next img"
            onClick={scrollRight}
          >
            <i className="fas fa-chevron-right" aria-hidden="true" />
          </button>
        }
      </div>
    </div>
  );
}

export default Gallery;
import React, { useState, useCallback } from 'react';
import Filters from './Filters';
import './ResultSection.scss';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import Pagination from './Pagination';
import RefinementBlock from './RefinementBlock';
import RefinementModal from './RefinementModal';

/**
 * Needs to be moved to a util level
 */
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

const preventDefault = (e) => {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}

const preventDefaultForScrollKeys = (e) => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

const disableScroll = () => {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

const enableScroll = () => {
  if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
}

const filters = ['Apparel', 'Men', 'Jerseys'];

const Result = (props) => {
  const [ refinementModalVisible, setRefinementModalVisible ] = useState(false);

  const openRefinementModal = useCallback(() => {
    setRefinementModalVisible(true);

    // prevent scroll
    disableScroll();
    document.documentElement.setAttribute('data-scrollbar', 'false');
  }, []);

  const closeRefinementModal = useCallback((event) => {
    const clickIsOnOverlay = event.target.className === 'refinementModalBackground';

    if (clickIsOnOverlay) {
      setRefinementModalVisible(false);

      // allow scroll
      enableScroll();
      document.documentElement.setAttribute('data-scrollbar', 'true');
    }
  }, []);

  const { query, products } = props;
  const pagesNum = Math.ceil(products.length / 28);

  return (
    <section className="result">
      <div className="container">
        <div className="result__titleContainer">
          <h2 className="result__title">{query}</h2> 
          <p className="result__num">{`[${products.length} Products]`}</p>          
        </div>

        <div className="d-flex justify-content-between">
          {/* refinement block */}
          <div className="refinementCol">
            <RefinementBlock />
          </div>

          {/* grid */}
          <div className="gridCol">
            {/* filteration */}
            <div className="filteration">
              <div className="d-flex">
                <Filters filters={filters} />
                <button className="filteration__clearBtn">Clear&nbsp;All</button>
              </div>
              <select className="form-control filteration__sortBy" aria-controls="productsGrid">
                <option value="">Sort by</option>
              </select>
            </div>
            {/* products */}
            <ProductsGrid products={products} />
            {/* pagination */}
            <Pagination pagesNum={pagesNum} />
          </div>
        </div>
      
        <button 
          className="refinementToggler"
          aria-pressed={refinementModalVisible}
          aria-expanded={refinementModalVisible}
          aria-controls={refinementModalVisible ? 'refinementModal' : null}
          aria-label="Toggle refinement modal"
          onClick={openRefinementModal}
        >
          <i className="fas fa-filter" aria-hidden="true" />
        </button>

        {
          refinementModalVisible &&
          <RefinementModal closeModal={closeRefinementModal} />
        }
      </div>
    </section>
  );
}

export default Result;
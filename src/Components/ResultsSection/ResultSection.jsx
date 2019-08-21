import React, { useState, useCallback, useRef } from 'react';
import Filters from './Filters';
import './ResultSection.scss';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import Pagination from './Pagination';
import RefinementBlock from './RefinementBlock';
import RefinementModal from './RefinementModal';

const filters = ['Apparel', 'Men', 'Jerseys'];

const Result = (props) => {
  const [ refinementModalVisible, setRefinementModalVisible ] = useState(false);

  const openRefinementModal = useCallback(() => {
    setRefinementModalVisible(true);

    // prevent scroll
    document.body.setAttribute('data-scroll', 'false');
  }, []);

  const closeRefinementModal = useCallback((event) => {
    setRefinementModalVisible(false);

    // allow scroll
    document.body.setAttribute('data-scroll', 'true');
  }, []);

  const modalToggler = useRef();

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
          ref={modalToggler}
        >
          <i className="fas fa-filter" aria-hidden="true" />
        </button>

        {
          refinementModalVisible &&
          <RefinementModal closeModal={closeRefinementModal} ref={modalToggler} />
        }
      </div>
    </section>
  );
}

export default Result;
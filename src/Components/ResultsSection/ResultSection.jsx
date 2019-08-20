import React from 'react';
import Filters from './Filters';
import './ResultSection.scss';
import ProductsGrid from '../ProductsGrid/ProductsGrid';

const filters = ['Apparel', 'Men', 'Jerseys'];

const Result = (props) => {
  const { query, products } = props;

  return (
    <section className="result">
      <div className="container">
        <div className="d-flex align-items-end mb-4">
          <h2 className="result__title">{query}</h2> 
          <p className="result__num">{`[${products.length} Products]`}</p>          
        </div>

        <div className="row">
          {/* refinement block */}

          {/* grid */}
          <div className="col">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Result;
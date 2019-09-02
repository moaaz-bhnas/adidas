import React, { PureComponent, createRef } from 'react';
import Filters from './Filters';
import './ResultSection.scss';
import ProductsGrid from '../ProductsGrid/ProductsGrid';
import Pagination from './Pagination';
import RefinementBlock from './RefinementBlock';
import RefinementModal from './RefinementModal';

const filters = ['Apparel', 'Men', 'Jerseys'];

class ResultSection extends PureComponent {
  state = {  
    refinementModalVisible: false
  }

  modalTogglerRef = createRef();

  openRefinementModal = () => {
    this.setState({ refinementModalVisible: true });

    // prevent scroll
    document.body.setAttribute('data-scroll', 'false');
  };

  closeRefinementModal = (event) => {
    this.setState({ refinementModalVisible: false });

    // allow scroll
    document.body.setAttribute('data-scroll', 'true');
  };

  render() {
    const { query, products } = this.props;
    const { refinementModalVisible } = this.state;
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
            onClick={this.openRefinementModal}
            ref={this.modalTogglerRef}
          >
            <i className="fas fa-filter" aria-hidden="true" />
          </button>

          {
            refinementModalVisible &&
            <RefinementModal closeModal={this.closeRefinementModal} ref={this.modalTogglerRef} />
          }
        </div>
      </section>
    );
  }
}

export default ResultSection;
import React, { memo } from 'react';
import './Pagination.scss';

const Pagination = (props) => {
  const { pagesNum } = props;

  return (
    <nav className="customPagination" aria-label="products grid pagination">
      <p className="pagination__paragraph">
        Page: 
        <select className="form-control pagination__select">
          {
            Array(pagesNum).fill(null).map((el, index) => (
              <option key={index}>{index+1}</option>
            ))
          }
        </select>
        of {pagesNum}
      </p>

      <button className="pagination__backBtn">Back</button>
    </nav>
  );
}

export default memo(Pagination);
import React, { memo } from 'react';
import { Link } from "react-router-dom";
import './CategoriesSidebar.scss';

const CategoriesSidebar = (props) => {
  const { close, categories, visible } = props;

  return (
    <div id="categoriesSidebar" className="categoriesSidebar" aria-hidden={!visible}>
      {/* close button */}
      <button 
        className="btn categoriesSidebar__closeBtn"
        aria-label="Close sidebar"
        onClick={close}
      >
        <i className="fas fa-times" aria-hidden="true"></i>
      </button>

      {/* categories list */}
      <nav className="categoriesSidebar__nav">
        <h2 className="sr-only">Categories navigation</h2>
        <ul className="list categoriesSidebar__list">
          {
            categories.map((category, index) => (
              <li key={index}>
                <Link to="/category" className="categoriesSidebar__link">{category}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
}

export default memo(CategoriesSidebar);
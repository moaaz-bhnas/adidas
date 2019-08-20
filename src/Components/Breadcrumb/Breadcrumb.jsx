import React, { memo } from 'react';
import { Link } from "react-router-dom";
import './Breadcrumb.scss';

const Breadcrumb = (props) => {
  const { goBack, query } = props;

  return (
    <nav className="breadcrumbBar" aria-label="Breadcrumb">
      <div className="container">
        <a 
          href="#" 
          className="breadcrumbBar__backLink"
          onClick={goBack}
        > 
          <i className="fas fa-arrow-left" aria-hidden="true" /> <span className="text-underline">Back</span>
        </a>

        <ol className="list breadcrumbList">
          <li className="breadcrumbBar__item">
            <Link className="breadcrumbBar__link" to="/">Home</Link>
          </li>
          <li className="breadcrumbBar__item" aria-current="page">{query}</li>
        </ol>
      </div>
    </nav>
  );
}

export default memo(Breadcrumb);
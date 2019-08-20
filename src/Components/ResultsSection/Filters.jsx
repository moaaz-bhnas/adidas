import React from 'react';
import './Filters.scss';

const Filters = (props) => {
  const { filters } = props;

  return (
    <ul className="list filters">
      {
        filters.map((filter, index) => (
        <li className="filter" key={index}>
          <button aria-label="remove filter" className="filter__removeBtn">x</button> {filter}
        </li>             
        ))
      }
    </ul>
  );
}

export default Filters;
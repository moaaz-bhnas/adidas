import React, { useState, useCallback } from 'react'
import './RefinementItem.scss';

const RefinementItem = (props) => {
  const [ optionsVisible, setOptionsVisible ] = useState(false);

  const toggleOptionsList = useCallback(() => {
    setOptionsVisible(!optionsVisible);
  });

  const { item } = props;
  return (
    <li className="refinement__item">
      <h4 className="refinement__name">
        <button 
          className="refinement__nameBtn"
          aria-expanded={optionsVisible}
          aria-pressed={optionsVisible}
          aria-controls={optionsVisible ? 'refinement__options' : null}
          onClick={toggleOptionsList}
          onMouseDown={(e) => e.preventDefault()}
        >
          {item.name} <i className="fas fa-chevron-down" />
        </button>
      </h4>

      {
        optionsVisible &&
        <ul className="list refinement__options" id="refinement__options">
          {
            item.options.map((option, index) => (
              <li className="refinment__option" key={index}>
                <button className="refinement__optionBtn">{`${option} [1]`}</button>
              </li>
            ))
          }
        </ul>
      }
    </li>
  );
}

export default RefinementItem;
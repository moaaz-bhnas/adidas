import React, { useState, useCallback } from 'react'
import './RefinementItem.scss';
import PriceRange from '../../Controls/PriceRange/PriceRange';
import OptionsList from './OptionsList';

const RefinementItem = (props) => {
  /* options list visibility */
  const [ optionsVisible, setOptionsVisible ] = useState(true);

  const toggleOptions = useCallback(() => {
    setOptionsVisible(!optionsVisible);
  }, [optionsVisible]);

  const { item } = props;
  return (
    <li className="refinement__item">
      <h4 className="refinement__name">
        <button 
          className="refinement__nameBtn"
          aria-expanded={optionsVisible}
          aria-pressed={optionsVisible}
          aria-controls="refinement__options"
          onClick={toggleOptions}
          onMouseDown={(e) => e.preventDefault()}
        >
          {item.name} <i className="fas fa-chevron-down" />
        </button>
      </h4>

      {
        item.name === 'price' ?
        <PriceRange visible={optionsVisible} item={item} /> :
        <OptionsList visible={optionsVisible} item={item} />
      }
    </li>
  );
}

export default RefinementItem;
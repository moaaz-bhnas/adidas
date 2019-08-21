import React, { useState, useRef, useEffect, useCallback } from 'react';
import './OptionsList.scss';

const OptionsList = (props) => {
  const { item, visible } = props;

  return (
    <ul 
      className="list refinement__options" 
      id="refinement__options"
      data-visible={visible}
    >
      {
        item.options.map((option, index) => (
          <li className="refinment__option" key={index}>
            <button className="refinement__optionBtn" tabIndex={visible ? 0 : -1}>{`${option} [1]`}</button>
          </li>
        ))
      }
    </ul>
  );
}

export default OptionsList;
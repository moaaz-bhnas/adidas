import React, { useRef, useState, useEffect, useCallback } from 'react';
import './PriceRange.scss';

const PriceRange = (props) => {
  const { item, visible } = props;
  const { min, max } = item.range;

  // values
  const [ range, setRange ] = useState({ min, max });

  const handleChange = useCallback((event) => {
    const { id } = event.target;
    switch (id) {
      case 'min':
        setRange({ min: event.target.value, max });
        break;
      case 'max':
        setRange({ min, max: event.target.value });
        break
    }
  });

  return (
    <form 
      className="priceRange" 
      data-visible={visible}
    >
      <div className="priceRange__inputContainer">
        <label htmlFor="min" className="priceRange__label">From (EGP)</label>
        <input 
          type="number" 
          min={min} 
          max={max} 
          id="min" 
          className="form-control priceRange__min" 
          value={range.min}
          onChange={handleChange}
        />
      </div>
      <div className="priceRange__inputContainer">
        <label htmlFor="max" className="priceRange__label">To (EGP)</label>
        <input 
          type="number" 
          min={min} 
          max={max} 
          id="max" 
          className="form-control priceRange__max" 
          value={range.max}
          onChange={handleChange}
        />
      </div>
    </form>
  );
}

export default PriceRange;
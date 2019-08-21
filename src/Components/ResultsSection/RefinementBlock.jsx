import React from 'react';
import RefinementItem from './RefinementItem';
import './RefinementBlock.scss';

const refinementItems = [
  { name: 'gender', options: ['men', 'kids'] },
  { name: 'category', options: ['Clothing', 'Shoes'] },
  { name: 'price', range: { min: 150, max: 350 } },
  { name: 'Product type', options: ['Shirts', 'Shoes'] },
  { name: 'sport', options: ['Football', 'Running'] },
  { name: 'size', options: ['s', 'm'] },
  { name: 'brand', options: ['Badge of Sports', 'Originals'] }
];

const RefinementBlock = (props) => {
  return (
    <div className="refinement">
      <h3 className="refinement__title">Refine</h3>

      <ul className="list refinement__list">
        {
          refinementItems.map((item) => (
            <RefinementItem item={item} key={item.name} />
          ))
        }
      </ul>
    </div>
  );
}

export default RefinementBlock;
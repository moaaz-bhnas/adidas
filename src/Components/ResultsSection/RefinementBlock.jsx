import React from 'react';
import RefinementItem from './RefinementItem';
import './RefinementBlock.scss';

const refinementItems = [
  { name: 'Gender', options: ['men', 'kids'] },
  { name: 'Category', options: ['Clothing', 'Shoes'] },
  { name: 'price', options: [100, 200] },
  { name: 'Product type', options: ['Shirts', 'Shoes'] },
  { name: 'Sport', options: ['Football', 'Running'] },
  { name: 'Size', options: ['s', 'm'] },
  { name: 'Brand', options: ['Badge of Sports', 'Originals'] }
];

const RefinementBlock = () => {
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
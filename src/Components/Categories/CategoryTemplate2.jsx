import React, { memo } from 'react';
import './CategoryTemplate2.scss';

const CategoryTemplate2 = (props) => {
  const { category } = props;

  return (
    <li className="category">
      <div className="category__container" style={{ backgroundImage: `url(${category.img})` }}>
        <button className="btn-3d btn-3d_theme_white category__btn">
          Shop {category.name} <i className="fa fa-arrow-right ml-4" />
        </button>
      </div>
    </li>
  );
}

export default memo(CategoryTemplate2);
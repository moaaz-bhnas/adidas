import React from 'react';
import './CategoryTemplate.scss';
import { Link } from 'react-router-dom';

const CategoryTemplate = (props) => {
  const { category } = props;

  return (
    <li className="category">
      <div className="category__container">
        <Link className="category__link" to="/category">
          <img src={category.img} alt={`${category.name} category`} className="category__img"/>
        </Link>
        <h3 className="category__name">{category.name}</h3>
      </div>
    </li>
  );
}

export default CategoryTemplate;
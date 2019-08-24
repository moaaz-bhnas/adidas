import React from 'react';
import './Categories.scss';
import CategoryTemplate from './CategoryTemplate2';
import category1 from '../../img/category-1.png';
import category2 from '../../img/category-2.png';

const categories = [
  {id: 0, name: 'Shoes', img: category1},
  {id: 1, name: 'Apparel', img: category2},
  {id: 2, name: 'Best Sellers', img: category1},
  {id: 3, name: 'New Arrivals', img: category2}
]

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="sr-only">Categories</h2>
        <ul className="list categories__list">
          {
            categories.map((category) => (
              <CategoryTemplate category={category} key={category.id} />
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default Categories;
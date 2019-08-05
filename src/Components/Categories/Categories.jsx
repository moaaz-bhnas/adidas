import React from 'react';
import './Categories.scss';
import CategoryTemplate from './CategoryTemplate';

const categories = [
  {id: 0, name: 'Shoes', img: '/img/category-1.png'},
  {id: 1, name: 'Apparel', img: '/img/category-2.png'},
  {id: 2, name: 'Best Sellers', img: '/img/category-1.png'},
  {id: 3, name: 'New Arrivals', img: '/img/category-2.png'}
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
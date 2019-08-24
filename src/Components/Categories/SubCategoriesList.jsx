import React from 'react';
import './SubCategoriesList.scss';

const SubCategoriesList = (props) => {
  const { title, subCategories } = props;

  return (
    <div className="subCategories">
      <div className="subCategories__container">
        <h2 className="subCategories__title">{title}</h2>

        <ul className="subCategories__list">
          {
            subCategories.map((sub) => (
              <li className="subCategory" key={sub}>
                <a href="#" className="subCategory__link">
                  {sub}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default SubCategoriesList;
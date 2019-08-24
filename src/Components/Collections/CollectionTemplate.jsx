import React, { memo } from 'react';
import './CollectionTemplate.scss';

const CollectionTemplate = (props) => {
  const { collection, index } = props;

  return (
    <li className="collection">
      <div className="collection__container">
        <img src={collection.img} alt={collection.name} className="collection__img"/>
        <h3 className="collection__name">{collection.name}</h3>
        <p className="collection__desc">{collection.desc}</p>
        <button className={`btn-3d btn-3d_theme_${index === 0 ? 'black' : 'white'}`}>
          Shop {collection.name} <i className="fas fa-arrow-right ml-4" />
        </button>
      </div>
    </li>
  );
}

export default memo(CollectionTemplate);
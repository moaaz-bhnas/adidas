import React, { memo } from 'react';
import './EditionTemplate.scss';

const EditionTemplate = (props) => {
  const { edition, index } = props;

  return (
    <li className="edition col-sm-6">
      <div 
        className="edition__container"
        style={{ backgroundImage: `url(${edition.cover})` }}
      >
        <h3 className="edition__title">{edition.name} Edition</h3>
        <a href="#" className={`btn-3d ${index === 0 ? 'btn-3d_theme_white' : 'btn-3d_theme_black'}`}>
          Shop now <i className="fas fa-arrow-right ml-4"></i>
        </a>
      </div>
    </li>
  );
}

export default memo(EditionTemplate);
import React from 'react';
import './Gallery.scss';

const Gallery = (props) => {
  const { imgs } = props;

  return (
    <div className="gallery">
      <img src={imgs[0]} alt="" className="gallery__activeImg"/>

      <ul className="gallery__list">
        {
          imgs.slice(0, 4).map((img) => (
            <li className="gallery__item" key={img}>
              <img src={img} alt="" className="gallery__img"/>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Gallery;
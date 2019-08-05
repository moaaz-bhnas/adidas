import React, { memo } from 'react';
import './View360.scss';

const blurredShop = '/img/blurred-shop.png';
const shop        = '/img/shop.png';

const View360 = () => {
  return (
    <section className="view360">
      <div className="view360__text">
        <div className="view360__textContainer">
          <h3 className="view360__title">Live Shopping Experience</h3>
          <p className="view360__description">
            360-Degree shopping experience
          </p>
          <a href="#" className="btn-3d view360__btn-3d">
            Shop now <i className="fas fa-arrow-right ml-4"></i>
          </a>
          <a href="#" className="btn-3d">
            Learn more <i className="fas fa-arrow-right ml-4"></i>
          </a>
        </div>
      </div>
      <div className="view360__media">
        <div 
          className="view360__blurredShop"
          style={{ backgroundImage: `url(${blurredShop})` }}
        ></div>
        <div className="view360__panoramaContainer">
          <img src={shop} alt="Shop" className="view360__panoramaImg"/>
        </div>
      </div>
    </section>
  );
}

export default memo(View360);
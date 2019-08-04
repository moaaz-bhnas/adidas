import React, { memo } from 'react';
import './TopBanner.scss';

const logo = '/img/logo.png';
const product = {
  name: 'Ozweego',
  description: 'Future-focused attitude with adiPRENE technology for maximum comfort.',
  cover_img_url: '/img/banner.png'
}

const TopBanner = () => {
  return (
    <article className="featuredProduct1" style={{backgroundImage: `url(${product.cover_img_url})`}}>
      <div className="container">
        <img src={logo} alt="Adidas logo" className="banner__logo"/>
        <h3 className="featuredProduct1__name">{product.name}</h3>
        <p className="featuredProduct1__description">{product.description}</p>
        <a href="#" className="btn-3d">
          Shop now <i className="fa fa-arrow-right ml-4"></i>
        </a>
      </div>
    </article>
  );
}

export default memo(TopBanner);

import React, { memo } from 'react';
import './TopBanner.scss';
import topBanner from '../../img/banner.png';
import logo from '../../img/logo.png';

const product = {
  name: 'Ozweego',
  description: 'Future-focused attitude with adiPRENE technology for maximum comfort.',
  cover_img_url: topBanner
}

const TopBanner = () => {
  return (
    <article className="featuredProduct1" style={{backgroundImage: `url(${product.cover_img_url})`}}>
      <div className="container">
        <img src={logo} alt="Adidas logo" className="banner__logo"/>
        <h2 className="featuredProduct1__name">{product.name}</h2>
        <p className="featuredProduct1__description">{product.description}</p>
        <a href="#" className="btn-3d btn-3d_theme_black">
          Shop now <i className="fa fa-arrow-right ml-4"></i>
        </a>
      </div>
    </article>
  );
}

export default memo(TopBanner);

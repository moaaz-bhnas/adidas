import React, { memo } from 'react';
import './TopBanner2.scss';
import topBanner from '../../img/top-banner2.png';

const TopBanner2 = () => {
  return (
    <div className="topBanner" style={{ backgroundImage: `url(${topBanner})` }}>
      <div className="container">
        <h2 className="topBanner__title">Feel The Boost</h2>
        <p className="topBanner__paragraph">
          Boost never lets up—bringing energy and comfort stride after stride after stride.
        </p>
        <a href="#" className="btn-3d btn-3d_theme_black">
          Shop Now <i className="fa fa-arrow-right ml-4" />
        </a>
      </div>
    </div>
  );
}

export default memo(TopBanner2);
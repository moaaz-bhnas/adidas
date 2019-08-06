import React, { memo } from 'react';
import './BottomBanner.scss';

const BottomBanner = () => {
  return (
    <div className="bottomBanner">
      <div className="container">
        <h2 className="bottomBanner__title">Run for the oceans</h2>
        <p className="bottomBanner__paragraph">
          We're rethinking and repurposing plastic.
        </p>
        <a href="#" className="btn-3d btn-3d_theme_black">
          See the results <i className="fas fa-arrow-right ml-4"></i>
        </a>
      </div>
    </div>
  );
}

export default memo(BottomBanner);
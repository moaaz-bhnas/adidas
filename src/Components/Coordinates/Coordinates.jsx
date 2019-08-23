import React, { memo } from 'react'
import './Coordinates.scss';

const Coordinates = (props) => {
  const { coordinates } = props;

  return (
    <div className="coordinates">
      <div className="container">
        <h3 className="coordinates__title">Complete the Look</h3>

        <ul className="coordinates__list">
          {
            coordinates.map((coordinate) => (
              <li className="coordinate" key={coordinate.img}>
                <div className="coordinate__imgContainer">
                  <img src={coordinate.img} alt="" className="coordinate__img"/>
                </div>
                <p className="coordinate__price">EGP {coordinate.price}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default memo(Coordinates);
import React, { memo } from 'react';
import './Collections.scss';
import collection1 from '../../img/collection1.png';
import collection2 from '../../img/collection2.png';
import CollectionTemplate from './CollectionTemplate';

const collections = [
  {
    name: 'superstar',
    desc: 'made with car, worn without',
    img: collection1
  },
  {
    name: 'the pack',
    desc: 'made with car, worn without',
    img: collection2
  }
];

const Collections = () => {
  return (
    <section className="collections container">
      <h2 className="sr-only">Collections</h2>

      <ul className="collections__list">
        {
          collections.map((collection, index) => (
            <CollectionTemplate collection={collection} index={index} />
          ))
        }
      </ul>
    </section>
  );
}

export default memo(Collections);
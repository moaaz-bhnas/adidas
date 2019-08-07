import React, { memo } from 'react';
import EditionTemplate from './EditionTemplate';
import './Editions.scss';
import edition1 from '../../img/supercourt.png';
import edition2 from '../../img/toy-story.png';

const editions = [
  { id: 0, name: 'Supercourt', cover: edition1 },
  { id: 1, name: 'Toy Story',  cover: edition2 }
];

const Editions = () => {
  return (
    <section className="editions">
      <div className="container">
        <h2 className="sr-only">Editions</h2>
        <ul className="list editions__list row">
          {
            editions.map((edition, index) => (
              <EditionTemplate edition={edition} key={edition.id} index={index} />
            ))
          }
        </ul>
      </div>
    </section>
  );
}

export default memo(Editions);
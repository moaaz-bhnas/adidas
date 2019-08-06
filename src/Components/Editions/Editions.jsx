import React, { memo } from 'react';
import EditionTemplate from './EditionTemplate';
import './Editions.scss';

const editions = [
  { id: 0, name: 'Supercourt', cover: '/img/supercourt.png' },
  { id: 1, name: 'Toy Story',  cover: '/img/toy-story.png' }
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
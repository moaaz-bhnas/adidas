import React, { memo } from 'react'
import './Footer.scss';

const footerList = [
  { title: 'Customer Support', items: ['Help', 'Track Orders', 'Returns & Refunds', 'Sizing', 'Offers', 'How to take Care', 'Store', '360'] },
  { title: 'Company Info', items: ['About Us', 'Careers', 'Press'] },
  { title: 'Accounts & Profile', items: ['My Account', 'New User', 'My History', 'Favorite'] },
  { title: 'Privacy & Terms', items: ['Privacy Policy', 'Terms & Conditions', 'Statements'] },
  { title: 'About RA Sports', items: ['About', 'Careers', 'Partenrs'] }
];

const Footer = () => {
  return (
    <footer className="footer container">
      <nav className="footer__nav">
        <h2 className="sr-only">Secondary Navigation</h2>

        <ul className="list footer__list">
          {
            footerList.map((footerCol) => (
              <li className="footer__col">
                <h3 className="footerCol__title">
                  {footerCol.title.split(' ')[0]} <br/> {footerCol.title.slice(footerCol.title.indexOf(' '))}
                </h3>
                <ul className="list footerCol__list">
                  {
                    footerCol.items.map((item) => (
                      <li className="footerCol__item">
                        <a className="footerCol__link" href="#">{item}</a>
                      </li>
                    ))
                  }
                </ul>
              </li>
            ))
          }
        </ul>
      </nav>
    </footer>
  );
}

export default memo(Footer);
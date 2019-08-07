import React, { memo } from 'react'
import './Footer.scss';

const footerList = [
  { title: 'Customer Support', items: ['Help', 'Track Orders', 'Returns & Refunds', 'Sizing', 'Offers', 'How to take Care', 'Store', '360'] },
  { title: 'Company Info', items: ['About Us', 'Careers', 'Press'] },
  { title: 'Accounts & Profile', items: ['My Account', 'New User', 'My History', 'Favorite'] },
  { title: 'Privacy & Terms', items: ['Privacy Policy', 'Terms & Conditions', 'Statements'] },
  { title: 'About RA Sports', items: ['About', 'Careers', 'Partenrs'] }
];

const reLogo = '/img/re-sports.png';
const nasorg = '/img/nasorg-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container pb-4">
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
        
          <img src={reLogo} alt="RE Sports" className="footer__reLogo" />
        </nav>
      </div>

      <div className="footer__copyRightRibbon">
        <div className="container">
          <p className="footer__cr">
            <small>All rights reserved to Adidas mena 2019</small>
          </p>

          <p className="footer__powered">
            <small>Powered by <img src={nasorg} alt="Nasorg logo" className="footer__nasorgLogo"/></small>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
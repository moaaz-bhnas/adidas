import React, { memo, useState, useCallback, useRef } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Menu.scss';
import CategoriesSidebar from './CategoriesSidebar';

const secondaryList = ['Help', 'Track Order', 'Newsletter'];
const egyptFlag = '/img/egypt-flag.png';
const usFlag = '/img/us-flag.png';
const logo = '/img/logo.png';
const categories = ['New Arrivals', 'Men', 'Women', 'Kids', 'By Sports', 'Brands', '360'];
const cartEntriesNum = 7;

const Menu = (props) => {
  /* refs */
  const cartBtnRef = useRef();

  /* state */
  const [ sidebarVisible, setSidebarVisible ] = useState(false);
  const [ dropcartVisible, setDropcartVisible ] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState('');

  const openSidebar = useCallback(() => {
    setSidebarVisible(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarVisible(false);
  }, []);

  const toggleCart = useCallback(() => {
    setDropcartVisible(!dropcartVisible);
  }, [dropcartVisible]);

  const closeCart = useCallback(() => {
    setDropcartVisible(false);
  }, [])

  const updateSearchQuery = useCallback((event) => {
    setSearchQuery(event.target.value)
  }, []);

  const handleSearchSubmit = useCallback((event) => {
    event.preventDefault();
    props.history.push('./search');
  }, []);

  return (
    <header className="header App__header">
      <div className="container">
        <div className="d-flex">
          {/* Secondary navigation */}
          <nav className="servicesNav">
            <h2 className="sr-only">Services Navigation</h2>

            <ul className="list servicesNav__list">
              {
                secondaryList.map((link, index) => (
                  <li key={index}>
                    <a href="" className="servicesNav__link">{link}</a>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* login + languages list */}
          <div className="auth-languages">
            <a href="" className="header__loginLink">
              <i className="fas fa-user" aria-hidden="true" />
            </a>

            <ul className="list header__languagesList">
              <li>
                <button className="header__languageBtn" aria-label="Display page in English" data-active="true">
                  <img src={usFlag} alt="US flag"/>
                </button>
              </li>
              <li>
                <button className="header__languageBtn" aria-label="Display page in arabic">
                  <img src={egyptFlag} alt="Egypy flag"/>
                </button>
              </li>
            </ul>
          </div>
        </div> {/* flex container */}

        {/* Main bar */}
        <div className="header__mainBar">
          {/* toggler */}
          <button 
            className="btn header__sidebarToggler"
            aria-label="toggle categories sidebar"
            aria-expanded={sidebarVisible}
            aria-controls="categoriesSidebar"
            onClick={openSidebar}
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>
          {/* sidebar */}
          <CategoriesSidebar
            close={closeSidebar}
            categories={categories}
            visible={sidebarVisible}
          />
          {/* logo */}
          <Link to="/" className="header__logoLink">
            <img src={logo} alt="Adidas logo" className="header__logo"/>
          </Link>
          {/* desktop categories */}
          <nav className="header__categoriesNav">
            <h2 className="sr-only">Categories Navigation</h2>
            <ul className="list header__categoriesList">
              {
                categories.map((category, index) => (
                  <li key={index}>
                    <Link href="" className="header categoryLink">{category}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          {/* Page language */}
          <button className="btn">اللغة العربية</button>
          {/* search form */}
          <form 
            className="header__searchForm"
            onSubmit={handleSearchSubmit}
          >
            <div className="input-group">
              <button 
                type="submit"
                className="btn input-group-prepend p-0 bg-transparent"
                onClick={handleSearchSubmit}
              >
                <span className="input-group-text">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>
              </button>
              <input 
                id="header__searchInput"
                className="form-control px-2 header__searchInput" 
                type="search" 
                placeholder="Search" 
                aria-label="Search for a product" 
                value={searchQuery}
                onChange={updateSearchQuery}
              />
            </div>
          </form>
          {/* cart button */}
          <button 
            className="header__cartBtn" 
            aria-label="toggle cart dropdown"
            aria-haspopup="true"
            aria-expanded={dropcartVisible}
            // aria-controls={dropCartVisible ? 'dropCartContainer' : null}
            onClick={toggleCart}
            // onKeyDown={handleEscKeyOnCart}
            ref={cartBtnRef}
          >
            <i className="fas fa-shopping-cart" aria-hidden="true" />
            <span className="header__cartBadge">
              {cartEntriesNum}
            </span>
          </button>
        </div> {/* main bar */}
      </div> {/* container */}
    </header>
  );
}

export default withRouter(memo(Menu));
import React, { memo, useState, useCallback, useRef, useEffect } from 'react';
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
  /* state */
  const [ sidebarVisible, setSidebarVisible ] = useState(false);
  const [ dropcartVisible, setDropcartVisible ] = useState(false);
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ topBarState, setTopBarState ] = useState({hidden: false, prevScrollPos: window.pageYOffset})

  /* refs */
  const cartBtnRef        = useRef();
  const sidebarTogglerRef = useRef();
  const topBarRef         = useRef();

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

  const handleScroll = () => {
    const scrollPos = window.pageYOffset;
    const { prevScrollPos } = topBarState;
    const topBarHidden = prevScrollPos < scrollPos;

    setTopBarState({hidden: topBarHidden, prevScrollPos: scrollPos});
  };

  useEffect(function addScrollHandler() {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <header 
      className="header"
      style={{
        top: topBarState.hidden ? `-${topBarRef.current.clientHeight}px` : 0 
      }}
    >
      <div className="container">
        <div className="header__topBar" ref={topBarRef}>
          {/* Secondary navigation */}
          <nav className="servicesNav">
            <h2 className="sr-only">Services Navigation</h2>

            <ul className="list servicesNav__list">
              {
                secondaryList.map((link, index) => (
                  <li className="servicesNav__item" key={index}>
                    <a href="#" className="link_color_white servicesNav__link">{link}</a>
                  </li>
                ))
              }
            </ul>
          </nav>

          {/* login + languages list */}
          <div className="auth-languages">
            <a href="#" className="link_color_white header__loginLink">
              <i className="fas fa-user mr-1" aria-hidden="true" /> Log in
            </a>

            <ul className="list header__languagesList">
              <li>
                <button className="btn header__languageBtn" aria-label="Display page in English" data-active="true">
                  <div className="header__languageImgContainer">
                    <img className="img-fluid" src={usFlag} alt="US flag"/>
                  </div>
                </button>
              </li>
              <li>
                <button className="btn header__languageBtn active" aria-label="Display page in arabic">
                  <div className="header__languageImgContainer">
                    <img className="img-fluid" src={egyptFlag} alt="Egypy flag"/>
                  </div>
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
            ref={sidebarTogglerRef}
          >
            <i className="fas fa-bars" aria-hidden="true" />
          </button>
          {/* sidebar */}
          <CategoriesSidebar
            close={closeSidebar}
            categories={categories}
            visible={sidebarVisible}
            ref={sidebarTogglerRef}
          />
          {/* logo */}
          <Link to="/" className={`header__logoLink${topBarState.hidden ? '' : ' large'}`}>
            <img src={logo} alt="Adidas logo" className="header__logo"/>
          </Link>
          {/* desktop categories */}
          <nav className="header__categoriesNav">
            <h2 className="sr-only">Categories Navigation</h2>
            <ul className="list header__categoriesList">
              {
                categories.map((category, index) => (
                  <li key={index}>
                    <Link to="/category" className="link_color_white header__categoryLink">{category}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
          {/* Page language */}
          <span className="header__pageLanguage">اللغة العربية</span>
          {/* search form */}
          <form 
            className="header__searchForm"
            onSubmit={handleSearchSubmit}
          >
            <div className="input-group">
              <button 
                type="submit"
                className="btn header__searchBtn input-group-prepend p-0"
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
            <i className="fas fa-shopping-cart fa-lg" aria-hidden="true" />
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
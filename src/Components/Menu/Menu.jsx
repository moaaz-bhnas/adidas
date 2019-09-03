import React, { PureComponent, createRef } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Menu.scss';
import CategoriesSidebar from './CategoriesSidebar';
import egyptFlag from '../../img/egypt-flag.png';
import usFlag from '../../img/us-flag.png';
import logo from '../../img/logo.png';

const secondaryList = ['Help', 'Track Order', 'Newsletter'];
const categories = ['New Arrivals', 'Men', 'Women', 'Kids', 'By Sports', 'Brands', '360'];
const cart = {
  entries: [
    { id: 0 },
    { id: 1 }
  ]
}

class Menu extends PureComponent {
  state = {  
    sidebarVisible: false,
    dropcartVisible: false,
    topBarHidden: false,
    searchQuery: '',
    scrollPos: { prev: null, current: window.pageYOffset }
  }

  cartBtnRef        = createRef();
  sidebarTogglerRef = createRef();
  headerRef         = createRef();
  topBarRef         = createRef();

  openSidebar = () => {
    this.setState({ sidebarVisible: true });
  };

  closeSidebar = () => {
    this.setState({ sidebarVisible: false });
  };

  toggleCart = () => {
    this.setState((prevState) => ({
      dropcartVisible: !prevState.dropcartVisible 
    }));
  };

  updateSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('./search');
  };

  handleScroll = () => {
    const { topBarHidden, scrollPos } = this.state;
    const topBarHeight = this.topBarRef.current.clientHeight;
    const currentScrollPos = topBarHidden ? (window.pageYOffset + topBarHeight) : window.pageYOffset;
    this.setState({
      scrollPos: { prev: scrollPos.current, current: currentScrollPos }
    });
  };

  determineTopBarVisibility = () => {
    const { prev, current } = this.state.scrollPos;
    const down = (prev !== null) && current > prev;
    if (down !== this.state.topBarHidden) {
      // To stop "handleScroll" until the "topBarHidden" state gets updated  
      window.removeEventListener('scroll', this.handleScroll);
      this.setState(
        { topBarHidden: down },
        () => { window.addEventListener('scroll', this.handleScroll); }
      );
    } 
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.scrollPos.current !== this.state.scrollPos.current) {
      this.determineTopBarVisibility();
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    const { topBarHidden, sidebarVisible, searchQuery, dropcartVisible } = this.state;
    const headerHeight = this.headerRef.current && this.headerRef.current.clientHeight;
    const topBarHeight = this.topBarRef.current && this.topBarRef.current.clientHeight;

    return (
      <>
        <header 
          className="header"
          style={{
            top: topBarHidden ? `-${topBarHeight}px` : 0
          }}
          ref={this.headerRef}
        >
          <div className="container">
            <h1 className="sr-only">Adidas</h1>

            <div className="header__topBar" ref={this.topBarRef}>
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

              {/* login */}
              <a href="#" className="link_color_white header__loginLink">
                <i className="fas fa-user" aria-hidden="true" /> 
                <span className="header__loginLinkText">Log in</span>
              </a>
            </div>

            {/* Main bar */}
            <div className="header__mainBar">
              {/* toggler */}
              <button 
                className="btn header__sidebarToggler"
                aria-label="toggle categories sidebar"
                aria-expanded={sidebarVisible}
                aria-controls="categoriesSidebar"
                onClick={this.openSidebar}
                ref={this.sidebarTogglerRef}
              >
                <i className="fas fa-bars" aria-hidden="true" />
              </button>
              {/* sidebar */}
              <CategoriesSidebar
                close={this.closeSidebar}
                categories={categories}
                visible={sidebarVisible}
                ref={this.sidebarTogglerRef}
              />
              {/* logo */}
              <Link to="/" className={`header__logoLink${topBarHidden ? '' : ' large'}`}>
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
              {/* search form */}
              <form 
                className="header__searchForm"
                onSubmit={this.handleSearchSubmit}
              >
                <div className="input-group">
                  <button 
                    type="submit"
                    className="btn header__searchBtn input-group-prepend p-0"
                    onClick={this.handleSearchSubmit}
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
                    onChange={this.updateSearchQuery}
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
                onClick={this.toggleCart}
                // onKeyDown={handleEscKeyOnCart}
                ref={this.cartBtnRef}
              >
                <i className="fas fa-shopping-cart fa-lg" aria-hidden="true" />
                <span className="header__cartBadge">
                  {cart && cart.entries ? cart.entries.length : "0"}
                </span>
              </button>
            </div> {/* main bar */}
          </div> {/* container */}
        </header>
        <div 
          className="headerFiller"
          style={{
            height: this.headerRef.current ? 
                      topBarHidden ? `${headerHeight - topBarHeight}px` 
                                  : `${headerHeight}px`
                    : '5.5rem'
          }} 
        />
      </>
    );
  }
}

export default withRouter(Menu);
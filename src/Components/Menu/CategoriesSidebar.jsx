import React, { memo, useEffect, useRef, forwardRef } from 'react';
import { Link } from "react-router-dom";
import './CategoriesSidebar.scss';

const CategoriesSidebar = forwardRef((props, togglerRef) => {
  // props
  const { close, categories, visible } = props;

  // ref
  const closeBtnRef = useRef();

  useEffect(function preventBodyScrollAndFocusFirstInteractiveElement() {
    if (visible) {
      document.body.setAttribute('data-scroll', 'false');
      closeBtnRef.current.focus();
    } else {
      document.body.setAttribute('data-scroll', 'true');
      togglerRef.current.focus();
    }
  }, [visible]);

  return (
    <div id="categoriesSidebar" className="categoriesSidebar" aria-hidden={!visible}>
      {/* overlay */}
      <div 
        className="categoriesSidebar__overlay" 
        onClick={close}
        data-visible={visible}
      />
      
      {/* close button */}
      <button 
        className="btn categoriesSidebar__closeBtn"
        aria-label="Close sidebar"
        onClick={close}
        tabIndex={visible ? 0 : -1}
        ref={closeBtnRef}
      >
        <i className="fas fa-times fa-lg" aria-hidden="true"></i>
      </button>

      {/* categories list */}
      <nav className="categoriesSidebar__nav">
        <h2 className="sr-only">Categories navigation</h2>
        <ul className="list categoriesSidebar__list">
          {
            categories.map((category, index) => (
              <li key={index}>
                <Link 
                  to="/category" 
                  className="categoriesSidebar__link"
                  tabIndex={visible ? 0 : -1}
                >{category}</Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
});

export default memo(CategoriesSidebar);
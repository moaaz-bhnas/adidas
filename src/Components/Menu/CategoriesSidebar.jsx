import React, { memo, useEffect, useRef, forwardRef, useCallback } from 'react';
import { Link } from "react-router-dom";
import './CategoriesSidebar.scss';

var keys = {37: 1, 38: 1, 39: 1, 40: 1};

const preventDefault = (e) => {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}

const preventDefaultForScrollKeys = (e) => {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

const disableScroll = () => {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

const enableScroll = () => {
  if (window.removeEventListener)
      window.removeEventListener('DOMMouseScroll', preventDefault, false);
  document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
}

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const CategoriesSidebar = forwardRef((props, togglerRef) => {
  // props
  const { close, categories, visible } = props;

  // ref
  const closeBtnRef = useRef();
  const lastLinkRef = useRef();

  // Needs to be moved to a util level
  const trapFocus = useCallback((e, firstElement, lastElement, closeFunc) => {
    const esc = e.keyCode === 27;
    const tab = e.keyCode === 9;
    if (esc) { 
      closeFunc();
    } else if (tab && e.shiftKey && e.target === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (tab && !e.shiftKey && e.target === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }, []);

  const prevVisible = usePrevious(visible);
  useEffect(function preventBodyScrollAndFocusFirstInteractiveElement() {
    if (visible) {
      disableScroll();
      document.documentElement.setAttribute('data-scrollbar', 'false');
      closeBtnRef.current.focus();
    } else if (!visible && prevVisible) {
      enableScroll();
      document.documentElement.setAttribute('data-scrollbar', 'true');
      togglerRef.current.focus();
    }
  }, [visible]);

  return (
    <div 
      id="categoriesSidebar" 
      className="categoriesSidebar" 
      aria-hidden={!visible}
      onKeyDown={(e) => { trapFocus(e, closeBtnRef.current, lastLinkRef.current, close) }}
    >
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
                  innerRef={(index === categories.length-1) ? lastLinkRef : null}
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
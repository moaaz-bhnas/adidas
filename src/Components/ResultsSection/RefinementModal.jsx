import React, { useRef, useEffect, useCallback, forwardRef } from 'react'
import RefinementBlock from './RefinementBlock';
import './RefinementModal.scss';

const RefinementModal = forwardRef((props, togglerRef) => {
  const { closeModal } = props;
  const closeBtnRef = useRef();
  let lastOption;

  useEffect(function setLastOption() {
    const options = document.querySelectorAll('.refinement__optionBtn');
    lastOption = options[options.length-1];
  }, []);

  useEffect(function focusFirstWidget() {
    closeBtnRef.current.focus();

    return function focusToggler() {
      togglerRef.current.focus();
    }
  }, []);

  const _closeModal = useCallback((event) => {
    const clickIsOnOverlay = event.target.className === 'refinementModalBackground';

    if (clickIsOnOverlay) {
      closeModal();
    }
  }, []);

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

  return (
    <div 
      className="refinementModalBackground"
      onClick={_closeModal}
      onKeyDown={(e) => trapFocus(e, closeBtnRef.current, lastOption, closeModal)}
    >
      <div 
        id="refinementModal"
        className="refinementModal"
        role="dialog"
        aria-label="Refine your search"
      >
        <button 
          className="refinementModal__closeBtn"
          aria-label="close modal"
          ref={closeBtnRef}
          onClick={closeModal}
        >
          <i className="fas fa-times" aria-hidden="true" />
        </button>
        <RefinementBlock />
      </div>
    </div>
  );
})

export default RefinementModal;
import React from 'react'
import RefinementBlock from './RefinementBlock';
import './RefinementModal.scss';

const RefinementModal = (props) => {
  const { closeModal } = props;

  return (
    <div 
      className="refinementModalBackground"
      onClick={closeModal}
    >
      <div 
        id="refinementModal"
        className="refinementModal"
        role="dialog"
        aria-label="Refine your search"
      >
        <RefinementBlock />
      </div>
    </div>
  );
}

export default RefinementModal;
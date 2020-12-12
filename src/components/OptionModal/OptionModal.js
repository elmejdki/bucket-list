import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={props.selectedOption}
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    className='modal'
    contentLabel='display a random bucket from the list'
  >
    <h3 className="modal__title">Selected Option</h3>
    <p className="modal__body">{props.selectedOption}</p>
    <button
      className="button"
      onClick={props.handleCloseModal}
    >
      close
    </button>
  </Modal>
);

OptionModal.displayName = 'OptionModal';
Modal.displayName = 'Modal';


export default OptionModal;
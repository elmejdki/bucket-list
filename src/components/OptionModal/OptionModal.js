import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={props.selectedOption}
    onRequestClose={props.handleCloseModal}
    closeTimeoutMS={200}
    contentLabel='display a random bucket from the list'
  >
    <h3>Selected Option</h3>
    <p>{props.selectedOption}</p>
    <button onClick={props.handleCloseModal}>close</button>
  </Modal>
);

OptionModal.displayName = 'OptionModal';
Modal.displayName = 'Modal';


export default OptionModal;
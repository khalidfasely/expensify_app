import React from 'react';
import Modal from 'react-modal';

const RemoveModal = (props) => (
    <Modal
        isOpen={props.modalOpen}
        contentLabel="Selected Option"
        onRequestClose={props.handleClearRemoveModal}
        ariaHideApp={false}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Remove The Expense</h3>
        <button className="button--modal button--modal--y" onClick={props.onRemove}>Yes</button>
        <button className="button--modal button--modal--n" onClick={props.handleClearRemoveModal}>No</button>
    </Modal>
);

export default RemoveModal;
import React from "react"
import ReactDOM from "react-dom"

import "../assets/styles/Modal.css"
/**
 * Modal  component to show cover image in modal
 * Stateless
 */
const Modal = (props) => {
  if (!props.isOpen) {
    return null
  }
  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__container">
        <div className="Modal__close-container">
          <button
            onClick={props.onCloseModal}
            type="button"
            className="Modal__close"
          >
            <i className="far fa-window-close"></i>
          </button>
        </div>
        {props.children}
      </div>
    </div>,
    document.getElementById("modal")
  )
}

export default Modal

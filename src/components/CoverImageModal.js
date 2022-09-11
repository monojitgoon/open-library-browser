import React from "react"
import Modal from "./Modal"

import "../assets/styles/CoverImageModal.css"
/**
 * CoverImageModal- Stateless presentational component to show Large Sized Cover Image
 */
const config = require("../config/config.json")

const CoverImageModal = (props) => {
  const coverFetch = (cover_i) => `${config.COVER_IMAGE_API}${cover_i}-L.jpg`

  return (
    <Modal isOpen={props.isOpen} onCloseModal={props.onCloseModal}>
      <div className="CoverImage__container">
        <div className="Picture__container">
          {props.cover_i ? (
            <img src={coverFetch(props.cover_i)} alt="book cover"></img>
          ) : (
            <div className="Card-NoCover">
              <i className="fas fa-book-open"></i>
              <p>No cover available</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  )
}

export default CoverImageModal

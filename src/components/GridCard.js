import React from "react"

import "../assets/styles/GridCard.css"
import CoverImageModal from "./CoverImageModal"
import useModal from "../hooks/useModal"
const config = require("../config/config.json")

export default function GridCard(props) {
  /**
   * GridCard component recieve props as:
   *      -> booksData: books Array from open library API to show book most useful information and cover (if it has)
   * Stateful component with states: modalIsOpen
   * Logical component using custom hooks : useModal
   */
  const coverFetch = (cover_i) => `${config.COVER_IMAGE_API}${cover_i}-S.jpg`
  const [modalIsOpen, handleOpenCoverImageModal, handleCloseCoverImageModal] =
    useModal()

  return (
    <li className="GridCard__container">
      <div className="GridCard-info">
        <p className="GridCard-title">{props.bookData.title || "Unkown Title"}</p>
        <p className="GridCard-author">
          {props.bookData.author_name || "Author Unknown"}
        </p>
      </div>
      <div className="GridCard-cover">
        {props.bookData.cover_i ? (
          <img
            src={coverFetch(props.bookData.cover_i)}
            alt="book cover"
            onClick={handleOpenCoverImageModal}
          ></img>
        ) : (
          <div className="GridCard-NoCover">
            <i className="fas fa-book-open"></i>
            <p>No cover available</p>
          </div>
        )}
        <CoverImageModal
          onCloseModal={handleCloseCoverImageModal}
          isOpen={modalIsOpen}
          cover_i={props.bookData.cover_i}
        />
      </div>
    </li>
  )
}

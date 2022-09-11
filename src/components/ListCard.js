import React from "react"

import "../assets/styles/ListCard.css"
import CoverImageModal from "./CoverImageModal"
import useModal from "../hooks/useModal"
const config = require("../config/config.json")

export default function ListCard(props) {
  /**
   * ListCard component recieve props as:
   *      -> booksData: books Array from open library API to show book most useful information and cover (if it has)
   * Stateful component with states: modalIsOpen
   * Logical component using custom hooks : useModal
   */
  const coverFetch = (cover_i) => `${config.COVER_IMAGE_API}${cover_i}-S.jpg`
  const [modalIsOpen, handleOpenCoverImageModal, handleCloseCoverImageModal] =
    useModal()

  return (
    <li className="ListCard__container">
      <div className="ListCard-cover">
        {props.bookData.cover_i ? (
          <img
            src={coverFetch(props.bookData.cover_i)}
            alt="book cover"
            onClick={handleOpenCoverImageModal}
          ></img>
        ) : (
          <div className="ListCard-NoCover">
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
      <div className="ListCard-info">
        <p className="ListCard-title">
          {props.bookData.title || "Unkown Title"}
        </p>
        <p>{props.bookData.author_name || "Author Unknown"}</p>
        <p>{props.bookData.first_publish_year || "Unknown publication date"}</p>
        <p className="ListCard-isbn">
          {props.bookData.isbn ? props.bookData.isbn[0] : "ISBN unknown"}
        </p>
      </div>
    </li>
  )
}

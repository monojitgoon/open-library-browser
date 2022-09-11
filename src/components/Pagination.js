/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "../assets/styles/Pagination.css"

/**
 * Pagination component recieves:
 *      -> booksPerPage: count for book items per Page count
 *      -> totalBooks: 'per page record' selection change handler
 *      -> paginate: paginate action handler
 */

function Pagination({ booksPerPage, totalBooks, paginate }) {
  const pageNumbers = []

  //construct pageNumbers Array according to totalBooks / booksPerPage
  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="center">
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination

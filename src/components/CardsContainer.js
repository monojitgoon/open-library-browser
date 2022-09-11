import React from "react"
import useFetchBooks from "../hooks/useFetchBooks"
import usePagination from "../hooks/usePagination"
import useToggle from "../hooks/useToggle"

import Loader from "./Loader"
import GridCard from "./GridCard"
import ListCard from "./ListCard"

import ErrorImage from "../assets/images/ErrorImage.svg"
import NotFoundImage from "../assets/images/NotFoundImage.svg"
import "../assets/styles/CardsContainer.css"

import Pagination from "./Pagination"

export default function CardsContainer(props) {
  /**
   * CardsContainer component recieve props:
   *      -> query: users request to find in open library API
   * Stateful component with states: booksData - loading - fetchError
   * Logical component using custom hooks useFetchBooks
   */
  const { booksData, loading, fetchError } = useFetchBooks(props.query)
  const { isGridView, toggleToListView, toggleToGridView } = useToggle()

  const [currentBooks, booksPerPage, handleSelectChange, paginate] =
    usePagination(booksData)
  if (loading === true) {
    return (
      <section className="CardsContainer">
        <Loader />
      </section>
    )
  }
  if (fetchError !== null) {
    return (
      <section className="CardsContainer Alt_CardContainer">
        <div>
          <img src={ErrorImage} alt="error"></img>
        </div>
        <div>
          <h1 className="AltCard-title">Oops!</h1>
          <p>It seems like there was a problem, try again later</p>
        </div>
      </section>
    )
  }
  if (booksData.numFound === 0) {
    return (
      <section className="CardsContainer Alt_CardContainer">
        <div>
          <img src={NotFoundImage} alt="not found"></img>
        </div>
        <div>
          <h1 className="AltCard-title">No results for your search</h1>
          <p>try new terms and keywords</p>
        </div>
      </section>
    )
  }
  return (
    <section className="CardsContainer">
      <div className="selectionContainer">
        <button className="btn active" onClick={toggleToGridView}>
          <i className="fa fa-th-large"></i> Grid
        </button>
        <button className="btn" onClick={toggleToListView}>
          <i className="fa fa-bars"></i> List
        </button>
      </div>
      <select defaultValue={100} onChange={handleSelectChange}>
        <option value="10">Show 10</option>
        <option value="20">Show 20</option>
        <option value="50">Show 50</option>
        <option value="100">Show 100</option>
      </select>
      <ul className="CardsList">
        {currentBooks?.map((book) =>
          isGridView ? (
            <GridCard key={book.key} bookData={book} />
          ) : (
            <ListCard key={book.key} bookData={book} />
          )
        )}
      </ul>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={booksData && booksData.docs?.length}
        paginate={paginate}
      />
    </section>
  )
}

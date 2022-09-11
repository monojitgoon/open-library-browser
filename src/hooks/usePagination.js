import { useState } from "react"

  /**
   * Custom hook to use Pagination Compnent
   * Hooks used:
   *      -> useState
   * parameter:
   *      -> booksData: book data array from OpenLibrary API
   * returns:
   *      -> currentBooks: current Books that are to be shown in the UI
   *      -> booksPerPage: count for book items per Page count
   *      -> handleSelectChange: 'per page record' selection change handler 
   *      -> paginate: paginate action handler
   */


const usePagination = (booksData) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage, setbooksPerPage] = useState(100)

  const indexOfLastBook = currentPage * booksPerPage
  const indexOfFirstBook = indexOfLastBook - booksPerPage
  const currentBooks =
    booksData && booksData.docs?.slice(indexOfFirstBook, indexOfLastBook)
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const handleSelectChange = (e) => {
    setCurrentPage(1)
    setbooksPerPage(e.target.value)
  }
  return [currentBooks, booksPerPage, handleSelectChange, paginate]
}

export default usePagination

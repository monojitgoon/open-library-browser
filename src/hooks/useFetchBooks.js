import { useState, useEffect } from "react"
import openlibraryService from "../services/openlibraryService"

const useFetchBooks = (query) => {
  /**
   * Custom hook to fetch data of open library API
   * Hooks used:
   *      -> useState
   *      -> useEffect
   * returns:
   *      -> booksData: Array of books result of the request
   *      -> loading: Boolean value indicates charge status
   *      -> fetchError: Error value indicates if request failed
   */
  const [booksData, setBooksData] = useState([])
  const [loading, setLoading] = useState(false)
  const [fetchError, setFetchError] = useState(null)
  useEffect(() => {
    setLoading(true)
    openlibraryService.getSearchedBooks(query).then((data) => {
      if (!data) {
        setLoading(false)
      } else {
        setBooksData(data)
        setLoading(false)
      }
    }).catch(error => {
        setLoading(false);
        setFetchError(error);
       });
  }, [query])
  return { booksData, loading, fetchError }
}

export default useFetchBooks

import { checkStatus, buildQueryString } from "../utils/ApiUtils"
const config = require("../config/config.json")

/*
 *  openlibraryService: Fetch openlibrary API through following :
 *  http://openlibrary.org/search.json?title=<BOOK TITLE>
 *  Sends the response through -getSearchedBooks where parameter is title as - query
 *  Returns the array of books data through json object 
 */

class openlibraryService {
  async getSearchedBooks(query) {
    const searchTerm = query
      ? buildQueryString(query)
      : buildQueryString(config.DEFAULT_SEARCH_STRING)

    return await fetch(`${config.SEARCH_API}?title=${searchTerm}`, {
      method: "GET",
    })
      .then(checkStatus)
      .then((response) => response.json())
  }
}

export default new openlibraryService()

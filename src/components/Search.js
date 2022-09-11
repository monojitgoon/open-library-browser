import React from "react"

import "../assets/styles/Search.css"

/**
 * Search- Stateless presentational component to insert search text in the search bar
 */
const Search = (props) => {
  return (
    <div>
      <form className="SearchBar__container" onSubmit={props.onSubmit}>
        <div className="SearchBar-icon__container">
          <button type="submit" className="SearchBar-button">
            <i className="SearchBar-icon fas fa-search"></i>
          </button>
        </div>
        <input
          className="SearchBar-input"
          id="searchBar"
          placeholder="Search for book title"
          onChange={props.onChange}
          value={props.inputValue}
        ></input>
      </form>
    </div>
  )
}

export default Search

import React from "react"
import Search from "../components/Search"

import "../assets/styles/Header.css"

export default function Header(props) {
  /**
   * Header presentational component to receive the search request
   * Stateless
   */
  return (
    <header className="Header__container">
      <div className="Title__container">
        <h1 className="Title-1">Open Library&nbsp;</h1>
        <h1 className="Title-2">Browser</h1>
      </div>
      <Search
        onChange={props.onChange}
        inputValue={props.inputValue}
        onSubmit={props.onSubmit}
      />
    </header>
  )
}

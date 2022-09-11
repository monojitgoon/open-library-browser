import React from "react"
import "../assets/styles/Footer.css"

export default function Footer() {
  /**
   * Stateless presentational component to attribute copyright
   */
  return (
    <section className="Footer__container">
      <div className="Footer-item">
        <i className="Footer-item-icon fas fa-server"></i>
        <a
          className="Footer-item-text"
          href="https://openlibrary.org/dev/docs/api/books"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp; OpenLibrary Book API
        </a>
      </div>
      <div className="Footer-item">
        <i className="Footer-item-icon fas fa-info"></i>
        <a
          className="Footer-item-text"
          href="https://fontawesome.com/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp; Icons by Fontawesome
        </a>
      </div>
      <div className="Footer-item">
        <i className="Footer-item-icon fas fa-copyright"></i>
        <a
          className="Footer-item-text"
          href="https://github.com/monojitgoon"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp; Visit my github
        </a>
      </div>
    </section>
  )
}

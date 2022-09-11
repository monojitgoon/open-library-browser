import "../assets/styles/Loader.css"

export default function Loader() {
  /**
   * Stateless presentational component to improve UX while fetching data
   */
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

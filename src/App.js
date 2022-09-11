import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./assets/styles/App.css"
    /**
      * App component contains routes for two pages:
      * Home & NotFound
    */
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

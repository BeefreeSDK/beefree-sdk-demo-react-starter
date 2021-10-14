import React, { Component } from "react"
import ReactDOM from "react-dom"
import BeePage from "./containers/BeePage"

const App = () => {
  return (
    <div>
      <BeePage />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector(".container"))

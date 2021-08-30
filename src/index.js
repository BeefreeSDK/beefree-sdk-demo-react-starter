import React, { Component } from "react";
import ReactDOM from "react-dom";
import BeePage from "./components/bee_page";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <BeePage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

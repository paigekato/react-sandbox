import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">
            Adoptable Fur Babies
          </Link>
        </header>
        <Router>
          <Results path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    )
  }
}

// React.createElement creates instance of the class (using the stamp)
render(<App />, document.getElementById("root"));
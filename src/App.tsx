// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

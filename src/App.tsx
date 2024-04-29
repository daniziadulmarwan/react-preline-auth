// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

import { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Router from "./router";
import { AuthProvider } from "@/contexts/auth";

import "react-toastify/dist/ReactToastify.css";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Router />
          <ToastContainer theme="colored" />
        </AuthProvider>
      </BrowserRouter>
    );
  }
}

import React, { Component, Fragment } from "react";
import Sidebar from "../components/Navs/Sidebar";
import Navbar from "../components/Navs/Navbar";
import "../sass/App.scss";
export default class Lainnya extends Component {
  render() {
    return (
      <Fragment>
        <Sidebar />
        <Navbar />
        <p className="soon">Cooming Soon</p>
      </Fragment>
    );
  }
}

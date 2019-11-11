import React, { Component, Fragment } from "react";
import Navbar from "../components/Navs/Navbar";
import Sidebar from "../components/Navs/Sidebar";
import Info from "../components/Dashboard/Info";
import Dashboard from "../components/Dashboard/Dashboard";
import "../sass/App.scss";

export default class Home extends Component {
  state = {
    status: "awal-status",
    tampilan: "card",
    export: "hidden",
    value: ""
  };

  // toggle sidenav sebelah kanan pada mobile
  showInfo = () => {
    this.setState(state => {
      switch (state.status) {
        case "awal-status":
          console.log("show");
          return { status: "show-status" };
        case "show-status":
          console.log("hidden");
          return { status: "hidden-status" };
        default:
          console.log("default");
          return { status: "show-status" };
      }
    });
  };

  //control input pada modal
  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  // mengganti tampilan menjadi card
  tampilanCard = () => {
    this.setState({ tampilan: "card" });
  };

  // mengganti tampilan menjadi table
  tampilanTable = () => {
    this.setState({ tampilan: "table" });
  };
  // modal export
  exportModal = () => {
    this.setState({ export: "show" });
  };
  // close modal pada background transparant
  hiddenModal = () => {
    this.setState({ export: "hidden" });
  };

  render() {
    const { status } = this.state;
    return (
      <Fragment>
        <Sidebar />
        <Navbar style={status} show={this.showInfo} />
        <Info style={status} />
        <Dashboard
          tampilan={this.state.tampilan}
          tampilanCard={this.tampilanCard}
          tampilanTable={this.tampilanTable}
          hidden={this.hiddenModal}
          style={this.state.export}
          onClick={this.exportModal}
          value={this.state.value}
          handleChange={this.handleChange}
        />
      </Fragment>
    );
  }
}

import React, { Component, Fragment } from "react";
import Sidebar from "../components/Navs/Sidebar";
import Navbar from "../components/Navs/Navbar";
import Calendarjs from "../components/Even/Calendar";
import Event from "../components/Even/Event";
import "../sass/Event.scss";

export default class EventContainer extends Component {
  state = {
    status: "awal-status",
    date: new Date()
  };

  // toggle sidenav sebelah kanan pada mobile
  showStatus = () => {
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

  // menampilkan waktu dari moment js
  onChange = date => this.setState({ date });

  render() {
    const { status } = this.state;
    return (
      <Fragment>
        <Sidebar />
        <Navbar style={status} show={this.showStatus} />
        <Event />
        <Calendarjs
          onChange={this.onChange}
          date={this.state.date}
          status={this.state.status}
        />
      </Fragment>
    );
  }
}

import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo1.png";
import "../../sass/Sidebar.scss";
import Logo2 from "../../assets/Logo2.png";
import Logo3 from "../../assets/Logo3.png";
import Logo4 from "../../assets/Logo4.png";
import Logo5 from "../../assets/Logo5.png";
import Logo6 from "../../assets/Logo6.png";
import Logo7 from "../../assets/Logo7.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img className="logo" src={logo} alt="logo" />
      <div className="icon">
        <NavLink activeClassName="nav-aktif one" to="/empty">
          <img className="satu" src={Logo2} alt="" width="50" />
        </NavLink>
        <NavLink activeClassName="nav-aktif two" to="/member">
          <img className="dua" src={Logo3} alt="" width="50" />
        </NavLink>
        <NavLink activeClassName="nav-aktif three" to="/event">
          <img className="tiga" src={Logo4} alt="" width="55" />
        </NavLink>
        <NavLink activeClassName="nav-aktif four" to="/empty">
          <img className="empat" src={Logo5} alt="" width="50" />
        </NavLink>
        <NavLink activeClassName="nav-aktif five" to="/empty">
          <img className="lima" src={Logo6} alt="" width="50" />
        </NavLink>
        <NavLink activeClassName="nav-aktif six" to="/empty">
          <img className="enam" src={Logo7} alt="" width="50" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import PropTypes from "prop-types";
import avatar from "./../../assets/image1.jpeg";
import "../../sass/Navbar.scss";

const Navbar = ({ style, show }) => {
  return (
    <div className="header">
      <div className="find">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Find a user, team, meeeting..." />
      </div>
      <div className="user">
        <div id="modal" className="modal">
          <div id="bgModal" className="bgModal">
            <p
              onClick={() => {
                const modal = document.getElementById("modal");
                const bgModal = document.getElementById("bgModal");
                modal.style.display = "none";
                bgModal.style.display = "none";
              }}
            >
              Invited Success!
            </p>
          </div>
        </div>
        <span
          className="tombol"
          href="#"
          onClick={() => {
            const modal = document.getElementById("modal");
            const bgModal = document.getElementById("bgModal");
            modal.style.display = "block";
            bgModal.style.display = "block";
          }}
        >
          <i className="far fa-paper-plane mr-2"></i> Invite
        </span>

        <img className="avatar" src={avatar} alt="user" />
        {style === "show-status" ? (
          <i onClick={show} className="fas fa-times toogle"></i>
        ) : (
          <i onClick={show} className="fas fa-ellipsis-v toogle"></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  show: PropTypes.func,
  style: PropTypes.string
};

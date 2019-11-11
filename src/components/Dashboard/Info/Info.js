import React from "react";
import PropTypes from "prop-types";

export default function Info(props) {
  const { style, jam, pesan } = props.data;
  return (
    <div>
      <div className="pesan">
        <hr className={style === "aktif" ? "aktif-hr" : ""} />
        <h5>{jam}</h5>
        <p className={style === "coret" ? "coret" : ""}>{pesan}</p>
        {style === "aktif" && (
          <div className="aktif">
            <span className="notif">.</span>
            <span className="accept">
              <i className="far fa-check-square"></i> Accept
            </span>
            <a href="/event" target="blank" className="view">
              View Event
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

Info.propTypes = {
  data: PropTypes.object
};

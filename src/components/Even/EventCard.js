import React from "react";
import PropTypes from "prop-types";
import ige from "../../assets/Event.png";

export default function EventCard(props) {
  const { judul, hari, jam, alamat, jumlah, jenis, image } = props.event;
  return (
    <div>
      <div className="list-event box effect2">
        <img src={ige} alt="" width="75" height="75" />
        <img src={image} alt="" />
        <div className="text1">
          <h4>
            {judul}
            <p>{hari}</p>
            <p>{jam}</p>
          </h4>
        </div>
        <div className="text2">
          <p>{alamat}</p>
        </div>
        <div className="text3">
          <p>
            {jumlah} <span>{jenis}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

EventCard.propTypes = {
  event: PropTypes.object
};

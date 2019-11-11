import React from "react";
import PropTypes from "prop-types";

export default function CardTop(props) {
  const { judul, style, tanggal } = props.data;
  return (
    <div>
      <div className="isi-card-atas">
        <span className="titik">...</span>
        <p>{judul}</p>
        <p className="card-tanggal">
          <span className={style}>{tanggal}</span>
          This month
        </p>
      </div>
    </div>
  );
}

CardTop.propTypes = {
  data: PropTypes.object
};

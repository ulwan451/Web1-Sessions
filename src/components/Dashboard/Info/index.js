import React from "react";
import PropTypes from "prop-types";
import lonceng from "../../../assets/lonceng.png";
import Info from "./Info";
import "../../../sass/Info.scss";
import data from "../../../data/data.json";
import moment from "moment";

const Right = ({ style }) => {
  return (
    <div className={`status ${style}`}>
      <div className="datastatus">
        <div className="tanggal">
          <div className="notifikasi">
            <img className="lonceng" src={lonceng} alt="lonceng" width="50" />
            <span>
              <p>3</p>
            </span>
          </div>
          <div className="cuaca">
            <h3>Forecast</h3>
            <p>{moment().format("D MMMM")}</p>
          </div>
        </div>
        {data.DataPesan.map((user, index) => (
          <Info key={index} data={user} />
        ))}
      </div>
    </div>
  );
};
export default Right;

Right.propTypes = {
  style: PropTypes.string
};

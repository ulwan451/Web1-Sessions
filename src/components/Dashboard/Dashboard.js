import React from "react";
import PropTypes from "prop-types";
import CardTop from "./CardTop";
import CardUser from "./CardUser";
import ButtonExport from "./ButtonExport";
import data from "../../data/data";
import "../../sass/Dashboard.scss";

const Dashboard = ({
  hidden,
  style,
  onClick,
  tampilan,
  tampilanCard,
  tampilanTable,
  value,
  handleChange
}) => {
  return (
    <div className="session">
      <ButtonExport
        value={value}
        handleChange={handleChange}
        hidden={hidden}
        style={style}
      />
      <div className="judul">
        <div className="judul-session">
          <h1>Sessions</h1>
          <span className="tombol" onClick={onClick} href="#">
            <i className="fas fa-arrow-down" style={{ marginRight: "7px" }}></i>
            Export
          </span>
        </div>
        <div className="card-table">
          <span
            className={tampilan === "card" ? "pilih" : ""}
            onClick={tampilanCard}
            href="#"
          >
            <i className="fas fa-border-all" style={{ marginRight: "7px" }}></i>
            Cards
          </span>
          <span
            className={tampilan === "table" ? "pilih" : ""}
            onClick={tampilanTable}
            href="#"
          >
            <i className="far fa-map" style={{ marginRight: "7px" }}></i>
            Table
          </span>
        </div>
      </div>

      <div className="card-atas">
        <CardTop
          data={{ style: "biru", judul: "Number of sessions", tanggal: "23" }}
        />
        <CardTop
          data={{
            style: "orange",
            judul: "Users who haven't answered",
            tanggal: "06"
          }}
        />
      </div>

      <div className="tanggal-hari">
        <p>
          <span className="tanggal">14</span>
          <span className="th">th </span>Tuesday
        </p>
        <hr />
      </div>
      <div className={tampilan}>
        {data.DataCard.map((user, index) => (
          <CardUser key={index} user={user} />
        ))}
      </div>
      <div className={tampilan}>
        {data.DataCard.map((user, index) => (
          <CardUser key={index} user={user} />
        ))}
      </div>
      <div className={tampilan}>
        {data.DataCard.map((user, index) => (
          <CardUser key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  hidden: PropTypes.func,
  style: PropTypes.string,
  onClick: PropTypes.func,
  tampilan: PropTypes.string,
  tampilanCard: PropTypes.func,
  tampilanTable: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func
};

export default Dashboard;

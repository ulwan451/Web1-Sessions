import React from "react";
import PropTypes from "prop-types";
import Calendar from "react-calendar";
import calendar from "../../assets/Calender.png";
import moment from "moment";

const Calendarjs = ({ status, onChange, date }) => {
  return (
    <div className="cld">
      <div className={`status ${status}`}>
        <div className="isi-calendar">
          <img src={calendar} alt="calendar" width="50" />
          <div className="bulan">
            <h3>Calendar</h3>
            <p>{moment().format("D MMMM")}</p>
          </div>
          <Calendar onChange={onChange} value={date} />
        </div>
      </div>
    </div>
  );
};

Calendarjs.propTypes = {
  status: PropTypes.string,
  onChange: PropTypes.func,
  date: PropTypes.object
};
export default Calendarjs;

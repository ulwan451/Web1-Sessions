import React from "react";
import EventCard from "./EventCard";
import data from "../../data/data.json";

const Event = () => {
  return (
    <div>
      <div className="event">
        <div className="judul">
          <h1>Event</h1>
          <span className="create">
            <i className="fas fa-plus"></i>
            Create new
          </span>
        </div>
        <div className="list">
          {data.DataEvent.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;

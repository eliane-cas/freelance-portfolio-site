import React from "react";

const TimelineItem = ({ title, description, isEven }) => {
  return (
    <div
      className={`timeline-item ${
        isEven ? "timeline-item--even" : "timeline-item--odd"
      }`}
    >
      <div className="timeline-item__marker"></div>
      <div className="timeline-item__content">
        <h3 className="timeline-item__title">{title}</h3>

        <p className="timeline-item__description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

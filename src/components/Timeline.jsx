import React from "react";
import timelineData from "./TimelineData";
import TimelineItem from "./TimelineItem";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="timeline_container">
      <div className="timeline">
        <div className="timeline__inner">
          <div className="timeline__line"></div>
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.id}
              title={item.title}
              description={item.description}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

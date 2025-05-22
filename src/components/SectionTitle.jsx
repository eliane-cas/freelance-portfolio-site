import React from "react";
import "./SectionTitle.scss";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;

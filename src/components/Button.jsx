import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ text, link, style = "default_btn" }) => {
  return (
    <Link to={link}>
      <button className={style}>{text}</button>{" "}
    </Link>
  );
};

export default Button;

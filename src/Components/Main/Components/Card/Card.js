import React from "react";
// import { NavLink } from "react-router-dom";
import "./Card.css";
import { VscTriangleUp } from "react-icons/vsc";

function Card(props) {
  return (
    <div className="box">
      <span className="subtext">{props.subtext ? props.subtext : null}</span>
      <span className="title">{props.title ? props.title : null}</span>
      {props.link ? (
        <a href="/settings" style={{ color: "blue", textDecoration: "none" }}>
          {props.link ? "View" : null}
        </a>
      ) : null}
      {props.data ? (
        <div className="data">
          <span className="icon">
            <VscTriangleUp />
          </span>
          <span className="dataText">+7.5</span>
        </div>
      ) : null}
    </div>
  );
}

export default Card;

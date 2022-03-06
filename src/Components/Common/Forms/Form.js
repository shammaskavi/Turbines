import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "../Buttons/Buttons";
import "../Forms/Form.css";
// import Login from "../Login/Login";

export default function BasicTextFields({ title }) {
  return (
    <div className="main-container">
      <div className="left-section">{title}</div>
      <div className="right-section"></div>
    </div>
  );
}

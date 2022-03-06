import { Box, TextField } from "@mui/material";
import * as React from "react";
import "./Signup.css";
import Button from "../Buttons/Buttons";

export default function Signup({ handleAction }) {
  return (
    <div className="main-container">
      <div className="left-section">Illustration here</div>
      <div className="right-section">
        <Box
          className="form-container"
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="email"
            label="Your fullname"
            variant="outlined"
            // onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="email"
            label="Email address"
            variant="outlined"
            // onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            id="password"
            label="Create Password"
            variant="outlined"
            // onChange={(e) => setPassword(e.target.value)}
          />

          <Button text={"Signup"} handleAction={handleAction} />
        </Box>
      </div>
    </div>
  );
}

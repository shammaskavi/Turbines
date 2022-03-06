import * as React from "react";
import Button from "@mui/material/Button";

export default function BasicButtons({ text, handleAction }) {
  return (
    <Button variant="contained" onClick={handleAction}>
      {text}
    </Button>
  );
}

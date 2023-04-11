import React from "react";
import { Button } from "@mui/material";

const Buttons = ({ text }) => {
  return (
    <Button
      className={`text-neutral-50 bg-blue-500 hover:text-blue-500 py-4 px-8`}
    >
      {text}
    </Button>
  );
};

export default Buttons;

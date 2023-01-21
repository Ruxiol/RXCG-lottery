import React from "react";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <footer className="mt-20">
        <Typography
          variant="subtitle2"
          sx={{ color: "secondary.main", textAlign: "center" }}
        >
          © {new Date()?.getFullYear()} RXC Games Raffle developed by Rux, ToniDev and rest of community!
        </Typography>
      </footer>
      ;
    </>
  );
};

export default Footer;

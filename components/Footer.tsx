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
          © {new Date()?.getFullYear()} RXCG Crypto Lottery developed by RXC Games team
        </Typography>
      </footer>
      ;
    </>
  );
};

export default Footer;

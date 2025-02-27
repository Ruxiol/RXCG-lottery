import React from "react";
import Image from "next/image";
import { Container, Stack, Typography } from "@mui/material";
import { PropagateLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ mb: "40px" }}
        >
          <Image
            src="https://crypto.ba/uploads/default/original/2X/e/eaa6b0bdd015f75c8dbb53f9e5f23facdf4e7c1a.svg"
            height={300}
            width={300}
          />
        </Stack>
        <PropagateLoader color="white" size={20} />
      </Container>
    </>
  );
};

export default Loader;

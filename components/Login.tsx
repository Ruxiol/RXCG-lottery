import React from "react";
import Image from "next/image";
import { useMetamask } from "@thirdweb-dev/react";
import { Button, Container, Stack, Typography } from "@mui/material";
import Head from "next/head";

const Login = () => {
  const connectWithMetamask = useMetamask();
  return (
    <>
     <Head>
        <title>RXC Games Raffle</title>
      </Head>
      <Container
        maxWidth={false}
        sx={{
          minHeight: "100vh",
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Stack alignItems="center">
          <Image
            src="https://crypto.ba/uploads/default/original/2X/e/eaa6b0bdd015f75c8dbb53f9e5f23facdf4e7c1a.svg"
            height={224}
            width={224}
          />
          <Typography
            variant="h3"
            sx={{
              color: "secondary.contrastText",
              fontWeight: "bold",
              mt: "24px",
              mb: "10px",
            }}
          >
            Blockchain Raffle
          </Typography>
          <Typography
            variant="body2"
            gutterBottom
            sx={{ color: "secondary.contrastText" }}
          >
            Get Started by Logging in with your Metamask.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "secondary.contrastText",
              "&:hover": {
                backgroundColor: "secondary.contrastText",
              },
              color: "primary.contrastText",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "16px",
              mt: "20px",
            }}
            onClick={connectWithMetamask}
          >
            Login.
          </Button>
        </Stack>
      </Container>
    </>
  );
};

export default Login;

import React from "react";
import { Grid } from "@material-ui/core";
import LoginBox from "./LoginBox";

const Login = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid container justifyContent="center" xs={12} md={5}>
        <LoginBox />
      </Grid>
    </Grid>
  );
};

export default Login;

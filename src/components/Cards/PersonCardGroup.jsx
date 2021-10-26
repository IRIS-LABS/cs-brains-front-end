import React from "react";
import PersonCard from "./PersonCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 8,
  },
});

const PersonCardGroup = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.root}
        container
        xs={12}
        md={10}
        justifyContent="center"
        spacing={2}
      >
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
        <Grid justifyContent="center" item xs={12} sm={6} md={4} lg={3} xl={2}>
          <PersonCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default PersonCardGroup;

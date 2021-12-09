import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: theme.palette.primary.light,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Copyright (C) 2021 csbrains.com
          </Typography>
          <Button onClick={() => history.push("/")} color="inherit">
            Home
          </Button>
          <Button onClick={() => history.push("/cards")} color="inherit">
            Cards
          </Button>
          <Button onClick={() => history.push("/signup")} color="inherit">
            Sign Up
          </Button>
          <Button onClick={() => history.push("/signin")} color="inherit">
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;

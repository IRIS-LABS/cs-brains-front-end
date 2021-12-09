import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CardHeader,
  CardActions,
  CardContent,
  Card,
  Button,
  Typography,
  Avatar,
  colors,
} from "@material-ui/core";
import AssignmentIcon from "@material-ui/icons/Assignment";
import EditIcon from "@material-ui/icons/Edit";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 225,
    borderRadius: 15,
    padding: 10,
  },
  cardHeader: {
    "& .MuiCardHeader-content": {
      display: "none",
    },
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none"
  },
  title: {
    fontWeight: "bold",
  },
  button: {
    marginLeft: 8,
  },
  buttonIcon: {
    color: colors.grey[900],
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  },
}));

const MyCard = ({ heading, subHeading, url, id }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar} src={url} />}
        className={classes.cardHeader}
      />
      <CardContent>
        <Typography
          className={classes.title}
          variant="h5"
          align="center"
          component="h2"
        >
          {heading}
        </Typography>
        <Typography variant="h5" align="center" component="h2">
          {subHeading}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
          <Button
            color="primary"
            className={classes.button}
            startIcon={<AssignmentIcon className={classes.buttonIcon} />}
          >
            <Link to = 'cards' className = {classes.link}>
                Card List
            </Link>
          </Button>
        <Button
          color="primary"
          className={classes.button}
          startIcon={<EditIcon className={classes.buttonIcon} />}
        >
          <Link to = 'editProfile' className = {classes.link}>
            Edit
          </Link>
          
        </Button>
        <Button
          color="primary"
          className={classes.button}
          startIcon={<LockIcon className={classes.buttonIcon} />}
        >
          <Link to = 'signin' className = {classes.link}>
            Sign Out
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default MyCard;

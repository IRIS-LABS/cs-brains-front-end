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
} from "@material-ui/core";
import PublicIcon from "@material-ui/icons/Public";

const useStyles = makeStyles({
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
  title: {
    fontWeight: "bold",
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
});

const PersonCard = ({ connected = false }) => {
  const classes = useStyles();

  const handleConnect = () => {
    console.log("Connected");
  };

  const handleUnfollow = () => {
    console.log("Unfollowed");
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            src={"https://picsum.photos/400/400?random=1"}
          />
        }
        className={classes.cardHeader}
      />
      <CardContent>
        <Typography
          className={classes.title}
          variant="h5"
          align="center"
          component="h2"
        >
          Emma Kaya Matte
        </Typography>
        <Typography variant="h5" align="center" component="h2">
          CEO & Founder of InceTec
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {connected ? (
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={handleUnfollow}
          >
            Unfollow
          </Button>
        ) : (
          <Button
            size="large"
            color="primary"
            variant="contained"
            startIcon={<PublicIcon fontSize="small" />}
            onClick={handleConnect}
          >
            Connect
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default PersonCard;

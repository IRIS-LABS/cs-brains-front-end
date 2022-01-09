import React, { useContext, useState } from "react";
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
import { AlertContext } from "../../Routes";
import api from "../../helpers/api";
import LocalButton from "../common/LocalButton";

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

const PersonCard = ({
  connected = false,
  heading,
  subHeading,
  url,
  id,
  removeCardFromCardList,
}) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const { setAlertMsg, setAlertType, setAlertOpen } = useContext(AlertContext);

  const handleConnect = (id) => {
    setLoading(true);
    api.connection.addConnection(id).then((res) => {
      if (res.type === "success") {
        setAlertMsg(res.msg);
        setAlertType("success");
        setAlertOpen(true);
        removeCardFromCardList(id);
      } else {
        setAlertMsg(res.msg);
        setAlertType("error");
        setAlertOpen(true);
      }
      setLoading(false);
    });
  };

  const handleUnfollow = (id) => {
    console.log("Unfollowed", id);
  };

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
        {connected ? (
          <Button
            size="large"
            color="primary"
            variant="contained"
            onClick={() => handleUnfollow(id)}
          >
            Unfollow
          </Button>
        ) : (
          <LocalButton
            size="large"
            color="primary"
            variant="contained"
            startIcon={<PublicIcon fontSize="small" />}
            onClick={() => handleConnect(id)}
            loading={loading}
          >
            Connect
          </LocalButton>
        )}
      </CardActions>
    </Card>
  );
};

export default PersonCard;

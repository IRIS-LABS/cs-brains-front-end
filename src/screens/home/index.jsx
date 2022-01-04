import React, { useEffect, useState, useContext } from "react";
import MyCard from "../../components/Cards/MyCard";
import { Grid, makeStyles } from "@material-ui/core";
import PersonCardGroup from "../../components/Cards/PersonCardGroup";
import { getUser } from "../../auth";
import api from "../../helpers/api";
import { AlertContext } from "../../Routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },
  myCardRoot: {
    marginTop: 8,
  },
}));

const Home = () => {
  const classes = useStyles();
  const [user, setUser] = useState(getUser().user);

  // const [cardList, setCardList] = useState([]);
  const { setAlertMsg, setAlertType, setAlertOpen } = useContext(AlertContext);
  const cardList = [
    {
      id: 1,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 2,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 3,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 4,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 5,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 6,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 7,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 8,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 9,
      connected: false,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      connected: false,
      id: 10,

      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
  ];

  // useEffect(() => {
  //   async function getConnections() {
  //     const response = await api.connection.getConnections();
  //     if (response.type === 'error') {
  //       setAlertMsg(response.msg);
  //       setAlertType("error");
  //       setAlertOpen(true);
  //     } else {
  //       const connections = response.data;
  //       const newCardList = connections.map(c => { return { ...c.User, id: c.User.userID, connected: true, heading: `${c.User.firstName} ${c.User.lastName}`, subHeading: c.User.jobTitle ? c.User.jobTitle : "", url: "https://picsum.photos/400/400?random=1" } })
  //       setCardList(newCardList);
  //     }
  //   };
  //   getConnections();

  // }, []);

  return (
    <Grid container className={classes.root}>
      <Grid item lg="3" className={classes.myCardRoot}>
        <MyCard
          heading={`${user.firstName} ${user.lastName}`}
          subHeading="CEO & Founder of InceTec"
        />
      </Grid>
      <Grid item lg="9">
        <PersonCardGroup cardList={cardList} expandAll />
      </Grid>
    </Grid>
  );
};

export default Home;

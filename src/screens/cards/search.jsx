import React from "react";
import MyCard from "../../components/Cards/MyCard";
import { Grid, makeStyles } from "@material-ui/core";
import PersonCardGroup from "../../components/Cards/PersonCardGroup";

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

const Search = () => {
  const classes = useStyles();
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

  return (
    <Grid container className={classes.root}>
      <Grid item lg="3" className={classes.myCardRoot}>
        <MyCard
          heading="Emma Kaya Matte"
          subHeading="CEO & Founder of InceTec"
        />
      </Grid>
      <Grid item lg="9">
        <PersonCardGroup cardList={cardList} expandAll />
      </Grid>
    </Grid>
  );
};

export default Search;

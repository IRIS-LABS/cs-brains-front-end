import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PersonCardGroup from "../../components/Cards/PersonCardGroup";
import Search from "../../components/common/Search";

const useStyles = makeStyles((theme) => ({
  header: { padding: theme.spacing(5) },
  searchBox: {
    padding: theme.spacing(5),
    paddingTop: "0",
  },
  seeMoreBtn: {
    padding: theme.spacing(3),
  },
}));

const Cards = () => {
  const classes = useStyles();
  const cardList = [
    {
      id: 1,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 2,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 3,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 4,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 5,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 6,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 7,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 8,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 9,
      connected: true,
      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      connected: true,
      id: 10,

      heading: "Emma Kaya Matte",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
  ];

  return (
    <>
      <Grid container justifyContent="center" className={classes.header}>
        <Typography variant="h5">Card List</Typography>
      </Grid>
      <Grid container justifyContent="center" className={classes.searchBox}>
        <Search />
      </Grid>
      <PersonCardGroup cardList={cardList} />
      <Grid container justifyContent="center" className={classes.seeMoreBtn}>
        <Link component="button" variant="body1">
          See More
        </Link>
      </Grid>
    </>
  );
};

export default Cards;

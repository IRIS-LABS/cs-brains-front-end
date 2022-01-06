import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import PersonCardGroup from "../../components/Cards/PersonCardGroup";
import Search from "../../components/common/Search";
import Pagination from "@material-ui/lab/Pagination";

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
  const itemCount = 4;
  const [currentPage, setCurrentPage] = useState(1);
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
      heading: "Amma Rayn",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 3,
      connected: true,
      heading: "Raveenu Thum",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 4,
      connected: true,
      heading: "Rumz Deel",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 5,
      connected: true,
      heading: "Olive Reem",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 6,
      connected: true,
      heading: "Ueery Quuie",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 7,
      connected: true,
      heading: "Three Yum",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 8,
      connected: true,
      heading: "Navin Opiku",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 9,
      connected: true,
      heading: "Kamal Fernando",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
    {
      connected: true,
      id: 10,
      heading: "Yuwer Viewer",
      subHeading: "CEO & Founder of InceTec",
      url: "https://picsum.photos/400/400?random=1",
    },
  ];
  const [filteredCardList, setFilteredCardList] = useState(cardList);

  return (
    <>
      <Grid container justifyContent="center" className={classes.header}>
        <Typography variant="h5">Card List</Typography>
      </Grid>
      <Grid container justifyContent="center" className={classes.searchBox}>
        <Search
          originalList={cardList}
          setFilteredList={setFilteredCardList}
          searchField={"heading"}
        />
      </Grid>
      <PersonCardGroup
        cardList={filteredCardList.slice(
          itemCount * (currentPage - 1),
          itemCount * currentPage
        )}
      />
      <Grid container justifyContent="center" className={classes.seeMoreBtn}>
        <Pagination
          color="primary"
          count={Math.ceil(filteredCardList.length / itemCount)}
          shape="rounded"
          size="large"
          showFirstButton
          showLastButton
          onChange={(e, pageNumber) => {
            setCurrentPage(pageNumber);
          }}
        />
      </Grid>
    </>
  );
};

export default Cards;

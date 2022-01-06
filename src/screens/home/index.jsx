import React, { useEffect, useState, useContext } from "react";
import MyCard from "../../components/Cards/MyCard";
import { Grid, makeStyles } from "@material-ui/core";
import PersonCardGroup from "../../components/Cards/PersonCardGroup";
import { getUser } from "../../auth";
import api from "../../helpers/api";
import { AlertContext } from "../../Routes";
import Search from "../../components/common/Search";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  subRoot: {
    display: "flex",
    justifyContent: "center",
    padding: 10,
  },
  myCardRoot: {
    marginTop: 8,
  },
  searchBox: {
    marginTop: 15,
  },
  seeMoreBtn: {
    padding: theme.spacing(3),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [user, setUser] = useState(getUser().user);
  const itemCount = 20;
  const [currentPage, setCurrentPage] = useState(1);

  // const [cardList, setCardList] = useState([]);
  const { setAlertMsg, setAlertType, setAlertOpen } = useContext(AlertContext);
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
      <Grid container justifyContent="center" className={classes.searchBox}>
        <Search
          originalList={cardList}
          setFilteredList={setFilteredCardList}
          searchField={"heading"}
        />
      </Grid>
      <Grid container className={classes.subRoot}>
        <Grid item lg="3" className={classes.myCardRoot}>
          <MyCard
            heading={`${user.firstName} ${user.lastName}`}
            subHeading="CEO & Founder of InceTec"
          />
        </Grid>
        <Grid item lg="9">
          <PersonCardGroup
            cardList={filteredCardList.slice(
              itemCount * (currentPage - 1),
              itemCount * currentPage
            )}
            expandAll
          />
        </Grid>
      </Grid>
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
    </Grid>
  );
};

export default Home;

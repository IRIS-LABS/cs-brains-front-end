import React from "react";
import PersonCard from "./PersonCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NoData from "../../assets/no-data.svg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    padding: 5,
  },
});

const PersonCardGroup = ({ cardList, expandAll }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        className={classes.root}
        container
        item
        xs={12}
        md={!expandAll ? 10 : 12}
        justifyContent="center"
        spacing={1}
      >
        {cardList.length === 0 ? (
          <img src={NoData} />
        ) : (
          cardList.map((e) => (
            <Grid
              container
              key={e.id}
              justifyContent="center"
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
            >
              <PersonCard
                connected={e.connected}
                id={e.id}
                heading={e.heading}
                subHeading={e.subHeading}
                url={e.url}
              />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default PersonCardGroup;

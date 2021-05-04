import Box from "@material-ui/core/Box";
import NominatedMovieCard from "./NominatedMovieCard";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  resultEntry: {
    alignItems: "flex-start",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.black,
    // maxHeight: "50vh",
    height: 100,
    overflow: "auto",
  },
  removeNominationButton: {
    color: "red",
  },
  grid: {
    alignItems: "stretch"
  },
}));

const NominatedMovies = (props) => {
  const classes = useStyles();

  return (
    <>
      <>
        {props.movies.map((movie, index) => {
          return (
            <Grid item xs={12}>
              <NominatedMovieCard
                movie={movie}
                onRemoveNominationClicked={props.onRemoveNominationClicked}
              />
            </Grid>
          );
        })}
      </>
    </>
  );
};

export default NominatedMovies;

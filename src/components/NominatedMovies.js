import NominatedMovieCard from "./NominatedMovieCard";
import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
  Button,
} from "@material-ui/core";

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
  const maxNominations = 5;


  const movieDataFormat = {
    Poster: "",
    Title: "",
    Type: "",
    Year: "",
    disableNominate: false,
    imdbID: "",
  }

  useEffect(() => {

  }, [props.movies])


  return (
    <>
      <>
        <Grid item container xs={12}
          alignItems="center"
          justify="space-around">
          <Grid item>
            <Typography variant="h6">
              Nominations
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {props.movies.length}/{maxNominations}
            </Typography>
          </Grid>
        </Grid>
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
        {
          Array(maxNominations - props.movies.length).fill(movieDataFormat).map((movie, index) => {
            return (
              <Grid item xs={12}>
                <NominatedMovieCard
                  movie={movie}
                  showSkeleton={true}
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

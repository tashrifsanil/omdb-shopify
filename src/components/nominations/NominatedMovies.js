import NominatedMovieCard from "./NominatedMovieCard";
import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Typography,
} from "@material-ui/core";
import NominationPlaceholder from "./NominationPlaceholder";

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
  typography: {
    fontSize: "1.2rem",
  }
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
      {props.landing ? null : (
        <Grid
          container
          spacing={1}
          alignItems="stretch"
          style={{ maxHeight: '95%' }}>

          <Grid item container xs={12}
            alignItems="flex-start"
            justify="flex-end"
            spacing={2}
            >
            <Grid item>
            <Typography variant="h6">
                NOMINATED
              </Typography>
            </Grid>
            <Grid item>
            <Typography variant="h3">
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
                  <NominationPlaceholder />
                </Grid>
              );
            })}
        </Grid>
      )}
    </>
  );
};

export default NominatedMovies;

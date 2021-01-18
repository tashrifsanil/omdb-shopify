import Box from "@material-ui/core/Box";
import NominatedMovieCard from "./NominatedMovieCard";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  resultEntry: {
    alignItems: "flex-start",
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.black,
    maxHeight: "100%",
    overflow: "auto",
  },
  removeNominationButton: {
    color: "red",
  },
}));

const NominatedMovies = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box>
        {props.movies.map((movie, index) => {
          return (
            <NominatedMovieCard
              movie={movie}
              onRemoveNominationClicked={props.onRemoveNominationClicked}
            ></NominatedMovieCard>
          );
        })}
      </Box>
    </>
  );
};

export default NominatedMovies;

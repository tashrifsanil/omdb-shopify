import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import NominatedMovieCard from "./NominatedMovieCard";
import React from "react";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Typography from "@material-ui/core/Typography";
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

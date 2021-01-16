import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import Container from "@material-ui/core/Container";

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
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container>
      <List className={classes.root}>
        {props.movies.map((movie, index) => {
          return (
            <ListItem
              key={movie.imdbID}
              role={undefined}
              dense
              button
              onClick={() => {
                console.log("clickedd search result");
              }}
            >
              <ListItemIcon>
                <img src={movie.Poster} alt="movie" width={50}></img>
              </ListItemIcon>
              <ListItemText
                className={classes.resultEntry}
                primary={`${movie.Title} - (${movie.Year})`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="white"
                    ></Typography>
                    ImDB Link
                  </React.Fragment>
                }
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="nominate"
                  onClick={() => {
                    props.onRemoveNominationClicked(movie);
                  }}
                >
                  <RemoveCircleIcon
                    className={classes.removeNominationButton}
                  />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default NominatedMovies;

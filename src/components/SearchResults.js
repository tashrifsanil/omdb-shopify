import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddCircleIcon from "@material-ui/icons/AddCircle";
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
  nominateButton: {
    color: "#55ff00",
  },
}));

const SearchResults = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [movies, setMovies] = useState([]);

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", props.searchTerm);
    searchMovieRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchTerm, props.currentPage]);

  const searchMovieRequest = async () => {
    const url =
      "https://www.omdbapi.com/?s=" +
      props.searchTerm +
      "&apikey=a7d62505" +
      "&page=" +
      props.currentPage;
    const response = await fetch(url);

    const responseJson = await response.json();

    // If search results returned are not empty
    if (responseJson.Search) {
      setMovies(responseJson.Search);
      var totalResults = parseInt(responseJson.totalResults);
      // Calculation to determine how many pages there will be in total
      // based on totalResults
      // responseJson.Search.length is how many cards there are page, i.e.
      // how many results get returned by page
      //   var maxPagesCalc = Math.ceil(totalResults / responseJson.Search.length);
      //   props.setMaxPages(maxPagesCalc);
    }
  };

  const handleNominateClicked = (movie) => {
    console.log("Nominated ", movie.Title);
    props.onNominateClicked(movie);
  };

  return (
    <Container>
      <List className={classes.root}>
        {movies.map((movie, index) => {
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
                    console.log("movie clickeddd", movie.Title);
                    props.onNominateClicked(movie);
                  }}
                >
                  <AddCircleIcon className={classes.nominateButton} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};

export default SearchResults;

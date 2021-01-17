import React, { useEffect, useState } from "react";

import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    height: 100,
  },
  title: {
    width: 140,
  },
  cover: {
    width: 151,
    height: 170,
    // width: "100%",
    // height: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(15),
    // paddingBottom: theme.spacing(0),
  },
  playIcon: {
    height: 38,
    width: 38,
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
      var totalResults = parseInt(responseJson.totalResults);

      // Additionally if we get a list of alreadyNominated movies
      // we need to disable the movies in that list so they can't be nominated again
      if (props.nominatedMoviesList) {
        for (var i = 0; i < responseJson.Search.length; i++) {
          responseJson.Search[i].disableNominate = false;
          for (var j = 0; j < props.nominatedMoviesList.length; j++) {
            console.log(
              "Search id ",
              responseJson.Search[i].imdbID,
              " storageid ",
              props.nominatedMoviesList[j].imdbID
            );
            if (
              responseJson.Search[i].imdbID ===
              props.nominatedMoviesList[j].imdbID
            ) {
              console.log("Disabled comparison succeeded ");
              responseJson.Search[i].disableNominate = true;
            }
          }
        }
      } else {
        for (var iter = 0; iter < responseJson.Search.length; iter++) {
          responseJson.Search[iter].disableNominate = false;
        }
      }

      setMovies(responseJson.Search);
      // Calculation to determine how many pages there will be in total
      // based on totalResults
      // responseJson.Search.length is how many cards there are page, i.e.
      // how many results get returned by page
      var maxPagesCalc = Math.ceil(totalResults / 10);
      props.setMaxPages(maxPagesCalc);
    }
  };

  const handleNominateClicked = (movie) => {
    console.log("Nominated ", movie.Title);
    props.onNominateClicked(movie);
  };

  return (
    <Grid container>
      {movies.map((movie, index) => {
        return (
          <Grid item>
            <Card className={classes.root}>
              <CardMedia
                className={classes.cover}
                image={movie.Poster}
                title={movie.imdbID}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.title}
                    component="h5"
                    variant="h5"
                  >
                    {movie.Title}
                    {/* Live from space */}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {movie.Year}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton
                    aria-label="nominate"
                    disabled={movie.disableNominate}
                    onClick={() => {
                      props.onNominateClicked(movie);
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </div>
              </div>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SearchResults;

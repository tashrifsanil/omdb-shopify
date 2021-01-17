import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Grid from "@material-ui/core/Grid";
import Row from "react-bootstrap/Row";
import SimpleCard from "./SimpleCard";
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
  nominateIcon: {
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
      // var maxPagesCalc = Math.ceil(totalResults / responseJson.Search.length);
      // props.setMaxPages(maxPagesCalc);
    }
  };

  const handleNominateClicked = (movie) => {
    console.log("Nominated ", movie.Title);
    props.onNominateClicked(movie);
  };

  return (
    // <Container fluid="true">
    //   <Row noGutters="true" className={classes.row}>
    //     {movies.slice(0, 5).map((movie, index) => {
    //       return (
    //         <Col className={classes.col}>
    //           <SimpleCard movie={movie} />
    //         </Col>
    //       );
    //     })}
    //   </Row>
    //   <Row noGutters="true" className={classes.row}>
    //     {movies.slice(5, 11).map((movie, index) => {
    //       return (
    //         <Col className={classes.col}>
    //           <SimpleCard movie={movie} />
    //         </Col>
    //       );
    //     })}
    //   </Row>
    // </Container>
    <Grid container>
      {movies.map((movie, index) => {
        return (
          <Grid item>
            <SimpleCard
              movie={movie}
              onNominateClicked={props.onNominateClicked}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default SearchResults;

import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import SearchResultCard from "./SearchResultCard";

const SearchResults = (props) => {
  const [movies, setMovies] = useState([]);

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", props.searchTerm);
    searchMovieRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchTerm, props.currentPage, props.nominatedMoviesList]);

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
      // props.setMaxPages(maxPagesCalc);
    }
  };

  const shouldBeOnNewRow = (index, arrayLength) => {
    var onNewRow = false;

    if (index == 0 || index >= arrayLength / 2) {
      onNewRow = true;
    }

    return onNewRow;
  }

  const sliceMap = (fn, from, toExclusive, array) => {
    const len = toExclusive - from;
    const mapped = Array(len);

    for (let i = 0; i < len; i++) {
      mapped[i] = fn(array[i + from], i);
    }

    return mapped;
  };




  return (
    <>
      <Grid item container xs={12} spacing={2}>
        <Grid item xs={1} />
        {sliceMap((movie, index) => {
          return (
            <Grid item xs={2}>
              <SearchResultCard
                movie={movie}
                onSearchEntryClicked={props.onSearchEntryClicked}
                onNominateClicked={props.onNominateClicked}
              />
            </Grid>
          )
        }, 0, movies.length / 2, movies)}
        <Grid item xs={1} />

        <Grid item xs={1} />
        {sliceMap((movie, index) => {
          return (
            <Grid item xs={2}>
              <SearchResultCard
                movie={movie}
                onSearchEntryClicked={props.onSearchEntryClicked}
                onNominateClicked={props.onNominateClicked}
              />
            </Grid>
          )
        }, movies.length / 2, movies.length, movies)}
        <Grid item xs={1} />
      </Grid>
    </>
  );
};

export default SearchResults;

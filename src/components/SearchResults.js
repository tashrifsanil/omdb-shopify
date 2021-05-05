import React, { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import SearchResultCard from "./SearchResultCard";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider";
import useRequest from '../hooks/useRequest';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: '100%',
    marginBottom: theme.spacing(2),
  }
}));

const SearchResults = (props) => {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  var movieDataFormat = {
    Title: "",
    Year: "",
    Poster: "",
  }

  const initialMovieData = new Array(10).fill(movieDataFormat);

  const [movies, setMovies] = useState(initialMovieData);

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", props.searchTerm);
    searchMovieRequest();

  }, [props.searchTerm, props.currentPage, props.nominatedMoviesList]);


  console.log("Data test ", data);
  console.log("Loading stats ", loading);


  const searchMovieRequest = async () => {
    const url =
      "https://www.omdbapi.com/?s=" +
      props.searchTerm +
      "&apikey=a7d62505" +
      "&page=" +
      props.currentPage;

    setLoading(true);

    try {
      const response = await axios(url);
      setData(response.data);
      setMovies(response.data.Search);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }

    console.log("Search data -> ", data);
  }

  const shouldBeOnNewRow = (index, arrayLength) => {
    var onNewRow = false;

    if (index == 0 || index >= arrayLength / 2) {
      onNewRow = true;
    }

    return onNewRow;
  }

  const sliceMap = (fn, from, toExclusive, array) => {
    const len = toExclusive - from;
    console.log("Array len ", len);

    const mapped = Array(len);

    for (let i = 0; i < len; i++) {
      mapped[i] = fn(array[i + from], i);
    }

    return mapped;
  };




  return (
    <>
      {movies ? (
        <Box component="flex" style={{ height: '80vh' }} spacing={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className={classes.row}>
                {sliceMap((movie, index) => {
                  return (
                    <SearchResultCard
                      movie={movie}
                      loading={loading}
                      onSearchEntryClicked={props.onSearchEntryClicked}
                      onNominateClicked={props.onNominateClicked}
                    />
                  )
                }, 0, parseInt(movies.length / 2), movies)}

              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.row}>
                {sliceMap((movie, index) => {
                  return (
                    <SearchResultCard
                      movie={movie}
                      loading={loading}
                      onSearchEntryClicked={props.onSearchEntryClicked}
                      onNominateClicked={props.onNominateClicked}
                    />
                  )
                }, parseInt(movies.length / 2), movies.length, movies)}

              </Box>
            </Grid>

          </Grid>
        </Box>

      ) : null}

      {/* <Grid container alignItems="stretch" spacing={2} xs={12}>
          {sliceMap((movie, index) => {
            return (
              <Grid item xs={2}>
                <SearchResultCard>
                  movie={movie}
                  onSearchEntryClicked={props.onSearchEntryClicked}
                  onNominateClicked={props.onNominateClicked}
                />
              </Grid>
            )
          }, 0, movies.length / 2, movies)}
        </Grid>

        <Grid container alignItems="stretch" spacing={2} xs={12}>
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
        </Grid> */}
    </>
  );
};

export default SearchResults;

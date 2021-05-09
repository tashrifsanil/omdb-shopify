import React, { useEffect, useState } from "react";

import {
  Grid,
  Box,
} from "@material-ui/core";

import SearchResultCard from "./SearchResultCard";
import SearchResultSkeletonCard from "./SearchResultSkeletonCard";

import PageStepper from "../navigation/PageStepper";

import { makeStyles } from '@material-ui/core/styles';

import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  row: {
    display: 'flex',
    height: "100%",
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginBottom: theme.spacing(2),
  },
}));

const sliceMap = (fn, from, toExclusive, array) => {
  const len = toExclusive - from;
  console.log("Array len ", len);

  const mapped = Array(len);

  for (let i = 0; i < len; i++) {
    mapped[i] = fn(array[i + from], i);
  }

  return mapped;
};

const SearchResults = (props) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [maxSteps, setMaxSteps] = useState(1);
  const [activePage, setActivePage] = useState(1);

  var movieDataFormat = {
    Title: "",
    Year: "",
    Poster: "",
  }

  const initialMovieData = new Array(10).fill(movieDataFormat);

  const [movies, setMovies] = useState(initialMovieData);
  const [disableNominations, setDisableNominations] = useState(false);


  const searchMovieRequest = async () => {
    const url =
      "https://www.omdbapi.com/?s=" +
      props.searchTerm +
      "&apikey=a7d62505" +
      "&page=" +
      activePage;

    setLoading(true);

    try {
      const response = await axios(url);
      setData(response.data);


      // Additionally if we get a list of alreadyNominated movies
      // we need to disable the movies in that list so they can't be nominated again
      if (props.nominatedMoviesList) {
        for (var i = 0; i < response.data.Search.length; i++) {
          response.data.Search[i].disableNominate = false;
          for (var j = 0; j < props.nominatedMoviesList.length; j++) {
            console.log(
              "Search id ",
              response.data.Search[i].imdbID,
              " storageid ",
              props.nominatedMoviesList[j].imdbID
            );
            if (
              response.data.Search[i].imdbID ===
              props.nominatedMoviesList[j].imdbID
            ) {
              console.log("Disabled comparison succeeded ");
              response.data.Search[i].disableNominate = true;
            }
          }
        }
      } else {
        for (var iter = 0; iter < response.data.Search.length; iter++) {
          response.data.Search[iter].disableNominate = false;
        }
      }

      setMovies(response.data.Search);

      var maxPagesCalc = Math.ceil(response.data.totalResults / 10);
      setMaxSteps(maxPagesCalc);

      setLoading(false);
      setShow(true);

    } catch (err) {
      setError(err);
      setLoading(false);
    }

    console.log("Search data -> ", data);
  }

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", props.searchTerm);
    setActivePage(1);
    if (props.searchTerm.length > 0)
      searchMovieRequest();

  }, [props.searchTerm]);

  useEffect(() => {
    searchMovieRequest();
  }, [activePage]);

  // Prevent further nominations after 5 nominations have already been made
  useEffect(() => {
    if (props.nominatedMoviesList.length >= 5) {
      setDisableNominations(true);
    } else {
      setDisableNominations(false);

    }
  }, [props.nominatedMoviesList])


  const handlePageNext = () => {
    setActivePage((currentPage) => currentPage + 1);
  };

  const handlePageBack = () => {
    setActivePage((currentPage) => currentPage - 1);
  };

  return (
    <>
      {show ? (
        <>
          <Grid container spacing={2} alignItems="stretch" style={{ maxHeight: '95%' }}>
            <Grid item xs={12}>
              <Box className={classes.row}>
                {sliceMap((movie, index) => {
                  return (
                    <>
                      {loading ? (
                        <SearchResultSkeletonCard />
                      ) : (
                        <SearchResultCard
                          movie={movie}
                          loading={loading}
                          disableNominations={disableNominations}
                          onSearchEntryClicked={props.onSearchEntryClicked}
                          onNominateClicked={props.onNominateClicked}
                        />
                      )}
                    </>
                  )
                }, 0, parseInt(movies.length / 2), movies)}

              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.row}>
                {sliceMap((movie, index) => {
                  return (
                    <>
                      {loading ? (
                        <SearchResultSkeletonCard />
                      ) : (
                        <SearchResultCard
                          movie={movie}
                          loading={loading}
                          disableNominations={disableNominations}
                          onSearchEntryClicked={props.onSearchEntryClicked}
                          onNominateClicked={props.onNominateClicked}
                        />
                      )}
                    </>
                  )
                }, parseInt(movies.length / 2), movies.length, movies)}

              </Box>
            </Grid>
            <Grid item xs={12}>
              <PageStepper
                steps={maxSteps}
                activePage={activePage}
                onBack={handlePageBack}
                onNext={handlePageNext}
              />
            </Grid>
          </Grid>

        </>
      ) : null}
    </>
  );
};

export default SearchResults;

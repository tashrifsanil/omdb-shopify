import React, { useEffect, useState } from "react";

import {
  Grid,
  Box,
  Card,
  Divider,
  MobileStepper,
  Button,
} from "@material-ui/core";

import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';

import SearchResultCard from "./SearchResultCard";
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
  const theme = useTheme();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [maxSteps, setMaxSteps] = useState(1);
  const [activeStep, setActiveStep] = useState(1);

  var movieDataFormat = {
    Title: "",
    Year: "",
    Poster: "",
  }

  const initialMovieData = new Array(10).fill(movieDataFormat);

  const [movies, setMovies] = useState(initialMovieData);
  const [disableNominations, setDisableNominations] = useState(false);

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", props.searchTerm);
    searchMovieRequest();

  }, [props.searchTerm, activeStep]);

  // Prevent further nominations after 5 nominations have already been made
  useEffect(() => {
    if (props.nominatedMoviesList.length >= 5) {
      setDisableNominations(true);
    } else {
      setDisableNominations(false);

    }
  }, [props.nominatedMoviesList])


  console.log("Data test ", data);
  console.log("Loading stats ", loading);


  const searchMovieRequest = async () => {
    const url =
      "https://www.omdbapi.com/?s=" +
      props.searchTerm +
      "&apikey=a7d62505" +
      "&page=" +
      activeStep;

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

    } catch (err) {
      setError(err);
      setLoading(false);
    }

    console.log("Search data -> ", data);
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
                      disableNominations={disableNominations}
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
                      disableNominations={disableNominations}
                      onSearchEntryClicked={props.onSearchEntryClicked}
                      onNominateClicked={props.onNominateClicked}
                    />
                  )
                }, parseInt(movies.length / 2), movies.length, movies)}

              </Box>
            </Grid>

          </Grid>
          <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Box>

      ) : null}
    </>
  );
};

export default SearchResults;

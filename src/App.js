import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import React, { useEffect, useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import AlertDialog from "./components/AlertDialog";
import { Box } from "@material-ui/core";
// import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from "@material-ui/core/Grid";
import MovieMoreInfo from "./components/MovieMoreInfo";
import NominatedMovies from "./components/NominatedMovies";
import PageControl from "./components/PageControl";
import SearchAppBar from "./components/SearchAppBar";
import SearchResults from "./components/SearchResults";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultsVisible, setSearchResultsVisibility] = useState(false);
  const [nominationsVisible, setNominationsVisibility] = useState(false);

  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nominatedMoviesList, setNominatedMoviesList] = useState([]);
  const [maxPages, setMaxPages] = useState(1);

  const [nominationsCompleted, setNomCompleted] = useState(false);
  const maxNominations = 5;

  const [showMovieMoreInfo, setShowMovieMoreInfo] = useState(false);
  // The movie to display in more info section
  const [movie4MoreInfo, setMovie4MoreInfo] = useState({});
  // This only gets run when the app loads initially for the first time

  const onSearchEntryClicked = (movie) => {
    setMovie4MoreInfo(movie);
    console.log("Search Entry clicked ", movie4MoreInfo);
    setShowMovieMoreInfo(true);
  };

  useEffect(() => {
    const nominatedMovies = JSON.parse(
      localStorage.getItem("omdb-app-nominations")
    );
    console.log("Nominated movies local storage ", nominatedMovies);
    // If we have nothing in local storage our array can be none
    // so to avoid that we check if its before setting the state of nominated nominated movies
    // from local storage
    if (nominatedMovies) {
      setNominatedMoviesList(nominatedMovies);
    }
  }, []);

  useEffect(() => {
    // Search term has changed, if it's more than 3 characters show search results
    if (searchTerm.length >= 3) {
      setSearchResultsVisibility(true);
    } else if (searchTerm.length === 0) {
      setSearchResultsVisibility(false);
    }
    if (nominatedMoviesList.length > 0) {
      setNominationsVisibility(true);
    }
  }, [searchTerm, nominatedMoviesList]);

  const nominateMovie = (movie) => {
    if (nominatedMoviesList.length < maxNominations - 1) {
      movie.disableNominate = true;
      const newNominationsList = [...nominatedMoviesList, movie];
      setNominatedMoviesList(newNominationsList);
      saveToLocalStorage(newNominationsList);
    } else if (nominatedMoviesList.length === maxNominations - 1) {
      movie.disableNominate = true;
      const newNominationsList = [...nominatedMoviesList, movie];
      setNominatedMoviesList(newNominationsList);
      saveToLocalStorage(newNominationsList);
      setNomCompleted(true);
    } else {
      setNomCompleted(true);
    }
  };

  const removeNomination = (movie) => {
    movie.disableNominate = false;
    const newNominationsList = nominatedMoviesList.filter(
      (nominatedMoviesList) => nominatedMoviesList.imdbID !== movie.imdbID
    );
    setNomCompleted(false);
    setNominatedMoviesList(newNominationsList);
    saveToLocalStorage(newNominationsList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("omdb-app-nominations", JSON.stringify(items));
  };

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    // Use bootstrap styles for root container
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <SearchAppBar setSearchTerm={setSearchTerm} />
        </Grid>
        <Grid item xs={12} container direction="row">
          <Grid item container direction="column" xs={5}>
            <Grid item>
              {searchResultsVisible ? (
                <SearchResults
                  searchTerm={searchTerm}
                  currentPage={currentPage}
                  setMaxPages={setMaxPages}
                  onNominateClicked={nominateMovie}
                  onSearchEntryClicked={onSearchEntryClicked}
                  nominatedMoviesList={nominatedMoviesList}
                ></SearchResults>
              ) : null}
            </Grid>
          </Grid>
          <Grid item xs={showMovieMoreInfo ? 3 : 7}>
            <NominatedMovies
              movies={nominatedMoviesList}
              onRemoveNominationClicked={removeNomination}
            />
          </Grid>
          <Grid item xs={4}>
            <MovieMoreInfo visible={showMovieMoreInfo} movie={movie4MoreInfo} />
          </Grid>
        </Grid>
      </Grid>
      <PageControl
        maxPages={maxPages}
        minPages={1}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></PageControl>
      <AlertDialog
        hideButton={nominationsVisible}
        open={nominationsCompleted}
        nominations={nominatedMoviesList}
      />
    </ThemeProvider>
  );
}

export default App;

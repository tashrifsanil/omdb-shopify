import CssBaseline from '@material-ui/core/CssBaseline';

import React, { useEffect, useState } from "react";

import {
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import { Helmet } from 'react-helmet';
import { Box, Grid } from "@material-ui/core";

import LandingSearch from "./components/search/LandingSearch";
import SearchAppBar from "./components/search/SearchAppBar";
import SearchResults from "./components/search/SearchResults";

import NominatedMovies from "./components/nominations/NominatedMovies";
import AlertDialog from "./components/AlertDialog";


function App() {
  const [landing, setLanding] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [nominatedMoviesList, setNominatedMoviesList] = useState([]);
  const [nominationsCompleted, setNominationsCompleted] = useState(false);

  const maxNominations = 5;



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

    if (searchTerm.length > 0) {
      setLanding(false);
    }
    if (nominatedMoviesList.length > 0) {
      setLanding(false);
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
      setNominationsCompleted(true);
    } else {

      setNominationsCompleted(true);
    }
  };

  const handleHomeClick = () => {
    setSearchTerm("");
    setNominatedMoviesList([]);
    setNominationsCompleted(false);
    setLanding(true);
  }

  const removeNomination = (movie) => {
    movie.disableNominate = false;
    const newNominationsList = nominatedMoviesList.filter(
      (nominatedMoviesList) => nominatedMoviesList.imdbID !== movie.imdbID
    );
    setNominationsCompleted(false);
    setNominatedMoviesList(newNominationsList);
    saveToLocalStorage(newNominationsList);
  };

  const saveToLocalStorage = (items) => {
    localStorage.setItem("omdb-app-nominations", JSON.stringify(items));
  };


  // dark mode theming
  const lightTheme = createMuiTheme({});
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#BB86FC',
      },
      background: {
        default: '#121212',
        paper: '#1e1e1e',
      },
      text: {
        primary: '#e3e3e3',
        secondary: '#a5a5a5',
        disabled: '#BB86FC'
      },
      action: {
        active: '#e3e3e3',
        disabledBackground: '#BB86FC',
      },
      divider: "#BB86FC",
      searchfield: '#2f2f2f',
    },


  });


  return (

    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Helmet>
        <title>The Shoppies</title>
      </Helmet>
      <SearchAppBar
        landing={landing}
        onHomeClick={handleHomeClick}
        onDarkModeToggle={setDarkMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} />
      <Box>
        <Grid container direction="row" alignItems="stretch">
          <Grid item xs={12}>
            <LandingSearch
              landing={landing}
              onHomeClick={handleHomeClick}
              setSearchTerm={setSearchTerm}
            />

          </Grid>
          <Grid item xs={1} />
          {landing ? (null) : (
            <>
              <Grid item container xs={7} alignItems="stretch" >
                <SearchResults
                  searchTerm={searchTerm}
                  onNominateClicked={nominateMovie}
                  nominatedMoviesList={nominatedMoviesList} />

              </Grid>
              <Grid item container direction="row" xs={3} spacing={2} alignItems="stretch">
                <NominatedMovies
                  movies={nominatedMoviesList}
                  onRemoveNominationClicked={removeNomination}
                />

              </Grid>
              <Grid item xs={1} />
            </>
          )}

        </Grid>
      </Box >
      <AlertDialog
        open={nominationsCompleted}
        nominations={nominatedMoviesList}
      />
    </MuiThemeProvider>
  );
}

export default App;

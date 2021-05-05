import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "fontsource-roboto";
import "@fontsource/open-sans";
import CssBaseline from '@material-ui/core/CssBaseline';

import React, { useEffect, useState } from "react";

import {
  ThemeProvider,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";

import {
  makeStyles,
  useTheme
} from "@material-ui/core/styles";

import AlertDialog from "./components/AlertDialog";
// import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from "@material-ui/core/Grid";
import MovieMoreInfo from "./components/MovieMoreInfo";
import NominatedMovies from "./components/NominatedMovies";
import NominatedMovieCard from "./components/NominatedMovieCard";
import PageControl from "./components/PageControl";
import SearchAppBar from "./components/SearchAppBar";
import SearchResults from "./components/SearchResults";
import Typography from "@material-ui/core/Typography";
import { Helmet } from 'react-helmet';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";

import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

import { Box } from "@material-ui/core";
import SearchField from "./components/SearchField";

const useStyles = makeStyles((theme) => ({
  nominationsHeader: {
    paddingLeft: "1%",
    fontFamily: "Open Sans Light",
    width: "100%",
  },
}));

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResultsVisible, setSearchResultsVisibility] = useState(false);
  const [nominationsVisible, setNominationsVisibility] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [nominatedMoviesList, setNominatedMoviesList] = useState([]);
  const [maxPages, setMaxPages] = useState(1);

  const [nominationsCompleted, setNomCompleted] = useState(false);
  const maxNominations = 5;

  const [showMovieMoreInfo, setShowMovieMoreInfo] = useState(false);

  // The movie to display in more info section
  const [movie4MoreInfo, setMovie4MoreInfo] = useState({});

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
      setShowMovieMoreInfo(false);
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

  const classes = useStyles();

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
      }
    },


  });

  const theme = createMuiTheme({});

  return (

    <MuiThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Helmet>
        <title>OMDb Movies</title>
      </Helmet>
      <SearchAppBar setSearchTerm={setSearchTerm} />
      <Box>
        <Grid container direction="row" >
          <Grid item xs={12}>
            <SearchField setSearchTerm={setSearchTerm} />

          </Grid>
          <Grid item xs={1} />
          <Grid item container xs={7}>
            <SearchResults
              searchTerm={searchTerm}
              onNominateClicked={nominateMovie}
              nominatedMoviesList={nominatedMoviesList} />

          </Grid>
          <Grid item container direction="row" xs={3} spacing={2} style={{ height: '80vh' }} alignItems="stretch">
            <NominatedMovies
              movies={nominatedMoviesList}
              onRemoveNominationClicked={removeNomination}
            />
            {/* <Grid item>
              <NominatedMovieCard
                movie={nominatedMoviesList[0]}
                onRemoveNominationClicked={removeNomination}
              />
            </Grid>
            <Grid item>
              <NominatedMovieCard
                movie={nominatedMoviesList[0]}
                onRemoveNominationClicked={removeNomination}
              />
            </Grid> */}
          </Grid>
          <Grid item xs={1} />


        </Grid>
      </Box >
    </MuiThemeProvider>
  );
}

export default App;

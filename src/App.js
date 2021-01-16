import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import NavBar from "./components/NavBar";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green, red } from "@material-ui/core/colors";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
    position: "relative",
    minHeight: 200,
  },
  nextPageFab: {
    position: "absolute",
    bottom: theme.spacing(5),
    right: theme.spacing(5),
  },
  pageIndicatorFab: {
    position: "absolute",
    bottom: theme.spacing(5),
    right: theme.spacing(15),
  },
  prevPageFab: {
    position: "absolute",
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
    bottom: theme.spacing(5),
    right: theme.spacing(25),
  },
}));

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", searchTerm);
    searchMovieRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  const searchMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=a7d62505";
    const response = await fetch(url);

    const responseJson = await response.json();

    // If search results returned are not empty
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  const classes = useStyles();
  const theme = useTheme();

  var fabs = [
    {
      color: "primary",
      className: classes.nextPageFab,
      icon: <AddIcon />,
      label: "Add",
    },
    {
      color: "secondary",
      className: classes.pageIndicatorFab,
      icon: "1/100",
      label: "Edit",
    },
    {
      color: "inherit",
      className: classes.prevPageFab,
      icon: <UpIcon />,
      label: "Expand",
    },
  ];

  // const fab = fabs[0];
  const test = {
    className: classes.testButton,
  };
  const index = 0;

  return (
    // Use bootstrap styles for root container
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <div className="container-fluid">
        <div className="row">
          <MovieGrid movies={movies}></MovieGrid>
        </div>
        {fabs.map((fab, index) => (
          <Fab
            aria-label={fab.label}
            className={fab.className}
            color={fab.color}
          >
            {fab.icon}
          </Fab>
        ))}
      </div>
    </>
  );
}

export default App;

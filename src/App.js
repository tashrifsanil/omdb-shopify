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
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";

const pageControlStyles = makeStyles((theme) => ({
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
    // backgroundColor: green[500],
    // "&:hover": {
    //   backgroundColor: green[600],
    // },
    bottom: theme.spacing(5),
    right: theme.spacing(25),
  },
}));

// Page control floating buttons
const PageControlFABS = (props) => {
  const classes = pageControlStyles();
  const theme = useTheme();
  // currentPage is an integer indicating current page number
  var fabs = [
    {
      color: "inherit",
      className: classes.nextPageFab,
      icon: <ChevronRightOutlinedIcon />,
      label: "Next",
      clickHandler: (event) => {
        var newPageCount = props.currentPage + 1;
        if (newPageCount <= props.maxPages) {
          props.setCurrentPage(newPageCount);
          console.log("Current page changed ", props.currentPage);
        }
      },
    },
    {
      color: "secondary",
      className: classes.pageIndicatorFab,
      icon: `${props.currentPage}/100`,
      label: `${props.currentPage}/100`,
      clickHandler: (event) => {},
    },
    {
      color: "inherit",
      className: classes.prevPageFab,
      icon: <ChevronLeftOutlinedIcon />,
      label: "Prev",
      clickHandler: (event) => {
        var newPageCount = props.currentPage - 1;
        if (newPageCount >= props.minPages) {
          props.setCurrentPage(newPageCount);
          console.log("prev current page changed ", newPageCount);
        }
      },
    },
  ];

  return (
    <>
      {fabs.map((fab, index) => (
        <Fab
          aria-label={fab.label}
          className={fab.className}
          color={fab.color}
          onClick={fab.clickHandler}
        >
          {fab.icon}
        </Fab>
      ))}
    </>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", searchTerm);
    searchMovieRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, currentPage]);

  const searchMovieRequest = async () => {
    const url =
      "http://www.omdbapi.com/?s=" +
      searchTerm +
      "&apikey=a7d62505" +
      "&page=" +
      currentPage;
    const response = await fetch(url);

    const responseJson = await response.json();

    // If search results returned are not empty
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  return (
    // Use bootstrap styles for root container
    <>
      <NavBar setSearchTerm={setSearchTerm} />
      <div className="container-fluid">
        <div className="row">
          <MovieGrid movies={movies}></MovieGrid>
        </div>
        <PageControlFABS
          maxPages={100}
          minPages={1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></PageControlFABS>
      </div>
    </>
  );
}

export default App;

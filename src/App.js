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
import { grey, red } from "@material-ui/core/colors";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InputAdornment from "@material-ui/core/InputAdornment";

const pageControlStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 600,
    position: "relative",
    minHeight: 200,
  },
  nextPageFab: {
    position: "absolute",
    color: theme.palette.common.white,
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: "#f50057",
    },
    bottom: theme.spacing(4),
    right: theme.spacing(4),
  },
  pageIndicatorFab: {
    position: "absolute",
    bottom: theme.spacing(4),
    right: theme.spacing(12),
  },
  prevPageFab: {
    position: "absolute",
    color: theme.palette.common.white,
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: "#f50057",
    },
    bottom: theme.spacing(4),
    right: theme.spacing(20),
  },
}));

// Page control floating buttons
const PageControlFABS = (props) => {
  const classes = pageControlStyles();

  const [pageCtrlDialogVisible, setPageCtrlVisibility] = useState(false);
  // Keeps track of the page number that the user inputs in the page control dialog
  const [inputtedPageNumDialog, setInputtedPageNumDialog] = useState(1);

  // If the user inputs a page thats out of range pageError becomes true
  const [pageError, setPageError] = useState(false);
  // Text that tells user whats wrong with the page number they entered
  const [pageErrorText, setPageErrorText] = useState("");

  const handlePageCtrlClose = () => {
    setPageCtrlVisibility(false);
  };

  const handlePageCtrlDialogChange = (event) => {
    if (
      props.minPages <= event.target.value &&
      event.target.value <= props.maxPages
    ) {
      setInputtedPageNumDialog(event.target.value);
      setPageError(false);
      setPageErrorText("");
    } else {
      setPageError(true);
      setPageErrorText(
        `Input a page number between ${props.minPages}-${props.maxPages}`
      );
    }
  };

  const handlePageCtrlDialogKeyPresses = (event) => {
    if (event.key === "Enter") {
      // Jumps to the page the user types on enter key pressed
      if (!pageError) {
        // Hide the dialog after enter key
        setPageCtrlVisibility(false);
        // The user typed a valid page number to jump to in the dialog
        // so set that valid page number as the current page number
        props.setCurrentPage(inputtedPageNumDialog);
        event.preventDefault();
      }
    }
  };

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
      icon: `${props.currentPage}/${props.maxPages}`,
      label: `${props.currentPage}/${props.maxPages}`,
      clickHandler: (event) => {
        // Show page control dialog if this button is clicked
        setPageCtrlVisibility(true);
      },
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
      <Dialog
        open={pageCtrlDialogVisible}
        onClose={handlePageCtrlClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Enter Page Number</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="pageNumber"
            label="Page Number"
            type="number"
            fullWidth
            error={pageError}
            helperText={pageErrorText}
            onChange={handlePageCtrlDialogChange}
            onKeyDown={handlePageCtrlDialogKeyPresses}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FileCopyIcon />
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePageCtrlClose} color="primary">
            CLOSE
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPages, setMaxPages] = useState(1);

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
      var totalResults = parseInt(responseJson.totalResults);
      // Calculation to determine how many pages there will be in total
      // based on totalResults
      // responseJson.Search.length is how many cards there are page, i.e.
      // how many results get returned by page
      var maxPagesCalc = Math.ceil(totalResults / responseJson.Search.length);
      setMaxPages(maxPagesCalc);
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
          maxPages={maxPages}
          minPages={1}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></PageControlFABS>
      </div>
    </>
  );
}

export default App;

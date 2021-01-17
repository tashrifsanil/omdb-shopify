import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import ChevronLeftOutlinedIcon from "@material-ui/icons/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import { grey } from "@material-ui/core/colors";

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
    bottom: theme.spacing(3),
    right: theme.spacing(205),
  },
  pageIndicatorFab: {
    position: "absolute",
    bottom: theme.spacing(3),
    right: theme.spacing(213),
  },
  prevPageFab: {
    position: "absolute",
    color: theme.palette.common.white,
    backgroundColor: grey[900],
    "&:hover": {
      backgroundColor: "#f50057",
    },
    bottom: theme.spacing(3),
    right: theme.spacing(221),
  },
}));

const PageControl = (props) => {
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

export default PageControl;

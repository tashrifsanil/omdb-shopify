import {
  fade,
  makeStyles
} from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#181818",
  },
  movieIcon: {
    fontSize: "250%",
    color: "#ff316f",
  },
}));

const SearchAppBar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container xs={12}>
          <Grid item xs={3}>
            <MovieCreationOutlinedIcon className={classes.movieIcon} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;

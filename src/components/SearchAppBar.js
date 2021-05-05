import {
  fade,
  makeStyles
} from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import MovieCreationOutlinedIcon from "@material-ui/icons/MovieCreationOutlined";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#000000",
  },
  movieIcon: {
    fontSize: "250%",
    color: theme.palette.primary.main,
  },
}));

const SearchAppBar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Grid container xs={12} alignItems="flex-start">
          <Grid item xs={3}>
            <MovieCreationOutlinedIcon className={classes.movieIcon} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h5" color="primary">The Shoppies</Typography>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;

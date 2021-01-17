import { makeStyles, useTheme } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    height: 100,
  },
  title: {
    // width: 140,
  },
  cover: {
    width: 151,
    height: 170,
    // width: "100%",
    // height: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(100),
    // paddingBottom: theme.spacing(0),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const NominatedMovieCard = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={props.movie.Poster}
        title={props.movie.imdbID}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} component="h5" variant="h5">
            {props.movie.Title}
            {/* Live from space */}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.movie.Year}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton
            aria-label="nominate"
            onClick={() => {
              props.onRemoveNominationClicked(props.movie);
            }}
          >
            <RemoveIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};
export default NominatedMovieCard;

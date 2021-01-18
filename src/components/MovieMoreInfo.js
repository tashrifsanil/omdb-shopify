import React, { useEffect } from "react";

import Box from "@material-ui/core/Box";
import ButtonBase from "@material-ui/core/ButtonBase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import TheatersIcon from "@material-ui/icons/Theaters";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Typography from "@material-ui/core/Typography";
import imdbIcon from "../resources/icons/imdbIcon.svg";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "5%",
  },
  moveMoreInfo: {
    padding: theme.spacing(2),
    maxWidth: "md",
  },
  image: {
    justifyContent: "space-evenly",
    maxWidth: 200,
    maxHeight: 300,
  },
  img: {
    justifyContent: "space-evenly",
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rating: {
    width: "20%",
    fontSize: "100%",
  },
  cover: {
    width: "100%",
  },
  fallbackPoster: {
    fontSize: "100%",
    width: "100%",
    height: "100%",
  },
  ratingMargin: {
    margin: theme.spacing(1),
  },
  imdbLink: {
    maxWidth: 50,
    // height: "60%",
    backgroundColor: theme.palette.warning.light,
    color: "black",
  },
}));

const MovieMoreInfo = (props) => {
  const classes = useStyles();

  const [additionalMovieData, setAdditionalMovieData] = React.useState({});
  const [imdbID, setImdbID] = React.useState("");

  const getAdditionalMovieData = async () => {
    console.log("Get additional data ");
    const url =
      "https://www.omdbapi.com/?i=" +
      props.movie.imdbID +
      "&apikey=a7d62505&plot=full";
    const response = await fetch(url);
    const responseJson = await response.json();

    setAdditionalMovieData(responseJson);
  };

  useEffect(() => {
    if (props.movie) {
      setImdbID(props.movie.imdbID);
      getAdditionalMovieData();
    } else {
    }
  }, [props.movie]);

  return (
    <
      //  className={"moveMoreInfo"}
      // overflow={"hidden"}
      // fullWidth={true}
      // maxWidth={"md"}
      // scroll={"body"}
      // open={props.open}
      // keepMounted
    >
      {props.visible ? (
        <Card className={classes.root}>
          <Grid
            container
            direction="row"
            fullWidth={true}
            spacing={2}
            justify="space-evenly"
          >
            <Grid item xs={4}>
              {props.movie.Poster !== "N/A" ? (
                <img
                  className={classes.cover}
                  src={props.movie.Poster}
                  alt=""
                />
              ) : (
                <TheatersIcon className={classes.fallbackPoster} />
              )}
            </Grid>
            <Grid item container xs={8}>
              <Grid item xs={8}>
                <Typography variant="h4">{props.movie.Title}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6">{props.movie.Year}</Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="button" color="secondary">
                  {additionalMovieData.Genre}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle1">
                  Languages: {additionalMovieData.Language}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="subtitle1">
                  Country: {additionalMovieData.Country}
                </Typography>
              </Grid>
              <Grid item container xs={8}>
                <Grid item>
                  <Fab
                    variant="extended"
                    size="small"
                    color="primary"
                    aria-label="add"
                    className={classes.ratingMargin}
                  >
                    <ThumbUpIcon className={classes.ratingMargin} />
                    {additionalMovieData.Metascore}/100
                  </Fab>
                  <Fab
                    variant="extended"
                    size="small"
                    color="secondary"
                    aria-label="add"
                    className={classes.ratingMargin}
                  >
                    {additionalMovieData.Rated}
                  </Fab>

                  <a href={`https://www.imdb.com/title/${props.movie.imdbID}`}>
                    <img src={imdbIcon} className={classes.imdbLink}></img>
                  </a>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                Actors:{" "}
                <Typography variant="button">
                  {additionalMovieData.Actors}
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="button" color="secondary"></Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="body">
                  {additionalMovieData.Writers}
                </Typography>
              </Grid>
            </Grid>
            <Grid item></Grid>
            <Grid item container xs={11} spacing={2}>
              <Typography variant="h4">Plot</Typography>
              <Grid item>
                <Typography variant="body" paragraph={true}>
                  {additionalMovieData.Plot}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Card>
      ) : null}
    </>
  );
};

export default MovieMoreInfo;

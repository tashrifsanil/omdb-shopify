import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  Paper: {
    width: 700,
  },
  root: {
    flexGrow: 1,
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
}));

const MovieMoreInfo = (props) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [additionalMovieData, setAdditionalMovieData] = React.useState({});
  const [imdbID, setImdbID] = React.useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const getAdditionalMovieData = async () => {
    console.log("Get additional data ");
    const url =
      "https://www.omdbapi.com/?i=" + imdbID + "&apikey=a7d62505&plot=full";
    const response = await fetch(url);
    const responseJson = await response.json();

    setAdditionalMovieData(responseJson);
  };

  useEffect(() => {
    if (props.movie.imdbID) {
      setImdbID(props.movie.imdbID);
      getAdditionalMovieData();
    }
  }, [props.movie]);

  return (
    <Container
      //  className={"moveMoreInfo"}
      overflow={"hidden"}
      fullWidth={true}
      maxWidth={"md"}
      scroll={"body"}
      open={props.open}
      keepMounted
      onClose={handleClose}
    >
      {props.visible ? (
        <Paper className={classes.Paper}>
          <Grid container spacing={2} fullWidth={true}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src={additionalMovieData.Poster}
                />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="h5">
                    {additionalMovieData.Title}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {additionalMovieData.Plot}
                  </Typography>
                </Grid>
                <Grid item justify="flex-end">
                  <Chip
                    className={classes.rating}
                    label={additionalMovieData.imdbRating + "/10"}
                    color="secondary"
                  ></Chip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : null}
    </Container>
  );
};

export default MovieMoreInfo;

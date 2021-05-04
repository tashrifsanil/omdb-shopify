import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    // flex: 'auto',
    height: "100%",
  },
  cover: {
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: '1000',
  },
  year: {
    fontSize: '.1rem',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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
      <Grid container className={classes.root}>
        <Grid item container xs={10}>
          <Grid item xs={12}>
            <CardContent className={classes.content}>
              <Typography variant="h6" className={classes.Title} noWrap={true}>
                {props.movie.Title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" className={classes.Year}>
                {props.movie.Year}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.controls}>
              <Button size="small" color="primary"
                onClick={() => {
                  props.onRemoveNominationClicked(props.movie);
                }}>
                Remove
          </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          <CardMedia
            className={classes.cover}
            image={props.movie.Poster}
          />
        </Grid>
      </Grid>
      {/* <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.movie.Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {props.movie.Year}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button size="small" color="primary"
            onClick={() => {
              props.onRemoveNominationClicked(props.movie);
            }}>
            Remove
          </Button>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.movie.Poster}
        // title={props.movie.Title}
      /> */}
    </Card >
  );
}

export default NominatedMovieCard;

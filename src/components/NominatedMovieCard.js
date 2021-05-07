import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  SkipPreviousIcon,
  PlayArrowIcon,
  SkipNextIcon,
  Button,
  Grid,
  Box,
} from '@material-ui/core'

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: 'auto',
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
  const [showSkeleton, setShowSkeleton] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setShowSkeleton(props.showSkeleton);
  }, [props.showSkeleton])

  return (
    <Card className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item container xs={10}>
          <Grid item xs={12}>
            <CardContent className={classes.content}>
              {showSkeleton ? (
                <>
                  <Skeleton animation="wave" height={10} width="80%" />
                  <Skeleton animation="wave" height={10} width="60%" />
                </>
              ) : (
                <>
                  <Typography variant="h6" className={classes.Title} noWrap={true}>
                    {props.movie.Title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary" className={classes.Year}>
                    {props.movie.Year}
                  </Typography>
                </>
              )}

            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.controls}>
              {showSkeleton ? (
                <Skeleton animation={false} height="25%" width="30%" />
              ) : (
                <Button size="small" color="primary"
                  onClick={() => {
                    props.onRemoveNominationClicked(props.movie);
                  }}>
                  Remove
                </Button>
              )}
            </div>
          </Grid>
        </Grid>
        <Grid item xs={2}>
          {showSkeleton ? (
            <Skeleton animation={false} variant="rect" className={classes.cover} />

          ) : (
            <CardMedia
              className={classes.cover}
              image={props.movie.Poster}
            />
          )}
        </Grid>
      </Grid>
    </Card >
  );
}

export default NominatedMovieCard;

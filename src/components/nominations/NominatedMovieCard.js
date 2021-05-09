import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid,
} from '@material-ui/core'

import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '95%',
    width: '100%',
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
    objectFit: 'cover',
  },
  title: {
    fontSize: '1.2rem',
  },
  year: {
    fontSize: '1rem',
  },
}));

const NominatedMovieCard = (props) => {
  const classes = useStyles();
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    setShowSkeleton(props.showSkeleton);
  }, [props.showSkeleton])

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item container xs={10}>
          <Grid item xs={12}>
            <CardContent className={classes.content}>
              <Typography variant="h6" className={classes.title} noWrap={true}>
                {props.movie.Title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" className={classes.year}>
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
    </Card >
  );
}

export default NominatedMovieCard;

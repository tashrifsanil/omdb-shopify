import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginRight: theme.spacing(2),
  },
  cover: {
    width: "100%",
    height: "20vh",
  },
  content: {
    height: "100%",
  },
  title: {
    fontSize: "1rem",
  },
  year: {
    fontSize: "1rem",
  },
  controls: {
    paddingTop: "20%",
  }
}));

const SearchResultCard = (props) => {
  const classes = useStyles();

  useEffect(() => {
    console.log("Search result card loading -> ", props.loading);
    console.log("Search result movie -> ", props.movie);
  }, [props.loading, props.movie])



  return (
    <Card className={classes.root}>

      <CardActionArea>
        {props.loading ? (
          <Skeleton animation="wave" variant="rect" height="20vh" width="100%" />
        ) : (
          <CardMedia
            component="img"
            className={classes.cover}
            image={props.movie.Poster}
          />
        )}
        <CardContent className={classes.content}>
          {props.loading ? (
            <div className={classes.skeletonContent}>
              <Skeleton animation="wave" height="100%" width="100%" />
              <Skeleton animation="wave" height="100%" width="80%" />
            </div>
          ) : (
            <>
              <Typography variant="h6" className={classes.title}>
                {props.movie.Title}
              </Typography>
              <Typography variant="body2" color="textSecondary" className={classes.year}>
                {props.movie.Year}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.controls}>
        {props.loading ? (<>
          <Skeleton animation="wave" height="100%" width="100%" />
          <Skeleton animation="wave" height="100%" width="100%" />
        </>
        ) : (
          <>
            <Button
              size="small"
              color="primary"
              disabled={props.movie.disableNominate || props.disableNominations}
              onClick={() => {
                props.onNominateClicked(props.movie);
              }}>
              Nominate
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                window.open(`https://www.imdb.com/title/${props.movie.imdbID}`);
              }}
            >
              Learn More
            </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default SearchResultCard;
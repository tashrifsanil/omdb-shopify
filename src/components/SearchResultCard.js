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
  media: {
    width: "100%",
    height: "20vh",
    // width: 100,
    // height: 200,
  },
  skeletonTitle: {
    width: "80%",
    height: "3.5vh",
  },
  skeletonSubTitle: {
    width: "5vw",
    height: "3.5vh",
  },
  skeletonMedia: {
    height: "20vh",
    width: "100%",
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
          <Skeleton animation="wave" variant="rect" className={classes.skeletonMedia} />
        ) : (
          <CardMedia
            component="img"
            className={classes.media}
            image={props.movie.Poster}
          />
        )}
        <CardContent>
          {props.loading ? (
            <>
              <Skeleton animation="wave" className={classes.skeletonTitle} />
              <Skeleton animation="wave" className={classes.skeletonSubTitle} />
            </>
          ) : (
            <>
              <Typography variant="h6">
                {props.movie.Title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.movie.Year}
              </Typography>
            </>
          )}
        </CardContent>
      </CardActionArea>
      <CardActions>
        {props.loading ? (<>
          <Skeleton animation="wave" height={"5vh"} width="100%" />
          <Skeleton animation="wave" height={"5vh"} width="100%" />
        </>
        ) : (
          <>
            <Button size="small" color="primary"
              onClick={() => {
                props.onNominateClicked(props.movie);
              }}>
              Nominate
        </Button>
            <Button size="small" color="primary">
              Learn More
        </Button>
          </>
        )}
      </CardActions>
    </Card>
  );
}

export default SearchResultCard;
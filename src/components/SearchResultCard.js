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
  },
}));

const SearchResultCard = (props) => {
  const classes = useStyles();
  const [resultsLoaded, setResultsLoaded] = useState(false);
  
  
  useEffect(() => {
    if (Object.keys(props.movie).length > 0) {
      setResultsLoaded(true);
    }
  }, [props.movie])

  

  return (
    <Card className={classes.root}>

      <CardActionArea>
        {!resultsLoaded ? (
          <Skeleton animation="wave" variant="rect" className={classes.media} />
        ) : (
          <CardMedia
            component="img"
            className={classes.media}
            image={props.movie.Poster}
          />
        )}
        <CardContent>
          {!resultsLoaded ? (
            <>
              <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
              <Skeleton animation="wave" height={10} width="80%" />
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
        {!resultsLoaded ? (<>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
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
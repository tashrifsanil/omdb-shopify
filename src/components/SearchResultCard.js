import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
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
    width: 140,
  },
  cover: {
    width: 151,
    height: 170,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(15),
  },
  nominateButtton: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const SearchResultCard = (props) => {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      onClick={() => {
        console.log("Search card clicked");
        props.onSearchEntryClicked(props.movie);
      }}
    >
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
            className={classes.nominateButtton}
            aria-label="nominate"
            disabled={props.movie.disableNominate}
            onClick={() => {
              props.onNominateClicked(props.movie);
            }}
          >
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};
export default SearchResultCard;

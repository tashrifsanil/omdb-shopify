import React, { useEffect } from "react";
import MovieInfoDialog from "./MovieInfoDialog";

// This class is mainly used to display movie text when the user hovers the curor over a movie poster
const MovieMoreInfo = (props) => {
  return (
    <>
      <span className="mr-2">{props.text}</span>
      {/* Boostrap info circle svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#027cff"
        class="bi bi-info-circle-fill"
        viewBox="0 0 16 16"
      >
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412l-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
      </svg>
    </>
  );
};

const MoviePosterCard = (props) => {
  // open is a boolean value that determines if a more info dialog should be shown
  console.log("Get more data");
  const [open, setOpen] = React.useState(false);
  const [moreInfo, setAdditionalMovieData] = React.useState({});
  // This is set to true once the user clicks on a poster, that way another API
  // request doesn't need to be made if the user clicks the same poster

  const getAdditionalMovieData = async () => {
    const url =
      "http://www.omdbapi.com/?i=" +
      props.imdbID +
      "&apikey=a7d62505&plot=full";
    const response = await fetch(url);
    const responseJson = await response.json();

    // If search results returned are not empty
    setAdditionalMovieData(responseJson);
  };

  //   useEffect(() => {
  //     getAdditionalMovieData();
  //   }, [moreInfo]);

  const handleCardClick = () => {
    getAdditionalMovieData();
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <div
      key={props.imdbID}
      className="image-container d-flex justify-content-start m-2"
    >
      <img src={props.poster} onClick={handleCardClick} alt="movie"></img>
      <MovieInfoDialog
        key={props.imdbID}
        open={open}
        onDialogClosed={handleDialogClose}
        title={props.title}
        poster={props.poster}
        plot={moreInfo.Plot}
        // imdb ratings are out of 10
        rating={moreInfo.imdbRating + "/10"}
      ></MovieInfoDialog>
    </div>
  );
};

const MovieGrid = (props) => {
  const [open, setOpenDialog] = React.useState(false);

  const onPosterClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClosed = () => {
    setOpenDialog(false);
  };

  return (
    <>
      {props.movies.map((movie, index) => (
        // Bootstrap classes to make spacing look nicer
        <>
          <MoviePosterCard
            imdbID={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            onClick={onPosterClick}
          ></MoviePosterCard>

          <div className="overlay d-flex align-items-center justify-content-center">
            {/* <MovieMoreInfo text={movie.Title}></MovieMoreInfo> */}
          </div>
        </>
      ))}
    </>
  );
};

export default MovieGrid;

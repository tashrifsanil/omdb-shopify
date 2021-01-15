import React from 'react';

const MovieGrid = (props) => {
    return (
        <>
            {props.movies.map((movie, index) =>
                // Bootstrap classes to make spacing look nicer
                <div key={movie.imdbID} className="image-container d-flex justify-content-start m-2">
                    <img src={movie.Poster} alt="movie"></img>
                    <div className="overlay d-flex align-items-center justify-content-center">
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieGrid;
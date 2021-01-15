import React from 'react';
import { GridList, GridListTile } from '@material-ui/core'

const MovieGrid = (props) => {
    return (
        <>
            {/* <GridList cellHeight={200} cols={8} style={{width: 800, height:600}}>
            {props.movies.map((movie,index) => (
                <GridListTile>
                    <img src={movie.Poster}></img>
                </GridListTile>
            ))}
        </GridList> */}

            {props.movies.map((movie, index) =>
                // Bootstrap classes to make spacing look nicer
                <div className="d-flex justify-content-start m-2">
                    <img src={movie.Poster} alt="movie"></img>
                </div>
            )}
        </>
    )
}

export default MovieGrid;
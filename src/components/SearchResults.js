
import React, { useEffect, useState } from "react";

import {
    Layout,
} from '@shopify/polaris';

import SearchResultCard from "./SearchResultCard";

const SearchResults = (props) => {
    // Contains array of search results from OMDB Api
    const [movies, setMovies] = useState([]);

    const searchMovieRequest = async () => {
        const url =
            "https://www.omdbapi.com/?s=" +
            props.searchTerm +
            "&apikey=a7d62505" +
            "&page=" +
            props.currentPage;
        const response = await fetch(url);

        const responseJson = await response.json();

        // If search results returned are not empty
        if (responseJson.Search) {
            console.log(responseJson)
            setMovies(responseJson.Search);
        }
    };

    // This gets run everytime the state of searchTerm changes
    useEffect(() => {
        console.log("Search term was changed, ", props.searchTerm);
        // Since search term changed fetch data from OMDB api again with new search term
        searchMovieRequest();
    }, [props.searchTerm]);

    return (
        <Layout>
            {movies.map((movie, index) => {
                return (
                    <SearchResultCard
                        movie={movie}
                    // onSearchEntryClicked={props.onSearchEntryClicked}
                    // onNominateClicked={props.onNominateClicked}
                    />
                );
            })}


        </Layout>
    );
}

export default SearchResults;
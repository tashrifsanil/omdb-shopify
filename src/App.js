import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieGrid from './components/MovieGrid';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([])

  // This gets run everytime the state of searchTerm changes
  useEffect(() => {
    console.log("Search term was changed, ", searchTerm);
    searchMovieRequest();
  }, [searchTerm])

  const searchMovieRequest = async () => {
    const url = "http://www.omdbapi.com/?s=" + searchTerm + "&apikey=a7d62505";
    const response = await fetch(url);

    const responseJson = await response.json();

    // If search results returned are not empty
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  };


  return (
    // Use bootstrap styles for root container
    <div className="container-fluid">
      <SearchBar setSearchTerm={setSearchTerm} />
      <div className="row">
        <MovieGrid movies={movies}></MovieGrid>
      </div>
    </div>
  );
}

export default App;

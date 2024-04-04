import React from "react";
import MovieList from "./Components/MovieList";
import GenreFilter from "./Components/GenreFilter";
import {movies,genres} from "./movies";

import "./stylee.css"

const App= ()=>{


    return(
        <div className="app">
            <h1 className="page-heading">Top 15 Movies of All Time</h1>
            <GenreFilter  genres={genres} />
            <MovieList movies={movies} />
        </div>
    )
}

export default App
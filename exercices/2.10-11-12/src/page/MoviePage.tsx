import { useMatch, useOutletContext } from "react-router-dom"
import type { MovieContext } from "../types"
import MovieCard from "../components/MovieCard/MovieCard";


const MoviePage =() =>{
    const {movies}:MovieContext=useOutletContext();

    const match =useMatch("/movies/:id");
    const movieId=Number(match?.params.id);

     const movieFound = movies.find((movie) => movie.id === movieId);
     if (!movieFound) return <p>Movie not found</p>;
    if(isNaN(movieId)) return <p>Movie not found</p>;

    return(
        <MovieCard movie={movieFound}/>
    );
};

export default MoviePage;
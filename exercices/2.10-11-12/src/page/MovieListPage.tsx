
import MovieListView from "../components/MovieListView/MovieListView";
import PageTitle from "../components/PageTitle";
import type { MovieContext } from "../types";
import { useOutletContext } from "react-router-dom";

const MovieListPage = () => {
  ;

const {movies}:MovieContext=useOutletContext();
 
  return (
    <div>
      <PageTitle title="My favorite movies" />
      <MovieListView movies={movies} />


      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MovieListPage;

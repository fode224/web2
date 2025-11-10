import { useOutletContext } from "react-router-dom"
import type { MovieContext } from "../../types"
import PageTitle from "../PageTitle";
import MovieListView from "../MovieListView/MovieListView";


const MovieListPage=()=>{
    const {movies}:MovieContext=useOutletContext();

    return(
        <div>
            <PageTitle title="my favorite movies"/>
            <MovieListView movies={movies}/>
             <br />
      <br />
      <br />
      <br />


        </div>
    );
};

export default MovieListPage;
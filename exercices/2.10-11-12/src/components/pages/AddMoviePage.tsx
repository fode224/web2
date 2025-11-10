import AddMovieForm from "../AddMovieForm";
import type { MovieContext } from "../../types";
import { useOutletContext } from "react-router-dom";
import PageTitle from "../PageTitle";

const AddMoviePage = () => {
  const { onMovieAdded }: MovieContext = useOutletContext();
  return (
    <div>
      <PageTitle title="add a movie" />
      <AddMovieForm onMovieAdded={onMovieAdded} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AddMoviePage;

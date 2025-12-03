import { Link } from "react-router-dom";
import "./Navbar.css";
import { MaybeAuthenticatedUser } from "../types";

interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
  clearUser:()=>void;
}

const NavBar = ({ authenticatedUser,clearUser }: NavBarProps) => {
  return (
    <nav className="navbar">
      {authenticatedUser ? (
        <>
          <Link to="/">Home</Link>
          <Link to="/cinemas">Cinemas</Link>
          <Link to="/movie-list">My favorite movies</Link>
          <Link to="/add-movie">Add a movie</Link>
          <button onClick={clearUser} />
        </>
      ) : (
        <>
          <Link to ="/">Home</Link>
          <Link to="/register">creer un utlisateur</Link>
          <Link to="/login">se connecter</Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;

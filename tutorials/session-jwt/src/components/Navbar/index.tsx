import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MaybeAuthenticatedUser } from "../../types";

interface NavBarProps {
  authenticatedUser: MaybeAuthenticatedUser;
  cleanUser:()=>void;
}

const NavBar = ({authenticatedUser,cleanUser}:NavBarProps) => {
  const navigate = useNavigate();
  if(authenticatedUser){
  return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/add-pizza")}>Ajouter une pizza</button>
      <button onClick={() => cleanUser()}>se déconnecter</button>
    </nav>
  );
}
return (
    <nav>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/register")}>Créer un utilisateur</button>
      <button onClick={() => navigate("/login")}>Se connecter</button>
    </nav>
  );
};


export default NavBar;

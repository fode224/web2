
import "./Header.css";

interface HeaderProps {
  urlLogo: string;
  children: React.ReactNode;
  theme:"light"| "dark";
}

const Header = (props: HeaderProps) => {


  return (
    <footer className="header" style={{
      backgroundColor:props.theme==="dark" ? "black" :"white",
      color:props.theme ==="dark" ? "white": "black"
    }}>
      <img src={props.urlLogo} alt="logo" className="logo" />
      <div>{props.children}</div>
    </footer>
  );
};

export default Header;

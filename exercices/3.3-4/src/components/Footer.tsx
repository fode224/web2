import "./Footer.css";


interface FooterProps {
  urlLogo: string;
  children: React.ReactNode;
  theme: "light" | "dark";
  handleThemeChange: () => void;
}

const Footer = (props: FooterProps) => {
  return (
    <footer className="footer"
    style={{
        backgroundColor: props.theme === "dark" ? "black" : "white",
        color: props.theme === "dark" ? "white" : "black",
      }}
    >
      <div>{props.children}</div>
      <img src={props.urlLogo} alt="logo" className="logo" />
      <button
      onClick={props.handleThemeChange}
       style={{ backgroundColor: props.theme === "dark" ? "white" : "black" }}
      ></button>
         {props.theme === "light" ? "🌙" : "☀️"}
    </footer>
  );
};

export default Footer;

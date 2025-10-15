import { Movie } from "../types"
import Cinema from "./Cinema"
import Footer from "./Footer";
import Header from "./Header";
import PageTitle from "./PageTitle";

const App = () => {
  const pageTitle = "Informations sur les films dans les cinémas";

  const cinema1Name = "UGC DeBrouckère";

  const moviesCinema1:Movie[] = [
  {
    title: "HAIKYU-THE DUMPSTER BATTLE",
    director: "Susumu Mitsunaka",
  },
  {
    title: "GOODBYE JULIA",
    director: "Mohamed Kordofani",
  },
  {
    title: "INCEPTION",
    director: "Christopher Nolan",
  },
  {
    title: "PARASITE",
    director: "Bong Joon-ho",
  },
];

const cinema2Name = "UGC Toison d'Or";

const moviesCinema2 :Movie[] = [
  {
    title: "THE WATCHERS",
    director: "Ishana Night Shyamalan",
  },
  {
    title: "BAD BOYS: RIDE OR DIE",
    director: "Adil El Arbi, Bilall Fallah",
  },
  {
    title: "TENET",
    director: "Christopher Nolan",
  },
  {
    title: "THE IRISHMAN",
    director: "Martin Scorsese",
  },
]; 

  
  return (
    <div>
      <Header urlLgog="https://media.istockphoto.com/id/1429764305/fr/vectoriel/bande-de-film-vierge-isol%C3%A9e-sur-le-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=is5Y6cun0NC8PxJd51p4YnUoLUpyb758Bdigh4Bqn48=">
      <h1> Tous sur les films </h1>
      </Header>

      <main className="page-content">
        <PageTitle title={pageTitle}/>
  
      <Cinema name={cinema1Name} movies= {moviesCinema1} />

      <Cinema name={cinema2Name} movies={moviesCinema2} />
      </main>
      <Footer urlLogo="https://images.unsplash.com/photo-1760464864365-2188cd2afcde?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687">
      <h1>je sais pas</h1>
      </Footer>
    </div>
  );
};
export default App;
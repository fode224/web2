import path from "node:path";
import { Film,newFilm } from "../types";
import { parse,serialize } from "../utils/json";

const jsonDbPath = path.join(__dirname,"/../data/films.json");


  const defaultFilms: Film[] = [
    {
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      duration: 148,
      budget: 160000000,
      description: "A thief who steals corporate secrets through the use of dream-sharing technology.",
      imageUrl: "https://example.com/inception.jpg"
    },
    {
      id: 2,
      title: "The Matrix",
      director: "Lana Wachowski, Lilly Wachowski",
      duration: 136,
      budget: 63000000,
      description: "A computer hacker learns about the true nature of his reality.",
      imageUrl: "https://example.com/matrix.jpg"
    },{
     id: 3,
      title: "The Man",
      director: "ronaldo, messi",
      duration: 136,
      budget: 6300000,
      description: "A computer hacker learns about the true nature of his reality.",
      
    }
  ];
  
  function readAllFilms(minimumDuration:number | undefined):Film[]{

    const films =parse(jsonDbPath,defaultFilms);
    if(!minimumDuration){
        return films;
    }
    const minimumDurationNumber = Number(minimumDuration);

    const filter= films.filter((film)=>{
        return  film.duration >= minimumDurationNumber;
    }) ;
    return filter;
    
    
  }


  function readFilmById(id:number ):Film |undefined{
    const film = parse(jsonDbPath,defaultFilms);
    return film.find((film)=>film.id===id);
  }

  function createFilm(NewFilm:newFilm):Film{
    const films= parse(jsonDbPath,defaultFilms);
    const lastId = films[films.length -1].id;
    const film :Film ={id:lastId+1,...NewFilm};

    const updatedFilms = [...films,film];
    serialize(jsonDbPath,updatedFilms);
    return film;
  }

  function deleteFilm(id:number):Film|undefined{

    const films = parse(jsonDbPath,defaultFilms);
    const indexFilm = films.findIndex((film)=>film.id===id);
    if(indexFilm===-1){
        return undefined;
    }
    const deletedFilm = films.splice(indexFilm,1);
    serialize(jsonDbPath,films);
    
    return deletedFilm[0];
  }

  function updateFilm(id:number,updatedFilm:Partial<newFilm>):Film|undefined{
    const films = parse(jsonDbPath,defaultFilms);
    const film = films.find((film)=>film.id===id);
    if(!film){
        return undefined;
    }

    if(updatedFilm.title!== undefined){
        film.title = updatedFilm.title;
    }
    if(updatedFilm.director!==undefined){
        film.director=updatedFilm.director;
    }
    if(updatedFilm.duration!==undefined){
        film.duration=updatedFilm.duration;
    }

    if(updatedFilm.budget!==undefined){
        film.budget=updatedFilm.budget;
    }
    if(updatedFilm.description!==undefined){
        film.description=updatedFilm.description;
    }
    if(updatedFilm.imageUrl!==undefined){
        film.imageUrl=updatedFilm.imageUrl;
    }
    serialize(jsonDbPath,film);
    return film;

  }
  
















  export{readAllFilms,readFilmById,createFilm,deleteFilm,updateFilm};
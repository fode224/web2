import { Router } from "express";
import { Film } from "../types";
import { newFilm } from "../types";
import { isFilm } from "../utils/type-guards";
import path from "node:path";
import { serialize,parse } from "../utils/json";
import { createFilm, deleteFilm, readAllFilms, readFilmById, updateFilm } from "../services/films";
const jsonDbPath = path.join(__dirname,"/../data/films.json");




console.log("Films router chargé");
const router =Router();




router.get("/error", (_req, _res, _next) => {
  throw new Error("This is an error");
  // equivalent of next(new Error("This is an error"));
});

/**
 * Read all the films from the menu
 * GET /films by minimum duration
 */

router.get("/", (req, res) => {
 const minimumDuration = Number(req.query["minimum-duration"]);
    
const films =readAllFilms(minimumDuration);

//filter with the duration
  if (isNaN(minimumDuration)){
     return res.status(400).send("must be a number");
  } 
  if (minimumDuration <= 0){
       return res.status(400).send("must be positive number");
  } 
  return res.status(200).json(films);
  }
);

/**
 * GET film by id
 */

router.get("/:id",(req,res)=>{
  const id =Number(req.params.id );

  if(isNaN(id)){
    return res.status(400).send('bad request');
  }
  const film = readFilmById(id);
  if  (!film){
    return res.status(404).send('film not found');
  }
  return res.status(200).json(film);

});
/**
 * create a film
 */

router.post("/",(req,res)=>{

  const body: unknown = req.body;
  if(!isFilm(body)) {
    return res.sendStatus(400).send('bad film data');
  }
  
  const { title , director , duration , budget ,description , imageUrl} = body as newFilm;
  


  const newFilm= createFilm({
  title,
  director,
  duration,
  budget,
  description,
  imageUrl});
  return res.status(201).json(newFilm);
 });

/**
 * Delete a movie
 */

router.delete("/:id",(req,res)=>{
  const id = Number(req.params.id);
  if(isNaN(id)){
    return res.status(400).send("must be a id");
  }
  const deletedFilm = deleteFilm(id);
  if(!deleteFilm){
    return res.status(404).send('film not found');
  }
  return res.status(204).json(deletedFilm);
});

/**
 * Patch films
 */
router.patch("/:id", (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).send("must be a valid id");
 

 

  const body: unknown = req.body;

  if(isFilm(body)){
    return res.status(400).send("bad data film");
  }

  const{title , director , duration , budget ,description , imageUrl}: Partial<newFilm>=body;

  const updatedFilm = updateFilm(id,{title , director , duration , budget ,description , imageUrl});

  if(!updatedFilm){
    return res.status(404).json("film not found");
  }
 

  return res.json(updatedFilm);
});

/**
 * Put films
 */
router.put("/:id",(req,res)=>{
  const id = Number(req.params.id);

  if(isNaN(id)){
    return res.status(400).send("must be a id");
  }
   
  const body: unknown = req.body;

  if(isFilm(body)){
    return res.status(404).send("bad film data");
  }
 


  if(!isFilm(body)){
    return res.sendStatus(400);
  }


  const updatedFilm:Film ={
    id,
    title:body.title,
    director:body.director,
    duration:body.duration,
    budget:body.budget,
    description:body.description,
    imageUrl:body.imageUrl,

  };

  
  return res.json(updatedFilm);

  


  

});

export default router;
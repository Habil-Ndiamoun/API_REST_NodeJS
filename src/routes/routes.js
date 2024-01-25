import express from "express";
import { addFilms, getFilms } from "../controllers/FilmController";
import { addLanguages, getLanguages } from "../controllers/LanguageController";

const router = express.Router();

/************************************************************
//Opérations CRUD pour un film :
*************************************************************/
//1.Ajout d'un nouveau film
router.post('/addFilm', addFilms);

//2.Consultation de tous les films
router.get('/films', getFilms);


/************************************************************
//Opérations CRUD pour un language :
*************************************************************/
//1.Ajout d'une nouvelle langue
router.post('/addLanguage', addLanguages);

//2.Consultation de tous les languages
router.get('/languages', getLanguages);

module.exports = router;
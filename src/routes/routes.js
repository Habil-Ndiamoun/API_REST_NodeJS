import express from "express";
import { addFilms, deleteFilm, getFilm, getFilms, updateFilm } from "../controllers/FilmController";
import { addLanguages, getLanguage, getLanguages } from "../controllers/LanguageController";

const router = express.Router();

/************************************************************
//Opérations CRUD pour un film :
*************************************************************/
//1.Ajout d'un nouveau film
router.post('/addFilm', addFilms);

//2.Consultation de tous les films
router.get('/films', getFilms);

//3.Consultation d'un film avec sa langue
router.get('/film/:id', getFilm);

//4.Modification d'un film
router.put('/updateFilm/:id', updateFilm);

//5.Suppression d'un film
router.delete('/deleteFilm/:id', deleteFilm);

/************************************************************
//Opérations CRUD pour un language :
*************************************************************/
//1.Ajout d'une nouvelle langue
router.post('/addLanguage', addLanguages);

//2.Consultation de toutes les languages
router.get('/languages', getLanguages);

//3.Consultation d'une langue avec ses films
router.get('/language/:id', getLanguage);

//4.Modifier la langue d'un film




module.exports = router;
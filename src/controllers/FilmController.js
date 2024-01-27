const { ObjectId } = require('mongodb');
const FilmModel = require('../models/Film');

//1.CREATE
const addFilms = async(req, res) => {
    const film = await FilmModel.create(req.body);
    
    if(film)
    {
        console.log(film);
        res.status(200).json(film);
    }
};

//2.GET ALL
const getFilms = async(req, res) => {
    try
    {
        const films = await FilmModel.find();
        res.status(200).json(films);
    }
    catch(err)
    {
        res.status(400).json({Message: err.message});
    }
}

//3.GET ONE
const getFilm = async(req, res) => {
    const idFilmRecherche = req.params.id;
    const filmRecherche = await FilmModel.findById(idFilmRecherche).populate("language");

    if(!filmRecherche)
    {
        res.status(400).json({Message: `Le film d'id ${idFilmRecherche} n'existe pas dans la bd!`});
    }

    res.status(200).json(filmRecherche);
};

//4.UPDATE
const updateFilm = async(req, res) => {
    const filmAModifier = await FilmModel.findById(req.params.id);

    if(!filmAModifier)
    {
        res.status(400).json({Message: `Le film d'id ${req.params.id} n'existe pas dans la bd!`});
    }

    const filmModifie = await FilmModel.findByIdAndUpdate(
        filmAModifier,
        req.body,
        {
            new: true
        }
    );

    res.status(200).json(filmModifie);
};

//5.DELETE
const deleteFilm = async (req, res) => {
    const filmASupprimer = await FilmModel.findById(req.params.id);

    if(!filmASupprimer)
    {
        res.status(400).json({Message: `Le film d'id ${req.params.id} n'existe pas dans la bd!`});
    }

    await FilmModel.deleteOne({_id: new ObjectId(req.params.id)});
    res.status(200).json({Message: `Le film d'id ${req.params.id} a été supprimé de la bd!`});
};






module.exports = {
    addFilms,
    getFilms,
    getFilm,
    updateFilm,
    deleteFilm
}
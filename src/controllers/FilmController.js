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
        const films = await FilmModel.find().populate("language");
        res.status(200).json(films);
    }
    catch(err)
    {
        res.status(400).json({Message: err.message});
    }
}

//3.GET ONE


//4.UPDATE



//5.DELETE
module.exports = {
    addFilms,
    getFilms
}
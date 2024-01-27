const LanguageModel = require('../models/Language');

//1.CREATE
const addLanguages = async(req, res) => {
    if(!req.body.name)
    {
        res.status(400).json({Message: "Certains paramètres sont indefinis!!!"});
    }

    const language = await LanguageModel.create({
        name: req.body.name
    });

    console.log(language);
    res.status(200).json(language);
};

//2.GET ALL
const getLanguages = async(req, res) => {
    try
    {
        const languages = LanguageModel.find().populate("films");
        console.log(languages);
        res.status(200).json(languages);
    }
    catch(err)
    {
        res.status(400).json({Message: err.message});
    }
};

//3.GET ONE (Afficher une langue avec ses films)
const getLanguage = async(req, res) => {
    const id = req.params.id;
    const languageRecherchee = await LanguageModel.findById(id).populate("films");

    if(!languageRecherchee)
    {
        res.status(400).json({Message: "La langue n'existe pas!"});
    }

    res.status(200).json(languageRecherchee);
};



module.exports = {
    addLanguages,
    getLanguages,
    getLanguage
}
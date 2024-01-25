const mongoose = require("mongoose");

const connectDB = async() => {
    try
    {
        mongoose.set('strictQuery', false);
       // mongoose.connect(process.env.MONGO_URI);  
       mongoose.connect("mongodb://127.0.0.1:27017/FilmDB");
        mongoose.connection.on("open", () => console.log("Connexion à la bd réussie!!!"));
    }
    catch(erreur)
    {
        mongoose.connection.on("error", () => console.log("Erreur de connexion à la bd!!!"));
        console.log(erreur);
        process.exit();
    }
}

module.exports = connectDB;
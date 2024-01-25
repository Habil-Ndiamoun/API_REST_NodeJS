import express from "express";
import connectDB from "./config/db";

const port = 7000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

//Connexion à la BD
connectDB();

app.use('/routes', require("./routes/routes"));

//Lancer le serveur
app.listen(port, () => {console.log(`L'application écoute sur le port ${port}!`)});
import express from "express";
const port = 7000;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.get('/hello', (req, res) => {
    res.send("Hello World!");
});

//Lancer le serveur
app.listen(port, () => {console.log(`L'application écoute sur le port ${port}!`)});
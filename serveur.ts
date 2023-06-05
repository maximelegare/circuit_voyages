// Importation des modules nécessaires au fichier serveur.ts
import express from "express";
import { Request, Response } from "express";
import bodyParser = require("body-parser");
import http from "http";
import path from "path";
//import { controleurFilms } from "./app/src/serveur/film/controleurFilm";

// Création d'un serveur Node dont les requêtes entrantes
// et sortantes sont gérées par express.

const exp = express();
const serveur = http.createServer(exp);
const porte = 8484;
serveur.listen(porte); // Famille des 8080-8888
console.log(`\nServeur démarré sur le port ${porte}`);

// Pour obtenir les ressources statiques css, js, images, ...
// qui partiront avec vos pages web via les balises link, script, <img src=
exp.use(express.static(__dirname + "/app/src"));
// Support json encoded bodies
exp.use(bodyParser.json());
// Support text encoded bodies
exp.use(bodyParser.text());
// Support text encoded bodies
exp.use(express.urlencoded({ extended: true }));

//Traiter les requêtes provenant du client et les réponses à retourner au client
exp.get("/", async (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/app/src/index.html"));
});

exp.all("/membre", async (req: Request, res: Response) => {
  // console.log("Route membres");
  // // console.log(req.query); // Récuperer les données de l'URL
  let prenom = req.body.prenom; // Récuperer les données envoyés par POST
  let nom = req.body.nom;
  let courriel = req.body.courriel;
  console.log("Prenom :" + prenom);
  console.log("Nom :" + nom);
   console.log("Courriel:" + courriel);
  let infos = {"msg": "Membre bien enregistré"};
  res.send(JSON.stringify(infos));
});

exp.all("/circuit", async (req: Request, res: Response) => {
  
});



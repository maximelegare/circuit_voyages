import { Request } from "express";
import fs from "fs-extra";
import sha1 from "sha1";
import { pool } from "../config/dbconf";

let reponse= {OK:true,msg:"",listeFilms:null};

export const Mdl_Film_ajouter = async (req: any): Promise<object> => {

  try {
      let dossierPochettes = "app/src/serveur/pochettes/";
      let titre = req.body.titre;
      let duree = req.body.duree;
      // Code pour ajoute un film
      let pochette = "avatar.jpg";
      //console.log(req.files)
      let requete = "INSERT INTO films VALUES(0,?,?,?)";
      if (req.files.length > 0) {
        let extension = req.files[0].originalname.split(".").pop();
        pochette = sha1(titre + process.hrtime()) + "." + extension;
        await fs.move(req.files[0].path, dossierPochettes + pochette);
      }
      await pool.query(requete, [titre, duree, pochette]); // Est synchrone
      reponse.msg = "Film bien enregistré";
  } catch (e:any) {
      reponse.OK=false;
      reponse.msg = "Problème avec l'enregistrement du film!";
  } finally {
    return reponse;
  }
}

export const Mdl_Film_lister = async (): Promise<object> => {

  let requette = "SELECT * FROM films";
  try {
    let resultat:any = await pool.query(requette,[]);
    let resultatJSON = resultat[0];
    //console.log(resultatJSON);
    reponse.listeFilms = resultatJSON;
  } catch (e:any) {
    reponse.OK=false;
    reponse.msg = "Probléme pour lister les films!";
  }finally {
    return reponse;
  }
}

export const Mdl_Film_enlever = async (req: Request): Promise<object> => {

   let requette = "SELECT * FROM films";
   // À compléter
  try {
    return await pool.query(requette, []);
  } catch (e: any) {
    return e;
  }finally {
    return [];
  }
};



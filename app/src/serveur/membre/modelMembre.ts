import { pool } from "../config/dbconf";
let message = { msg: "" };

export const Mdl_Membre_enregistrer = async (membre: any): Promise<object> => {
  //const connexion = await obtenirConnexion();

  try {
    const requeteMembre = "INSERT INTO membres VALUES(0,?,?,?,?,?)";

    const res = await pool.query(requeteMembre, [
      membre.nom,
      membre.prenom,
      membre.courriel,
      membre.sexe,
      membre.datenaissance,
    ]);

    const objRes = {...res[0]}
    const insertId =  JSON.parse(JSON.stringify(objRes)).insertId

    const requeteConnexion = "INSERT INTO connexion VALUES(?,?,?,?,?)";
    await pool.query(requeteConnexion, [
      insertId,
      membre.courriel,
      membre.pass,
      "M",
      "A",
    ]);
    message.msg = "Membre bien enregistré";
  } catch (e: any) {
    message.msg = "Problème avec l'enregistrement du membre!";
  } finally {
    return message;
  }
};

import { pool } from "../config/dbconf";
let message = {OK:true, msg:"", statut:"", role:""};
//https://expressjs.com/fr/guide/database-integration.html

    const nettoyerMsg = () =>{
        message.OK=true;
        message.msg="";
        message.statut="";
        message.role="";    
    }

   export const Mdl_Connexion = async (donneesConnexion: any): Promise<object> => {
    
    try {
       nettoyerMsg(); 
      const requeteSelection = "SELECT * FROM connexion WHERE courriel=? AND pass=?";
      let resultat: any = await pool.query( requeteSelection,[donneesConnexion.courrielc, donneesConnexion.passc]);
      //console.log(resultat);
      // [ [{idm: 1,courriel: 'marie@gmail.com',pass: '12345',role: 'M',statut: 'A'}],[ColumnDefinition {
      let resultatJSON = resultat[0];// [{idm: 1,courriel: 'marie@gmail.com',pass: '12345',role: 'M',statut: 'A'}
      if(resultatJSON.length > 0){
            message.OK = true;
            message.statut = resultatJSON[0].statut; 
            message.role = resultatJSON[0].role;
      } else {
            message.OK = false;
            message.msg ="SVP vérifiez vos paramétres de connexion.";
        }
    } catch (e:any) {
        console.error(e);
            message.OK = false,
            message.msg = "Problème avec connexion!";
    } finally {
        console.log(message);
            return message;
    }
 }


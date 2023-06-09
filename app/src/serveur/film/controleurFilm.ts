import { Request } from "express";

import { Mdl_Film_ajouter, Mdl_Film_lister } from "./modelFilm";

export const Ctl_Film_gestionActions = async (req: Request): Promise<object> => {
  let action: string = req.body.action;
  //console.log(action);
  switch (action) {
    case "ajouter":
      return await Mdl_Film_ajouter(req);
    case "lister":
      return await Mdl_Film_lister();
    // case "enlever":
    //   return await Mdl_Film_enlever(req);
    // case "fiche":
    //   return await Mdl_Film_fiche(req);
    // case "modifier":
    //   return await Mdl_Film_modifier(req);
    default:
      return {};
  }
};

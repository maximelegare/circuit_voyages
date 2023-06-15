
let enregistrer = () => {
  let formMembres = new FormData(document.getElementById("formEnreg"));
  formMembres.append("action", "enregistrer");
  let donneesMembre = formaterDonneesFormData(formMembres); // Dans global.js
  fetch("/membre", {
    method: "POST",
    body: donneesMembre,
  })
    .then((reponse) => reponse.json())
    .then((reponseJSON) => {
      afficherMsg("msgE", reponseJSON.msg); // Définie dans js/global.js. Le id où afficher et le message
      console.log("[reponse]", reponseJSON);
    })
    .catch((error) => {
      console.log("[error]", error);
      afficherMsg(
        "msgE",
        "Problème pour enregistrer membre, essayez plus tard. Merci."
      );
    });
};

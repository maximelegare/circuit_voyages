const afficherMessage = (msg, num) => {
    document.getElementById(`msg${num}`).innerHTML = msg;
    setTimeout(
        () => {
            document.getElementById(`msg${num}`).innerHTML = "";
        }, 5000
    );
}

const creerCard = (unFilm) => {
    return `
        <div id="${unFilm.id}" class="card style-cards" style="width: 18rem;">
        <img src="../../serveur/pochettes/${unFilm.pochette}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${unFilm.titre}</h5>
            <p class="card-text">${unFilm.id}</p>
            <p class="card-text">${unFilm.duree}</p>
        </div>
        </div>
    `;
}

const listerFilms = (listeFilms) => {
    let contenu = `<div class='row'>`;
    for (let unFilm of listeFilms) {
        contenu += creerCard(unFilm);
    }
    contenu += `</div>`;
    document.getElementById('contenu').innerHTML = contenu;
}

var controleurViewFilms = function (action, donnees, idmsg) {
    switch (action) {
        case 'enlever':
        case 'modifier':
        case 'enregistrer':
            afficherMessage(donnees.msg, idmsg);
            break;
        case 'lister':
            listerFilms(donnees);
            break;
        case 'dossier':

            break;
        case 'message':
            afficherMessage(donnees, idmsg);
            break;
    }
}



// let creerCard = (unFilm) => {
//     return `
//         <div id="${unFilm.id}" class="card" style="width: 18rem;">
//         <img src="serveur/pochettes/${unFilm.pochette}" class="card-img-top" alt="...">
//         <div class="card-body">
//             <h5 class="card-title">${unFilm.titre}</h5>
//             <p class="card-text">${unFilm.id}</p>
//             <p class="card-text">${unFilm.duree}</p>
//         </div>
//         </div>
//     `;
// }

// let lister = (listeFilms) => {
//     let contenu = `<div class='row'>`;
//     for (let unFilm of listeFilms) {
//         contenu += creerCard(unFilm);
//     }
//     contenu += `</div>`;
//     document.getElementById('contenu').innerHTML = contenu;
// }

// let reponseEnregistrer = (donnees) => {
//     afficherMessage(donnees, 1);
//     if (donnees.OK) {
//         let cardNouveauFilm = creerCard(donnees.filmInsere);
//         document.getElementById('contenu').firstElementChild.innerHTML += cardNouveauFilm;
//         listeFilms.push(donnees.filmInsere);
//     }
// }

// let reponseEnlever = (donnees) => {
//     afficherMessage(donnees, 3);
//     if (donnees.OK) {
//         let cardEnlever = document.getElementById(donnees.idFilm);
//         cardEnlever.parentNode.removeChild(cardEnlever);
//         listeFilmsActuelle = listeFilms.filter((unFilm) => {
//             return unFilm.id != donnees.idFilm;
//         });
//         listeFilms = listeFilmsActuelle;
//         alert(JSON.stringify(listeFilms));
//     }
// }

// let creerVue = (action, donnees) => {
//     // Contrôleur vue
//     switch (action) {
//         case "enregistrer": reponseEnregistrer(donnees); break;
//         case "modifier": afficherMessage(donnees, 2); break;
//         case "enlever": reponseEnlever(donnees); break;
//         case "lister":
//             lister(donnees);
//             break;
//     }
// }
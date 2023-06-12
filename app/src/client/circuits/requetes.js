// import { axios } from 'axios';
// let ajouter = () => {
// 	let formFilm = new FormData(document.getElementById('formAjouter'));
// 	formFilm.append("action", "ajouter");
// 	$.ajax({
// 		url: "/film",
// 		type: "POST",
// 		date: formFilm,
// 		dataType :"text",
// 		success : (reponse) => {
// 			alert(reponse);
// 		},
// 		fail: (e) => {
// 			alert("Oups");
// 		}

// 	});
// }
let ajouter = () =>  {
	
	let formFilm = new FormData(document.getElementById('formAjouter'));
    formFilm.append("action","ajouter");
	$.ajax({
		type: 'POST',
		url: '/film',
		data: formFilm,
		dataType: 'json',
		contentType: false,
		processData: false,
		success: function (reponse) {
			$('#formAjouter')[0].reset();
			 gestionViewFilms(reponse, 'enregistrer');
			 //$("#exampleModalCenter .close").click()
		},
		fail: function () {
		}
	});
	//const encoder = new FormDataEncoder(formFilm);
	//let donneesFilm =  formaterDonneesFormData(formFilm);// Dans global.js
	// let donneesFilm = new URLSearchParams(formFilm);
	// Remove 'Content-Type' header to allow browser to add
	// along with the correct 'boundary'
	
	// fetch('/film', {
	// 		method: "POST",
	// 	body: $('#formAjouter').serialize(),
	// 		headers:  {'Content-Type': undefined } 
	// 	})
	// 	.then(reponse => reponse.json())
	// 	.then(reponseJSON => {
	// 		afficherMessage("msgA",reponseJSON.msg);// Définie dans js/global.js. Le id où afficher et le message
	// 	})
	// 	.catch((error) => {
	// 		afficherMessage("msgA", "Probléme pour enregistrer film, essayez plus tard. Merci.");
	// 	});

	

	//let formData = new FormData();
	//formData.append('x': 'some test data');

	// axios.axios({
	// 	method: 'post',
	// 	url: '/film',
	// 	data: formFilm,
	// 	headers: { 'Content-Type': 'multipart/form-data' },
	// })
	// 	.then(res => {
	// 		console.log(`statusCode: ${res.statusCode}`)
	// 		console.log(res)
	// 	})
	// 	.catch(error => {
	// 		console.error(error)
	// 	})
}



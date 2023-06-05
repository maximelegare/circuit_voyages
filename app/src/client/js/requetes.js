const formaterDonneesFormData = (formData) => {
    const conteneur = new URLSearchParams();
    for (const pair of formData) {
        conteneur.append(pair[0], pair[1]);
    }
    return conteneur;
}

let requeteEnregistrer = () =>  {
	let formMembres = new FormData(document.getElementById('formEnreg'));
    formMembres.append("action","enregistrer");
	
    // $.ajax({
	// 	url : "/membre",    //http://localhost:8484/membre,
	// 	type : "POST",
	// 	data : $('#formEnreg').serialize(), //$('#formEnreg').serialize();
	// 	dataType : "json", //text pour le voir en format de string
	// 	processData : false,
	// 	success : reponse  => { 
    //     	alert(reponse.msg);
	// 	}, 
	// 	fail : e => {
    // 		alert( "error" );
  	// 	}
	// });
		
	let donneesMembre = formaterDonneesFormData(formMembres);
	//let donneesMembre = $('#formEnreg').serialize();
	fetch('/membre', {
			method: "POST",
			body:  donneesMembre
		})
		.then(reponse => {
			return reponse.json();
		}).then(reponseJSON => {
			alert(reponseJSON.msg);
		})
		.catch((error) => {
			alert("Problème pour enregistrer membre, essayez plus tard. Merci.");
		});

}
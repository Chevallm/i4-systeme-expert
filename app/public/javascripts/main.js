$(document).ready( () => {
	$('#run').click( () => {
		const polygone = {
			cote: $('#nb_cote').val(),
			angleDroits: $('#nb_angle_droit').val(),
			memeLongeur: $('#nb_meme_longeur').val(),
			parrallele: $('#nb_parrallele').val()
		}

		$.post('/solve', polygone, (reponse) => {
            $("#message").text(reponse)
        })
        
	})
})
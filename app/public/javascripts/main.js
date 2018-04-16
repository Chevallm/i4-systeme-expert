$(document).ready( () => {
<<<<<<< HEAD
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
=======
    $('#run').click( () => {
        $('#message').empty()
        const nbCote = $('#nb_cote').val()
        const nbAngleDroit = $('#nb_angle_droit').val()
        const nbCoteMemeLongueur = $('#nb_meme_longeur').val()
        const nbCoteParallele = $('#nb_parrallele').val()        
        $.post('/solve', {nbCote: nbCote, nbAngleDroit: nbAngleDroit, nbCoteMemeLongueur: nbCoteMemeLongueur, nbCoteParallele: nbCoteParallele}, (result => {
            result.split(',').forEach( mess => {
                $('#message').append(`<li>${mess}</li>`)
            })
        }))
    })
>>>>>>> d5931fd1eafeca599f3b8ec4d37250d2ba262dd6
})
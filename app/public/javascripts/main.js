$(document).ready( () => {
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
})
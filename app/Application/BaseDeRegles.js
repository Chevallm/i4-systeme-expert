class BaseDeRegles {

    constructor() {
        this.regles = []
    }

    ajouterRegle(regle) {
        this.regles.push(regle)
    }

    initialiser(regles) {
        this.regles = regles
    }

    retirerRegle(nom) {
        const regle = this.getRegles().find( (regle) => {return regle.nom == nom})
        if(regle) {
            this.getRegles().splice(this.regles.indexOf(regle), 1)
        } else {
            throw new Error(`Aucune règle trouvé pour le nom ${nom}`)
        }
    }

    nettoyer() {
        this.regles = []
    }

    getRegles() {
        return this.regles
    }
}

module.exports = BaseDeRegles

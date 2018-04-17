class BaseDeFaits {

    constructor() {
        this.faits = []
    }

    initialiser(faits) {
        this.faits = faits
    }

    ajouterFait(fait) {
        this.faits.push(fait)
    }

    retirerFait(nom) {
        const fait = this.faits.find( fait => {return fait.nom == nom})
        if(fait) {
            this.faits.splice(this.faits.indexOf(fait), 1)
        } else {
            throw new Error(`Aucun fait trouvé pour le nom ${nom}`)
        }
    }

    nettoyer() {
        this.faits = []
    }

    get(nom) {
        return this.faits.find( fait => { return fait.nom == nom})
    }

    afficher() {
        return this.faits.length > 0 ? this.faits.map( f => {return `${f.nom} (${f.niveau})`}).join(", ") : "Je ne sais pas"
    }

    afficherLePlusHaut() {        
        const tableauTrie = this.getFaits().sort( (fait, ancienFait)  => {            
            return fait.niveau - ancienFait.niveau            
        })
        return tableauTrie[tableauTrie.length-1].nom
    }

    getFaits() {
        return this.faits
    }

}

module.exports = BaseDeFaits
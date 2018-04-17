const BaseDeFaits = require('./BaseDeFaits')
const BaseDeRegles = require('./BaseDeRegles')
const Fait = require('./Fait')
const Regle = require('./Regle')

const YAML = require('yamljs')

class MoteurInference {

    constructor(polygoneUtilisateur) {
        // Chargement de la base de règles depuis le fichier regles.yml
        this.baseDeRegles = new BaseDeRegles()
        try {
            this.baseDeRegles.initialiser(YAML.load('Application/regles.yml').map( r => new Regle(r.conditions, r.conclusion, r.nom, r.niveau)))
        } catch(error) {
            console.error("Impossible de charger le fichier regles.yml || ", error.message)
        }
        this.baseDeFaits = new BaseDeFaits()
        this.initialiser(polygoneUtilisateur)    
    }

    initialiser(polygoneUtilisateur) {        
        const faitOrdre = new Fait(`ordre ${polygoneUtilisateur.nbCote}`, 0)
        const faitAngleDroit = new Fait(`${polygoneUtilisateur.nbAngleDroit} angle droit`, 0)
        const faitMemeLongueur = new Fait(`${polygoneUtilisateur.nbCoteMemeLongueur} côtés de même longueur`, 0)
        const faitParallele = new Fait(`${polygoneUtilisateur.nbCoteParallele} côtés parallèles`, 0)
        this.baseDeFaits.initialiser([faitOrdre, faitAngleDroit, faitMemeLongueur, faitParallele])  
    }

    isRegleApplicable(regle) {
        const bf = this.baseDeFaits
        
        
        // Si toutes les conditions sont dans la base de faits, la retourner
        if (regle.conditions.every( isConditionDansBaseFaits )) {            
            return regle
        }

        function isConditionDansBaseFaits(condition) {
            return bf.getFaits().some( fait => {
                return condition == fait.nom
            })
        }
    }


    trouverUneRegleApplicable(baseDeRegles) {
        const br = baseDeRegles

        const regleProchaine = null
        
        // Pour chaque règle dans la base de règles
        return br.getRegles().filter( regle => {
            // Vérifier si la règle est applicable       
            return this.isRegleApplicable(regle)
        })[0]   
    }

    resoudre() {        
        const bf = this.baseDeFaits
        const br = this.baseDeRegles
        
        const listeRegles = new BaseDeRegles()
        listeRegles.initialiser(br.getRegles())
        console.log(listeRegles.getRegles().length);
          
        while(listeRegles.getRegles().length > 0) {
            
            const regle = this.trouverUneRegleApplicable(listeRegles)           
            
            if(regle) {                
                const fait = new Fait(regle.conclusion, regle.niveau)                            
                bf.ajouterFait(fait)                                          
                listeRegles.retirerRegle(regle.nom)          
            } else {
                listeRegles.nettoyer()
            }
        }

        return bf.afficherLePlusHaut()
    }


}

module.exports = MoteurInference

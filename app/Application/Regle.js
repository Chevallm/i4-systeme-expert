const ET = ' ET '

class Regle {

    constructor(conditions, conclusion, nom, niveau) {
        this.conditions = conditions
        this.conclusion = conclusion
        this.nom = nom
        this.niveau = niveau
    }

    toString() {
        return `SI (${this.conditions.join(ET)}) ALORS: ${this.conclusion}.`
    }

}

module.exports = Regle
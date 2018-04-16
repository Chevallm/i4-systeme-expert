const ET = ' ET '

class Regle {

    constructor(conditions, conclusion, nom) {
        this.conditions = conditions
        this.conclusion = conclusion
        this.nom = nom
    }

    toString() {
        return `SI (${this.conditions.join(ET)}) ALORS: ${this.conclusion}.`
    }

}

module.exports = Regle
class Regle {

    constructor(condition, conclusion, nom) {
        this.condition = condition
        this.conclusion = conclusion
        this.nom = nom
    }

    toString() {
        let string = `${this.nom} : SI (`
        if(typeof this.condition == 'string') {
            string += this.condition
        } else {
            this.condition.forEach( c,i => {
                string += c
                if(i++ < this.condition.length) {
                    string += " ET "
                }
            })
        }
        string += `) ALORS ${this.conclusion}`
    }
}
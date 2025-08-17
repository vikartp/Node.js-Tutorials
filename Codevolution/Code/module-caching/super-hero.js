console.log('Super Hero Module Loaded');

class SuperHero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }

    display() {
        console.log(`${this.name} has the power of ${this.power}`);
    }
}

module.exports = SuperHero;
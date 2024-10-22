class Tank {
    constructor(name = 'Tank') {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class ArmoredTank extends Tank {
    constructor(name, armorLevel) {
        super(name);
        this.armorLevel = armorLevel;
    }

    getInfo() {
        return `Name: ${this.name}\nArmor Level: ${this.armorLevel}`;
    }
}

let tiger = new ArmoredTank('Tiger', 'Heavy');
console.log(tiger.getInfo());

let panther = new ArmoredTank('Panther', 'Medium');
console.log(panther.getInfo());

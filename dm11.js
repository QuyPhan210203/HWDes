class House {
    constructor(address ="sumque") {
        this.address = address;
    }
}

class Mansion extends House{
    constructor(address, floor) {
        super(address);
        this.floor = floor;
    }
}

const mansion = new Mansion("123 Luxury St.", 3);
console.log(`Address: ${mansion.address}, Floor: ${mansion.floor}`)
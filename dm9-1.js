class SquareShape { 
    constructor(edge1, edge2) {
        this.edge1 = edge1;
        this.edge2 = edge2;
    }

    displayInfo() {
        console.log(`Canh 1 hinh vuong: ${this.edge1}, Canh 2 hinh vuong: ${this.edge2}`);
    }

    calculateArea() {
        return this.edge1 * this.edge2;
    }
}

const square1 = new SquareShape(15, 15);
const square2 = new SquareShape(25, 25);

square1.displayInfo();
console.log(`Dien tich hinh vuong 1: ${square1.calculateArea()}`);

square2.displayInfo();
console.log(`Dien tich hinh vuong 1: ${square2.calculateArea()}`);

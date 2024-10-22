class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.log("Ban kinh phai la 1 so duong!");
        }
    }

    calculateArea() {
        return Math.PI = this._radius * this._radius;
    }
}

let circle = new Circle(5);
console.log("Ban kinh ban dau: " + circle._radius);

circle.radius = 10;
console.log("Ban kinh moi: " + circle.radius);

circle.radius = -3;
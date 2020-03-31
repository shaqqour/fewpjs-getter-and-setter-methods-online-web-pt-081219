// Add your Circle class here

class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return Math.PI * this.diameter;
    }

    get area() {
        return Math.PI * (this.radius * this.radius);
    }

    set diameter(dia) {
        this.radius = dia / 2;
    }

    set circumference(cir) {
        this.radius = cir / (Math.PI * 2)
    }

    set area(ar) {
        this.radius = Math.sqrt(ar / Math.PI)
    }

}
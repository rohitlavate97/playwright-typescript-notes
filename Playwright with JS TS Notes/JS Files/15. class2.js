class Triangle {
    constructor(a, b){
        if(!Number.isFinite(a) || a <= 0)
            throw new Error(`Invalid a ${a}`);
        if(!Number.isFinite(b) || b <= 0)
            throw new Error(`Invalid a ${a}`);
        this.a = a
        this.b = b
    }

    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    sayHi(){
        return "Hello from Triangle"
    }
}

let myTri = new Triangle(3, 4)
console.log(myTri.getArea())

let badTri = new Triangle("3", true)

//1. Validate the data
//2. Assign properties
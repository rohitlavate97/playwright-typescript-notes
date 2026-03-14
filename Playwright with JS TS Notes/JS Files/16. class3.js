
//Inheritance
class Triangle {
    constructor(a, b){
        this.a = a
        this.b = b
    }

    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    describe(){
        return `I am a Triangle with area of ${this.getArea()}`
    }
}

//Parent Child relationship
class ShyTriangle extends Triangle{
    describe(){
        return `(runs and hides)`
    }
}

const regularTri = new Triangle(3, 4)
const shyTri = new ShyTriangle(3, 4)

console.log(shyTri.getArea())
console.log(shyTri.describe())

console.log(regularTri.describe())

//super keyword


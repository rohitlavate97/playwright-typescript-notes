//Classes - Modern JS. ES2015/ES6
//Blueprint/Pattern/recipe
class Triangle {
    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }
}

const myTri = new Triangle()        //Heap Memory
console.log(myTri)      //{}

// myTri.a = 3
// myTri.b = 4
console.log(myTri.getArea())
console.log(myTri.getHypotenuse())

const secondTri = new Triangle()
// secondTri.a = 5
// secondTri.b = 12
console.log(secondTri.getArea())
console.log(secondTri.getHypotenuse())

//Constructors
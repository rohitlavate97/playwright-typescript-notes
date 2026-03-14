class Triangle {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    getArea() {
        return (this.a * this.b) / 2
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2)
    }

    sayHi() {
        return `Area is ${this.getArea()}`
    }
}

class ColorTriangle extends Triangle {
    constructor(a, b, color) {
        super(a, b)
        this.color = color
    }
}

const tri = new ColorTriangle(3, 4, "red")
console.log(tri)

//TS -> Javascript with additional types

//Static Checking
//TS exists only in development - At run time, there is no TS.
//TS -> JS

/*
When you write TypeScript code, the file has a .ts extension.
You then compile that .ts file using the TypeScript compiler (tsc).
The compiler converts your .ts file into a .js file - plain JavaScript.
This .js file can then be executed in any JavaScript environment - like a browser or Node.js.

Write in TypeScript → Compile to JavaScript → Run the JavaScript

npm install -g typescript
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

Run TS directly using TSX
npm install -g tsx
*/
// datatypes are divided on the basis of how we store them and how we access them from memory.
// J.S. is dynamically typed language.In it we don't need to define the datatypes
//example of symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);
// example of BigInt
const bigNumber = 34556677883n;
// Primitive
//7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
//Reference(non primitive)
//Array, Objects, Functions

const superheroes = ["superman", "Batman", "HULK"] 
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
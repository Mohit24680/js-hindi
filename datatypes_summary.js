// datatypes are divided on the basis of how we store them and how we access them from memory.
// J.S. is dynamically typed language.In it we don't need to define the datatypes
//example of symbol
// const id = Symbol("123");
// const anotherId = Symbol("123");

// console.log(id === anotherId);
// example of BigInt
// const bigNumber = 34556677883n;
// Primitive
//7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt.
//Reference(non primitive)
//Array, Objects, Functions

// const superheroes = ["superman", "Batman", "HULK"] 
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

             // Stack(primitive) and Heap (non-primitive) Memory 
// STACK
//In stack when we make a new varible and that is equal to old variable, then it makes the copy of old variable, and if we change anything in the new variable then it doesn't affect the old variable instead it changes the copy of old variable
let nameIs = "mohit"
let anotherName= nameIs
anotherName = "Pandey"
console.log(anotherName);
console.log(nameIs);
//HEAP
//In Heap when we change in the new variable it gets also changed  in the old variable cause it gives direct reference of old variable, it doesn't makes copy of old variable.
//below is an example of object
let myDetails={
    email:"mp@google.com",
    password:"gogogo"
}
let my1Details=myDetails
my1Details.email="sp@googli.com"
console.log(my1Details.email);
console.log(myDetails.email);
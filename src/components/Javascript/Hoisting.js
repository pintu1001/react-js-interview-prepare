//Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. For example :

// using test before declaring
console.log(test);   // undefined
var test;

// In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.

// For example :

// program to display value
a = 5;
console.log(a);
var a; // 5

// However in JavaScript, initializations are not hoisted. For example,
// program to display value
console.log(a);
var a = 5;
// undefined

// Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example :

// program to display value
var a = 4;

function greet() {
    b = 'hello';
    console.log(b); // hello
    var b;
}

greet(); 
// console.log(b);
// Output :
// hello
// Uncaught ReferenceError: b is not defined

// If a variable is used with the let keyword, that variable is not hoisted. For example:
// a = 5;
// console.log(a);
// let a; // Uncaught ReferenceError: Cannot access 'a' before initialization

//Function Hoisting
// A function can be called before declaring it. For example :

greet();

// function greet() {
//     console.log('Hi, there.');
// }
//Hi, there

// However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;

greet();

// let greet = function() {
//     console.log('Hi, there.');
// }
//Uncaught ReferenceError: greet is not defined


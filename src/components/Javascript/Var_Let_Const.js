// // 1. ------------  var ------------- 
// //var declarations are globally scoped or function/locally scoped.
// var greeter = "hey hi";

// function newFunction() {
//     var hello = "hello";
// }
// //Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function.
// var tester = "hey hi";

// function newFunction() {
//     var hello = "hello";
// }
// console.log(hello); // error: hello is not defined

// //var variables can be re-declared and updated
// var greeter = "hey hi";
// var greeter = "say Hello instead";
// //and
// var greeter = "hey hi";
// greeter = "say Hello instead";
// //Hoisting of var
// console.log(greeter);
// var greeter = "say hello"
// //So var variables are hoisted to the top of their scope and initialized with a value of undefined.

// // 2. ---------------- let -----------------

// //let is block scoped
// //So a variable declared in a block with let  is only available for use within that block. 
// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//     let hello = "say Hello instead";
//     console.log(hello);// "say Hello instead"
// }
// console.log(hello) // hello is not defined

// //let can be updated but not re-declared.
// let greeting = "say Hi";
// greeting = "say Hello instead";

// let greeting = "say Hi";
// let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

// //However, if the same variable is defined in different scopes, there will be no
// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // "say Hello instead"
// }
// console.log(greeting); // "say Hi"

// // 2. ---------------- const -----------------

// //const declarations are block scoped
// //const cannot be updated or re-declared
// const greeting = "say Hi";
// greeting = "say Hello instead";// error: Assignment to constant variable. 

// const greeting = "say Hi";
// const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared

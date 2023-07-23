// const odd = [1,3,5];
// const combined = [2,4,6, ...odd];
// console.log(combined); //[ 2, 4, 6, 1, 3, 5 ]

// function f(a, b, ...args) {
// 	console.log(args);
// }

// f(1, 2, 3, 4, 5); //[ 3, 4, 5 ]

// const odd = [1,3,5];
// const combined = [...odd, 2,4,6];
// console.log(combined); //[ 1, 3, 5, 2, 4, 6 ]

// // 1) Constructing array literal
// let initialChars = ['A', 'B'];
// let chars = [...initialChars, 'C', 'D'];
// console.log(chars); // ["A", "B", "C", "D"]

// // 2) Concatenating arrays
// let numbers = [1, 2];
// let moreNumbers = [3, 4];
// let allNumbers = [...numbers, ...moreNumbers];
// console.log(allNumbers); // [1, 2, 3, 4]

// // 3) Copying an array
// let scores = [80, 70, 90];
// let copiedScores = [...scores];
// console.log(copiedScores); // [80, 70, 90]

// let chars = ['A', ...'BC', 'D'];
// console.log(chars); // ["A", "B", "C", "D"]
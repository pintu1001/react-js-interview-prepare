// 1. Using For Loop ----

// let arr = [1, 2, 2, 3, 3];
// let output = [];
// let bool = false;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < output.length; j++) {
//         if (arr[i] === output[j]) {
//             bool = true;
//         }
//     }
//     count++;
//     if (count === 1 && bool === false) {
//         output.push(arr[i]);
//     }
//     bool = false;
//     count = 0;
// }
// console.log(arr);
// console.log(output);
// -----------------------------------------------------------------------------------

// 2. Using the Array filter() method

// let arr = [1, 2, 2, 3, 3];
// let output = [];

// output = arr.filter((item, i, array) => i === array.indexOf(item));

// console.log(output);
// ------------------------------------------------------------------------------------

// 3. Using reduce() Method

// let arr = [1, 2, 2, 3, 3];

// let output = arr.reduce((a, b) => {
//     if(!a.includes(b)){
//         a.push(b);
//     }
//     return a;
// },[])
// console.log(output);
// -------------------------------------------------------------------------------------

// 4.  Using forEach() Method

let arr = [1, 2, 2, 3, 3];
let output=[];

arr.forEach((item)=>{
    if(!output.includes(item)){
        output.push(item)
    }
})

console.log(output);
// let data = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a === 2) {
//         resolve("success");
//     }
//     else {
//         reject("Failed");
//     }
// });
// data.then((msg) => {
//     console.log("Hello" + msg);
// }).catch((msg) => {
//     console.log("Hello" + msg);
// });

// -------------------- Promise all -----------------------

//The Promise.all() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill , with an array of the fulfillment values. It rejects when any of the input's promises rejects, with this first rejection reason.

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("failure")
//     }, 2000)
// })

// let promise2 = 20;
// const promise3 = Promise.resolve("promise 3 success");

// Promise.all([promise1, promise2, promise3]).then((res) => {
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// })


// ------------------------ Promise.allSettled() ----------------------
// The Promise.allSettled() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("failure")
    }, 2000)
})

let promise2 = 20;
const promise3 = Promise.resolve("promise 3 success");

Promise.allSettled([promise1, promise2, promise3]).then((res) => {
    console.log(res);
})
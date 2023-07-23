// Polyfill of map function

let arr1 = [1, 2, 3, 4, 5];

let mappedArr = arr1.map(function (x) {
    return x * x;
});

// Custom Map

function MyPolyfillMap(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

function square(x) {
    return x * x;
}

// Polyfill of filter function

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];

let filteredArr = arr2.filter(item => item % 2 === 0);

// Custom filter

function MyPolyfillFilter(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function isEven(x) {
    if (x % 2 === 0) {
        return x;
    }
}

// console.log(MyPolyfillFilter(arr2, isEven));

// Polyfill of reduce function

let arr3 = [1, 2, 3, 4, 5];

let sumN = arr3.reduce((a, b) => a + b, 0);
// console.log(sum);

function reduce(arr, callback) {
    return (callback(arr));
}
function sum(arr) {
    let accumulator = 0;
    for (let i = 0; i < arr.length; i++) {
        accumulator += arr[i];
    }
    return accumulator;
}
console.log(reduce(arr3, sum));
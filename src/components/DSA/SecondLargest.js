// find the second largest number from a given arraylet arr = [11,2,44,7,6,25,19,47,10];


let arr = [11, 2, 44, 7, 6, 25, 19, 47, 10];
let first = arr[0];
let second = arr[1];
for (let i = 2; i < arr.length; i++) {
    if (arr[i] > first) {
        second = first;
        first = arr[i];
    }
    else if (arr[i] > second) {
        second = arr[i];
    }
}
console.log(first)  // 47
console.log(second) // 44
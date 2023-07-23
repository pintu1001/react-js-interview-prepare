function Addition(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

let res = Addition(2)(4)(7);
console.log(res); // 13


// Infinite Currying

function Add(a) {
    return function (b) {
        if (b) return Add(a + b);
        return a;
    }
}

console.log(Add(5)(4)(3)(6)());  // 18
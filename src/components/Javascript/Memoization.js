let sum = 0;

const Calc = (n) => {
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

const Memoization = (fun) => {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            let result = fun(n);
            cache[n] = result;
            return result;
        }
    }
}

console.time();
const effecient = Memoization(Calc);
console.log(effecient(20));
console.timeEnd();

console.time();
console.log(effecient(20));
console.timeEnd();

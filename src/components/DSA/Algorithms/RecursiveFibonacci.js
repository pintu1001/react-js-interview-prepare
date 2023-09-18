function RecursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return RecursiveFibonacci(n - 1) + RecursiveFibonacci(n - 2);
}

console.log(RecursiveFibonacci(2));
console.log(RecursiveFibonacci(3));
console.log(RecursiveFibonacci(6));
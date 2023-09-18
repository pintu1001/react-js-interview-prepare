function Factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = res * i;
    }
    console.log(res);
}
Factorial(0);  // 1
Factorial(1);  // 1
Factorial(5);  // 120

// Time Complexity = O(n)  - linear
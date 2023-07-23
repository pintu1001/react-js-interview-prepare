// A Closure is the combination of a function bundled together with 

function test() {
    let a = 100;
    return function inner() {
        console.log(++a);
    }
}

const fun = test();

fun();
fun();
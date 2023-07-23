// 1. data need to show serially 

let data = [1000, 8000, 5000, 3000];

function fun(timer) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hello " + timer);
        }, timer);

    })
}

data.reduce((a, b) => {
    return a.then(() => {
        return fun(b).then(res => console.log(res))
    })
}, Promise.resolve());
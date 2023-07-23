let data = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a === 2) {
        resolve("success");
    }
    else {
        reject("Failed");
    }
});
data.then((msg) => {
    console.log("Hello" + msg);
}).catch((msg) => {
    console.log("Hello" + msg);
})
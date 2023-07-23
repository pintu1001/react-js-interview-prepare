// Problem Statement ------

const datas = [
    { name: 'ajay', job: 'developer' },
    { name: 'anuj', job: 'developer' }
];

function getDatas() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data, index) => {
            output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

// function createData(newData) {
//     setTimeout(() => {
//         datas.push(newData);
//     }, 2000)
// }
// createData({ name: 'vivek', job: 'developer' })
// getDatas();

// 1. Using CallBack------------------------

// function createData(newData,callback) {
//     setTimeout(() => {
//         datas.push(newData);
//         callback();
//     }, 2000)
// }
// createData({ name: 'vivek', job: 'developer' },getDatas);

// 2. Using Promise

// function createData(newData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newData);
//             let error = true;
//             if (error) {
//                 resolve();
//             }
//             else {
//                 reject('hello error');
//             }
//         }, 2000)
//     })

// }
// createData({ name: 'vivek', job: 'developer' }).then(getDatas);

// 2. Using Async and Await

function createData(newData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            datas.push(newData);
            let error = true;
            if (error) {
                resolve();
            }
            else {
                reject('hello error');
            }
        }, 2000)
    })

}

async function start(){
    await createData({ name: 'vivek', job: 'developer' });
    getDatas();
}

start();
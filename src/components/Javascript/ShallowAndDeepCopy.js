import React from 'react';



function ShallowAndDeepCopy() {
    // 1. Normal Copy
    // let obj = {
    //     name: 'Pintu',
    // };
    // let user = obj;
    // user.name = 'Test'
    // console.log(obj);

    // 2. Shallow Copy One
    // let obj = {
    //     name: 'Pintu',
    // };
    // let user = Object.assign({},obj);
    // user.name = 'Test'
    // console.log(obj);

    // 3. Shallow Copy Two
    // let obj = {
    //     name: 'Pintu',
    //     age: '28'
    // };
    // let user = { ...obj };
    // user.name = 'Test';
    // user.age = '30';
    // console.log(obj);

    // 4. Deep Copy One
    // let obj = {
    //     name: 'Pintu',
    //     address: {
    //         city: 'bbsr',
    //         state: 'odisha'
    //     },
    // };
    // let user = JSON.parse(JSON.stringify(obj));
    // user.name = 'Test';
    // user.address.city = 'cuttack';
    // console.log(obj);


    return (
        <div>
            Hello Shallow And Deep Copy
        </div>
    )
}

export default ShallowAndDeepCopy;
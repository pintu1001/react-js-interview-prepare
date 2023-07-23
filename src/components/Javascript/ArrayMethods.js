import React from 'react';

function ArrayMethods() {
    //  1. --------- filter method -----------------
    // const fruits = ["apple", "orange", "mango", "banana"];
    // let result = fruits.filter(res => {
    //     return res.length > 5
    // })
    // console.log(result);
    // ["orange", "banana"];

    //  2. --------- find method -----------------
    // const arr = [5, 12, 99, 56, 22];
    // let result = arr.find(ele => ele > 20);
    // console.log(result);
    // 99

    //  3. --------- some method -----------------
    // const arr = [5, 12, 99, 56, 22];
    // let result = arr.some(ele => ele > 20);
    // console.log(result);
    // true

    //  4. --------- every method -----------------
    // const arr = [5, 12, 99, 56, 22];
    // let result = arr.every(ele => ele > 20);
    // console.log(result);
    // false

    //  5. --------- include method -----------------
    // const fruits = ["apple", "orange", "mango", "banana"];
    // let result = fruits.includes("apple");
    // console.log(result);
    // true

    //  6. --------- reduce method -----------------
    // const arr = [5, 10, 15, 20];
    // let result = arr.reduce((a, b) => a + b);
    // console.log(result);
    // 50

    //  7. --------- concat method -----------------
    // const arr1 = [1, 2, 3];
    // const arr2 = [4, 5, 6];
    // let result = arr1.concat(arr2);
    // console.log(result);
    // [1, 2, 3, 4, 5, 6]

    //  8. --------- set unique method -----------------
    // const arr = [1, 2, 2, 3, 3];
    // let result = [...new Set(arr)];
    // console.log(result);
    // [1, 2, 3]

    // 9. --------- pop method-----------------
    // const arr = [1, 2, 3, 4, 5];
    // let result = arr.pop();
    // console.log(arr);
    // [1, 2, 3, 4]

    //  10. --------- shift method -----------------
    // const arr = [1, 2, 3, 4, 5];
    // let result = arr.shift();
    // console.log(arr);
    // [2, 3, 4, 5]

    //  11. --------- unshift method -----------------
    // const arr = [1, 2, 3, 4, 5];
    // let result = arr.unshift(6);
    // console.log(arr);
    // [6, 1, 2, 3, 4, 5]

    //  12. --------- push method -----------------
    // const arr = [1, 2, 3, 4, 5];
    // let result = arr.push(6);
    // console.log(arr);
    // [1, 2, 3, 4, 5, 6]

    //  12. --------- sort method -----------------
    // const fruits = ["Banana", "Orange", "Apple", "Mango"];
    // let result = fruits.sort();
    // console.log(result);  // ['Apple', 'Banana', 'Mango', 'Orange']


    //  13. --------- flat method -----------------
    // let arr=[1,[2,3],4];
    // let arr1=[1,[2,3],4,[5,6,[7,8,[9,0]]]];
    // let result = arr.flat();
    // let result1 = arr1.flat(Infinity);
    // console.log(result);// [1, 2, 3, 4]
    // console.log(result1);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

    //  14. --------- slice method -----------------
    // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    // const result = fruits.slice(1, 3);
    // console.log(result); // ['Orange', 'Lemon']

    //  15. --------- splice method -----------------
    // const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
    // const result = fruits.splice(2, 2);
    // console.log(fruits); // ['Banana', 'Orange', 'Kiwi']

    //  16. --------- findIndex method -----------------
    // const arr = [10, 20, 30, 40, 50];
    // const result = arr.findIndex(x => x > 10)
    // console.log(result) // 1

    //  17. --------- lastIndexOf method -----------------
    // const arr = [1, 2, 3, 4, 5, 3];
    // const lastIndex = arr.lastIndexOf(3)
    // console.log(lastIndex) // 5
    return (
        <div>
            Hello Array
        </div>
    )
}
export default ArrayMethods;
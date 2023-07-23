// -- 1. Return the value which is not duplicated 
// input : [1,2,3,2,1]
// output : [3]
// let arr = [1,2,3,2,1];
// let res = arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x))
// console.log(res);  // [ 3 ]
// ------------------------------------------------------------------------------------------------

// 2. Sort a string by length asc
// input : "react is a library"
// output : "a is react library" 
// let str = "react is a library";
// const reverseString=(data)=>{
//     let arr = data.split(" ");
//     arr.sort((a,b)=>{
//         return a.length-b.length
//     })
//     return arr.join(" ");
// }
// console.log(reverseString(str));
// --------------------------------------------------------------------------------------------------

// 3. Count Duplicate elements in Array
// input :["a","b","c","a","b","b","c","d"]
// output : { a: 2, b: 3, c: 2, d: 1 }
// const items = ["a","b","c","a","b","b","c","d"];
// function CountDuplicate(data){
//    let output = {};
//     data.map(item=>{
//         output[item]=(output[item]||0)+1
//     });
//     return output;
// }
// console.log(CountDuplicate(items));  { a: 2, b: 3, c: 2, d: 1 }
// ---------------------------------------------------------------------------------------------------

// 4. create an array of sums : at any index put sum of all elements expect that index
// let arr = [2, 7, 11, 4, -2];
// let res = [];
// arr.forEach((item, i, data) => {
//     let sum = arr.reduce((a, b) => a + b);
//     res.push(sum - item);
// });
// console.log(res); //[ 20, 15, 11, 18, 24 ]
// -------------------------------------------------------------------------------------------------


// 5. make an object which has only property value which are common on input1 object
// const input1={a:1,b:2,c:3,d:10,e:12};
// const input2={a:2,e:12,f:6,d:10};

// function fun(data1,data2){
//     let output={};
//     for(let i in data1){
//         if(data1[i]===data2[i]){
//             output[i]=data1[i];
//             }
//     }
//     console.log(output); // [d:10,e:12];
// }

// fun(input1,input2);
// ------------------------------------------------------------------------------------------------------

// 6. find the second largest number in the array

// let arr=[1,2,-2,11,7,1];
// let arr2=[1,4,7,2,4,7];
// let res=arr.sort((a,b)=>{
//     return a-b
// });
// let data=[...new Set(arr2)];
// let res2=data.sort((a,b)=>{
//     return a-b
// })
// console.log(res[arr.length-2]); //7
// console.log(res2[data.length-2]); //4
// ------------------------------------------------------------------------------------------------------


// 7. unique array of objects 

// const array =
//     [
//         { "name": "Joe", "age": 17 },
//         { "name": "Joe", "age": 17 },
//         { "name": "Carl", "age": 35 }
//     ]
// // soltion one :
// let uniqueObjArray = [...new Map(array.map((item) => [item["name"], item])).values()];
// // soltion two :
// var unique = Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
// Remove duplictes from a given array of numbers

let arr = [1, 3, 3, 5, 5, 7, 8];

const removeDuplicates = (data) => {
    let obj = {};
    let result = [];
    let duplicates = [];
    for (let i = 0; i < data.length; i++) {
        if (!obj[data[i]]) {
            result.push(data[i]);
        }
        else{
            duplicates.push(data[i]);
        }
        obj[data[i]] = true;
    }
    return result;
}

console.log(removeDuplicates(arr));
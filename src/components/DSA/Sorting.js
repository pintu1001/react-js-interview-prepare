// sort an array using bubble sort

let arr = [4, 6, 5, 3, 1, 2];

const bubbleSort = (data) => {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length - i - 1; j++) {
            if (data[j] > data[j + 1]) {
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}

// console.log(bubbleSort(arr)); // [1,2,3,4,5,6]

// sort array of 0s 1s 

let arr1 = [0, 1, 0, 0, 1, 1];

const sorting = (data) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 0) {
            count++
        }
    }
    for (let i = 0; i < count; i++) {
        data[i] = 0;
    }
    for (let i = count; i < data.length; i++) {
        data[i] = 1;
    }
    return data;
}

console.log(sorting(arr1));


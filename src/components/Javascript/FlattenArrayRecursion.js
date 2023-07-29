let arr = [1, 2, [3, 4], 5, [6, 7, [8, 9, 10]]];
let result = [];
function Flattern(data) {
    data.forEach((res) => {
        if (Array.isArray(res)) {
            Flattern(res);
        }
        else {
            result.push(res);
        }
    });
    return result;
}
console.log(Flattern(arr));


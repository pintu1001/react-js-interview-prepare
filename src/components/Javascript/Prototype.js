const obj1 = {
    name: "pintu"
}
const obj2 = {
    age: 28,
    __proto__: obj1
}
const obj3 = {
    address: 'bbsr',
    __proto__: obj2
}

console.log(obj3.name);

Array.prototype.show = function () {
    let arr = [];
    this.forEach(item => {
        arr.push(item * item)
    });
    return arr;
}

const nums = [1, 2];

console.log(nums.show());

Array.prototype.convertIntoObject = function () {
    let newobj = {}
    this.forEach(item => {
        newobj[item] = item;
    });
    return newobj;
}
const cities = ['bbsr', 'ctc'];
console.log(cities.convertIntoObject());
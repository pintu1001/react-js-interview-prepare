

const CallApplyBind = () => {
    // 1. Call Example One
    let obj1 = {
        name: 'Pintu',
        age: 28,
        PrintDetail: function () {
            console.log(this.name );
        }
        // PrintDetail: () => {
        //     console.log(this.name);
        // }
    }
    obj1.PrintDetail();
    let obj2 = {
        name: 'Test',
        age: 30,
    }
    obj1.PrintDetail.call(obj2); // Pintu then Test


    // 2. Call Example Two
    // let obj1 = {
    //     name: 'Pintu',
    //     age: 28,
    // }
    // let PrintDetail = function (state) {
    //     console.log(this.name + " " + state);
    // }
    // PrintDetail.call(obj1, "Odisha");// Pintu Odisha
    // let obj2 = {
    //     name: 'Test',
    //     age: 30,
    // }
    // PrintDetail.call(obj2, "Delhi"); //Test Delhi


    // 3. Apply Example
    // let obj1 = {
    //     name: 'Pintu',
    //     age: 28,
    // }
    // let PrintDetail = function (state, city) {
    //     console.log(this.name + " " + state + " " + city);
    // }
    // PrintDetail.apply(obj1, ["Odisha", "bbsr"]);// Pintu Odisha bbsr
    // let obj2 = {
    //     name: 'Test',
    //     age: 30,
    // }
    // PrintDetail.apply(obj2, ["Delhi", "Taj"]); //Test Delhi Taj


    // 4. Bind Method
    // let obj1 = {
    //     name: 'Pintu',
    //     age: 28,
    // }
    // let PrintDetail = function (state, city) {
    //     console.log(this.name + " " + state + " " + city);
    // }
    // PrintDetail.apply(obj1, ["Odisha", "bbsr"]);// Pintu Odisha bbsr
    // let obj2 = {
    //     name: 'Test',
    //     age: 30,
    // }
    // PrintDetail.apply(obj2, ["Delhi", "Taj"]); //Test Delhi Taj
    // let new_obj  = PrintDetail.bind(obj1, "Delhi", "Taj");
    // new_obj();
}
export default CallApplyBind;
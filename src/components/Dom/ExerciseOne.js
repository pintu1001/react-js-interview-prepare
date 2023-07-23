// 1. Call 1st api get data and show in a dropdown .
// 2. onclick of dropdown call 2nd api using that id
// 3. then cache that data in local
// 4. if agin click that is get data from cache



let output = document.createElement("select");
function getData() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            output.innerHTML += `<option>Select Name</option>`;
            data.forEach((item) => {
                output.innerHTML += `<option value=${item.id}>${item.name}</option>`;
            });
            // console.log(output);
            document.body.append(output);
        });
}
getData();
let obj = {};
output.addEventListener("change", (e) => {
    let id = e.target.value;
    if (obj[id]) {
        console.log("getting data from cache", obj[id]);
    }
    else {
        fetch("https://jsonplaceholder.typicode.com/users/" + id + "")
            .then((res) => res.json())
            .then((response) => {
                console.log("getting data from server", response);
                obj[id] = response;
            })
    }
});
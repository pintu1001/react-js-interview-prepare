import "./styles.css";
let cache = {};
window.myfunction = (id) => {
  if (cache[id]) {
    console.log("returned from cache", cache[id].name);
  } else {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => res.json())
      .then((result) => {
        console.log("returned from api", result.name);
        cache[id] = result;
      });
  }
};

function getData() {
  let output = `<ul></ul>`;
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item, i) => {
        // output +=
        //   "<li onclick='myfunction(" + item.id + ")'>" + item.name + "</li>";
        output += `<li onclick='myfunction(${item.id})'>${item.name}</li>`;
      });
      document.body.innerHTML = output;
    });
}

getData();

let xhr = new XMLHttpRequest()

let products = []

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    // let todos = document.getElementById("todos");
    // todos.innerHTML = "";
    products = JSON.parse(xhr.responseText);
    
    console.log(JSON.parse(xhr.responseText))

//       for (let id in res) {
//         if (res[id]["imp"] === true) {
//           todos.innerHTML += divTodo(res[id], id);
//         }
//       }

//       for (let id in res) {
//         if (res[id]["imp"] === false || res[id]["imp"] === undefined) {
//           todos.innerHTML += divTodo(res[id], id);
//         }
//       }
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
  true
);

xhr.send();

console.log(products)

const home = products.map(p => `
<div>
  ${p.name}
</div>
`)

export default home<h1;
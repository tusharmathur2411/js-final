let xhr = new XMLHttpRequest()

 const productDiv = () => `<div class='todo ${t["imp"] ? "imp" : ""}' id=${id}>
    <div class="todo-main">
      <h2>${
        t["task"]
      }
      <span>ETA: ${t["date"]} ${t["time"]}</span>
    </div>`


xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let root = document.getElementById("root");
    // todos.innerHTML = "";
    const res = JSON.parse(xhr.responseText);
    
    console.log(JSON.parse(xhr.responseText))

    for (let id in res) {
      if (res[id]["imp"] === true) {
        root.innerHTML += divTodo(res[id], id);
      }
    }

    // for (let id in res) {
    //   if (res[id]["imp"] === false || res[id]["imp"] === undefined) {
    //     todos.innerHTML += divTodo(res[id], id);
    //   }
    // }
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
  false
);

xhr.send();


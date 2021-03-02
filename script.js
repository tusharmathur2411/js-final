let xhr = new XMLHttpRequest()

 const productDiv = (pr, id) => `<div class='product' id=${id}>
    <div class="prod-main">
      <img src""
      <h3>${
        pr["name"]
      }</h3>
    </div>`


xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let clothing = document.getElementById("clothing");
    let accessories = document.getElementById("accessories");
    // todos.innerHTML = "";
    const res = JSON.parse(xhr.responseText);
    
    console.log(res)

    for (let id in res) {
      if (!res[id]["isAccessory"]) {
        clothing.innerHTML += productDiv(res[id], id);
      }
    }

    for (let id in res) {
      if (res[id]["isAccessory"]) {
        accessories.innerHTML += productDiv(res[id], id);
      }
    }
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
  false
);

xhr.send();


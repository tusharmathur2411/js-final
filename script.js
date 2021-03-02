let xhr = new XMLHttpRequest()

 const productDiv = (pr, id) => `
  <div class='product' id=${id}>
    <img src="${pr["preview"]}" width="100%"/>
    <h4>${pr["name"]}</h4>
    <h6>${pr["brand"]}</h6>
    <h6>${pr["price"]}</h6>
  </div>`


xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let clothing = document.getElementById("clothing");
    let accessories = document.getElementById("accessories");
    // todos.innerHTML = "";
    const res = JSON.parse(xhr.responseText);
    
    console.log(res[0])

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
  true
);

xhr.send();


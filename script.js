let xhr = new XMLHttpRequest()

const cart = JSON.parse(localStorage.getItem("cart"))
// document.getElementById("cart-count").innerText = cart.reduce((a,c) => a+c.count)

console.log(cart.reduce((a,c) => a+c.count))

const productDiv = (pr, id) => `
<a href="./product.html?${id}">
  <div class='product' id=${id}>
    <img src="${pr["preview"]}" width="100%"/>
    <h4>${pr["name"]}</h4>
    <h6>${pr["brand"]}</h6>
    <h6>${pr["price"]}</h6>
  </div>
</a>`


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
    
    localStorage.setItem("cart", JSON.stringify(res.map(i => ({...i, count: 0}))));
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product",
  true
);

xhr.send();


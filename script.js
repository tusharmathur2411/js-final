import navbar from './nav.js'



window.onload = () => {
  let cart = localStorage.getItem("cart");
  localStorage.setItem("cart", (cart===null || cart===""?  JSON.stringify([]): cart));
  
  document.getElementById("cart-count").innerText = JSON.parse(cart).reduce((a,v) => (a+v.count),0)
}
let xhr = new XMLHttpRequest()


const productDiv = (pr, id) => `
<a href="./product.html?${pr.id}">
  <div class='product' id=${pr.id}>
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


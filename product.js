let xhr = new XMLHttpRequest()

const productDiv = (pr) => `
  <div class="pro-div">
    <img id="main-img" src="${pr["preview"]}" width="30%"/>
    <div class="desc-div">
      <h1>${pr.name}</h1>
      <h3>Description</h3>
      <p>${pr.description}</p>
      <div class="preview"><img class="preview-btn" style="border: thick solid #000" onClick="changeImage(event)" src="${pr["photos"][0]}" width="20%"/><img class="preview-btn" onClick="changeImage(event)" src="${pr["photos"][1]}" width="20%"/><img class="preview-btn" onClick="changeImage(event)" src="${pr["photos"][2]}" width="20%"/></div>
      <div class="add-btn"><button onClick="onAdd()">Add to Cart</button></div>
    </div>
  </div>
  
`
const mainDiv = document.getElementById("main")
const id = window.location.search.substr(1)
let product;

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    product = JSON.parse(xhr.responseText);
    
    console.log(product)

    mainDiv.innerHTML = productDiv(product);
  }
};

xhr.open(
  "GET",
  "https://5d76bf96515d1a0014085cf9.mockapi.io/product/" + id,
  true
);

xhr.send();

const onAdd = () => {
  let cart = JSON.parse(localStorage.getItem("cart"))
  const current = cart.filter(i => i.id==id)[0]
  if (current===undefined) {
    product.count = 1
    cart.push(product)
  }
  else{
    cart = cart.map(i => (i.id==id? {...i, count: i.count+1} : i))
  }
  
  localStorage.setItem("cart", JSON.stringify(cart))
  window.dispatchEvent(new Event("storage"));
}

const changeImage = (ev) => {
  for (let _ of ev.target.parentNode.childNodes) {
    _.style.border = ""
  }
  ev.target.style.border = "thick solid #000";
  document.getElementById("main-img").src = ev.target.src
}